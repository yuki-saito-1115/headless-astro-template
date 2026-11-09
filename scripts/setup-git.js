// ローカル開発環境でのみ、このリポジトリのGit設定を初期化する。
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const rootDirectory = fileURLToPath(new URL('../', import.meta.url));
const isCI =
  (process.env.CI &&
    ![
      'false',
      '0',
    ].includes(process.env.CI)) ||
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.CF_PAGES === '1' ||
  process.env.WORKERS_CI === '1';

if (isCI) {
  console.log('CI環境のためGit設定をスキップしました。');
} else if (!existsSync(new URL('../.git', import.meta.url))) {
  // .git は通常のcloneではディレクトリ、worktreeではファイルになる。
  console.log('.git が存在しないためGit設定をスキップしました。');
} else {
  const result = spawnSync(
    'git',
    [
      'config',
      '--local',
      ...process.argv.slice(2),
    ],
    {
      cwd: rootDirectory,
      stdio: 'inherit',
    },
  );

  if (result.error) {
    console.error(result.error.message);
  }

  process.exitCode = result.status ?? 1;
}
