// ローカル開発用の環境変数ファイルを初期化する。
// ルートの .env を実体として、各アプリケーションworkspaceの .env から参照できるようにする。
// SSRで動作するpreviewアプリケーションworkspaceだけ、Wrangler用に .dev.vars も作成する。
import { constants } from 'node:fs';
import { access, copyFile, lstat, symlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = fileURLToPath(new URL('../', import.meta.url));
const envSamplePath = path.join(rootDirectory, '.env.example');
const envPath = path.join(rootDirectory, '.env');
const appDirectories = ['apps/site', 'apps/preview'].map((appDirectory) =>
  path.join(rootDirectory, appDirectory),
);
const previewDevVarsPath = path.join(rootDirectory, 'apps/preview/.dev.vars');

const exists = async (filePath) => {
  try {
    await lstat(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
};

try {
  await access(envSamplePath, constants.R_OK);

  // .env が未作成の場合だけ、サンプルファイルから初期ファイルを作成する。
  if (await exists(envPath)) {
    console.log('.env は既に存在するため変更しません。');
  } else {
    await copyFile(envSamplePath, envPath, constants.COPYFILE_EXCL);
    console.log('.env.example から .env を作成しました。');
  }

  // アプリケーションworkspaceの環境変数ファイルは既存の .env を参照するため、リンク作成前に実体の存在を確認する。
  if (!(await exists(envPath))) {
    throw new Error('.env が存在しないため環境変数ファイルを作成できません。');
  }

  for (const appDirectory of appDirectories) {
    const appEnvPath = path.join(appDirectory, '.env');
    const appEnvRelativePath = path
      .relative(rootDirectory, appEnvPath)
      .replaceAll(path.sep, '/');
    const appEnvSymlinkTarget = path
      .relative(appDirectory, envPath)
      .replaceAll(path.sep, '/');

    // Astroが各アプリケーションworkspaceのビルド時に読めるように .env を配置する。
    if (await exists(appEnvPath)) {
      console.log(`${appEnvRelativePath} は既に存在するため変更しません。`);
    } else {
      await symlink(appEnvSymlinkTarget, appEnvPath, 'file');
      console.log(
        `${appEnvRelativePath} をルートの .env へのシンボリックリンクとして作成しました。`,
      );
    }
  }

  const previewDevVarsRelativePath = path
    .relative(rootDirectory, previewDevVarsPath)
    .replaceAll(path.sep, '/');

  // Wranglerがpreviewアプリケーションworkspaceから読めるように .dev.vars を配置する。
  if (await exists(previewDevVarsPath)) {
    console.log(
      `${previewDevVarsRelativePath} は既に存在するため変更しません。`,
    );
  } else {
    await symlink('.env', previewDevVarsPath, 'file');
    console.log(
      `${previewDevVarsRelativePath} を .env へのシンボリックリンクとして作成しました。`,
    );
  }
} catch (error) {
  if (error.code === 'EPERM' || error.code === 'EACCES') {
    console.error('環境変数ファイルのシンボリックリンク作成権限がありません。');
    console.error(
      'Windowsでは開発者モードを有効にするか、権限のあるシェルで再実行してください。',
    );
  } else {
    console.error(error.message);
  }

  process.exitCode = 1;
}
