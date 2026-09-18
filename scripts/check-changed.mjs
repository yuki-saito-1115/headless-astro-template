import { execFileSync } from "node:child_process";

/**
 * Git差分から影響を受けるアプリケーションworkspaceだけを選んで検査するスクリプト
 *
 * `node scripts/check-changed.mjs` は各アプリケーションworkspaceでAstroとTypeScriptを検査する
 * `node scripts/check-changed.mjs typecheck` はTypeScriptだけを検査する
 *
 * アプリケーションworkspace固有の変更は該当workspaceだけを検査し、
 * 共有パッケージworkspaceまたはルート設定の変更は全アプリケーションworkspaceを検査する
 */

// Git差分から影響を受けるアプリケーションworkspaceだけを選び、不要な全体検査を避ける。
const apps = ["main", "preview", "staging"];
// 指定がなければ、ステージ済みの変更を含む現在の作業ツリーとの差分を対象にする。
const baseRef = process.env.CHECK_BASE_REF ?? "HEAD";
// `typecheck` を渡すとTypeScriptだけ、それ以外はAstroとTypeScriptの両方を検査する。
const script = process.argv[2] ?? "check";

if (!new Set(["check", "typecheck"]).has(script)) {
  console.error(`Unsupported check script: ${script}`);
  process.exit(1);
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

let changedFiles;

try {
  // 削除済みファイルは検査対象にできないため、追加・コピー・変更・リネームだけを取得する。
  changedFiles = git("diff", "--name-only", "--diff-filter=ACMR", baseRef)
    .split("\n")
    .filter(Boolean);
} catch (error) {
  console.error(`Failed to determine changes from ${baseRef}.`);
  console.error(error.message);
  process.exit(1);
}

const affectedApps = new Set();
// 共有パッケージworkspaceとルート設定の変更は、すべてのアプリケーションworkspaceへ影響する可能性がある。
const checkAll = changedFiles.some(
  (file) =>
    file.startsWith("packages/content/") ||
    file.startsWith("packages/ui/") ||
    !file.startsWith("apps/"),
);

if (checkAll) {
  apps.forEach((app) => {
    affectedApps.add(app);
  });
} else {
  // アプリケーションworkspace固有の変更なら、そのworkspaceだけを検査する。
  for (const app of apps) {
    if (changedFiles.some((file) => file.startsWith(`apps/${app}/`))) {
      affectedApps.add(app);
    }
  }
}

if (affectedApps.size === 0) {
  // ドキュメントなど、アプリケーションworkspaceと無関係な変更では検査を省略する。
  console.log("No application workspace changes detected.");
  process.exit(0);
}

for (const app of apps) {
  if (!affectedApps.has(app)) continue;

  console.log(
    `${script === "check" ? "Checking" : "Type-checking"} ${app} application workspace...`,
  );
  try {
    // Astroのテンプレート診断にはastro check、.tsの増分型検査にはtscを使う。
    const commands =
      script === "check"
        ? [
            ["../../node_modules/astro/bin/astro.mjs", "check"],
            ["../../node_modules/typescript/bin/tsc", "--noEmit"],
          ]
        : [["../../node_modules/typescript/bin/tsc", "--noEmit"]];

    for (const [command, ...args] of commands) {
      // 各アプリケーションworkspaceをカレントディレクトリにして、そのtsconfig.jsonとastro.config.mjsを使う。
      execFileSync(process.execPath, [command, ...args], {
        cwd: `apps/${app}`,
        stdio: "inherit",
      });
    }
  } catch (error) {
    process.exit(error.status ?? 1);
  }
}
