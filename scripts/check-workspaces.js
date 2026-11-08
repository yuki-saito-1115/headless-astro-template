// 全workspace、または指定した差分の影響範囲を、共通の準備・チェック処理で検証する。
import { execFileSync, spawn } from 'node:child_process';
import { appendFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const rootDirectory = new URL('../', import.meta.url);

const workspaces = [
  'site',
  'preview',
  'storybook',
  'docs',
  'content',
  'ui',
];
const consumers = {
  content: workspaces,
  ui: [
    'site',
    'preview',
    'storybook',
    'ui',
  ],
};

export function selectWorkspaces(paths) {
  const selected = new Set();

  for (const path of paths) {
    // リポジトリの説明・Renovate設定だけならアプリの型チェックは不要。
    if (/^(README\.md|renovate\.jsonc|LICENSE(?:\.md|\.txt)?)$/.test(path)) {
      continue;
    }

    // 依存関係やTS設定の変更は他workspaceにも影響するため、すべてを確認する。
    if (/(^|\/)package(?:-lock)?\.json$/.test(path) || /(^|\/)tsconfig[^/]*\.json$/.test(path)) {
      return [
        ...workspaces,
      ];
    }

    const app = /^apps\/(site|preview|storybook|docs)\//.exec(path)?.[1];
    if (app) {
      selected.add(app);
      continue;
    }

    const shared = /^packages\/(content|ui)\//.exec(path)?.[1];
    if (shared) {
      for (const consumer of consumers[shared]) {
        selected.add(consumer);
      }
      continue;
    }

    // 共通設定・デザイントークン・未知のパスは、影響範囲を狭く推測しない。
    return [
      ...workspaces,
    ];
  }

  return workspaces.filter((workspace) => selected.has(workspace));
}

export function parseOptions(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--plan' || arg === '--help') {
      options[arg.slice(2)] = true;
    } else if (arg === '--base' || arg === '--head') {
      const value = args[++index];
      if (!value || value.startsWith('--')) {
        throw new Error(`${arg}にはコミットまたはブランチを指定してください。`);
      }
      options[arg.slice(2)] = value;
    } else {
      throw new Error(`未対応の引数です: ${arg}`);
    }
  }
  if (Boolean(options.base) !== Boolean(options.head)) {
    throw new Error('--baseと--headは両方指定してください。');
  }
  return options;
}

function resolveCommit(ref) {
  return execFileSync(
    'git',
    [
      'rev-parse',
      '--verify',
      '--end-of-options',
      `${ref}^{commit}`,
    ],
    {
      cwd: rootDirectory,
      encoding: 'utf8',
    },
  ).trim();
}

function runCommand(args) {
  return new Promise((resolve, reject) => {
    // npmのJSエントリーポイントを使い、Windowsでもシェル展開なしで実行する。
    const npm = process.env.npm_execpath;
    const child = spawn(
      npm ? process.execPath : 'npm',
      npm
        ? [
            npm,
            ...args,
          ]
        : args,
      {
        cwd: rootDirectory,
        stdio: 'inherit',
      },
    );
    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`npm ${args.join(' ')} failed (${signal ?? code})`));
      }
    });
  });
}

async function main() {
  const options = parseOptions(process.argv.slice(2));
  if (options.help) {
    console.log('npm run check                                      全workspaceを検証');
    console.log('npm run check -- --base develop --head HEAD         差分の影響範囲を検証');
    console.log('npm run check -- --base develop --head HEAD --plan  対象の表示のみ');
    return;
  }

  let selected = workspaces;
  if (options.base) {
    const base = resolveCommit(options.base);
    const head = resolveCommit(options.head);
    // merge commitに現れるmain/develop側の変更も含めて、保守的に検証する。
    // renameは削除・追加として扱い、移動前と移動後の両workspaceを確認する。
    const paths = execFileSync(
      'git',
      [
        'diff',
        '--name-only',
        '--no-renames',
        '-z',
        base,
        head,
      ],
      {
        cwd: rootDirectory,
        encoding: 'utf8',
      },
    )
      .split('\0')
      .filter(Boolean);
    selected = selectWorkspaces(paths);
  }

  console.log(`チェック対象: ${selected.join(', ') || 'なし（説明・Renovate設定のみ）'}`);
  if (options.plan) {
    if (process.env.GITHUB_OUTPUT) {
      appendFileSync(process.env.GITHUB_OUTPUT, `needed=${selected.length > 0}\n`);
    }
    return;
  }

  if (!selected.length) {
    return;
  }

  // ローカルでもCIでも、同じ準備からチェックを実行する。
  await runCommand([
    'run',
    'build:design-token',
  ]);

  // 共有workspaceのtscが参照するため、対象アプリのAstro型を先に生成する。
  for (const workspace of selected.filter((name) =>
    [
      'site',
      'preview',
      'docs',
    ].includes(name),
  )) {
    await runCommand([
      'exec',
      `--workspace=@headless-astro-template/${workspace}`,
      '--call=astro sync',
    ]);
  }
  // 1つのrunnerで並列実行し、workspaceごとのrunner起動・npm ciの重複を避ける。
  const results = await Promise.allSettled(
    selected.map((workspace) =>
      runCommand([
        'run',
        `check:${workspace}`,
      ]),
    ),
  );
  for (const result of results) {
    if (result.status === 'rejected') {
      console.error(result.reason.message);
      process.exitCode = 1;
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
