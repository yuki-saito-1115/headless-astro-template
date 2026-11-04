// ========================================
// プラグイン設定
// ========================================

/** プラグイン名 */
const PLUGIN_NAME = 'check-tailwind-directive';

/** スキャン対象拡張子 */
const SCAN_TARGET_EXTENSIONS = [
  '.astro',
];

/** 使用禁止のディレクティブ */
const DISALLOWED_DIRECTIVES = [
  '@apply',
  '@reference',
];

/** エラー時に以降のタスクを強制終了 */
const BREAK_ON_ERROR = false;

// ========================================
// プラグイン本体
// ========================================

/**
 * Tailwind CSS の禁止ディレクティブをチェックする Vite プラグイン
 *
 * 機能:
 * - 指定されたディレクティブの使用を禁止
 * - ビルド時にエラーを出力してプロセス終了
 * - 指定された拡張子のファイルのみを対象とする
 *
 * 動作タイミング:
 * - Vite の buildStart フック（ビルド開始時）
 *
 * @param {{ targetDirectories: string[] }} options - プラグイン設定
 * @returns {object} Vite プラグインオブジェクト
 */
/** @returns {import('vite').Plugin} */
export function checkTailwindDirective({ targetDirectories }) {
  return {
    /**
     * Vite ビルド開始時に実行されるフック
     * ファイルシステムを再帰的に走査して禁止ディレクティブをチェック
     */
    async buildStart() {
      const { readFileSync, readdirSync, statSync } = await import('node:fs');
      const { join } = await import('node:path');

      /**
       * 単一ファイルの内容をチェックする関数
       * @param {string} filePath - チェック対象ファイルのパス
       */
      const checkFile = (filePath) => {
        let errorMessage = null;

        try {
          // 指定された拡張子のファイルのみを処理対象とする
          const isTargetFile = SCAN_TARGET_EXTENSIONS.some((extension) => {
            return filePath.endsWith(extension);
          });

          if (isTargetFile) {
            // ファイルの内容をUTF-8で読み込み
            const code = readFileSync(filePath, 'utf-8');

            // 使用禁止ディレクティブの存在を順次チェック
            for (const directive of DISALLOWED_DIRECTIVES) {
              if (code.includes(directive)) {
                errorMessage = `❌ このファイルでは Tailwind CSS の \`${directive}\` は使用禁止です。（${filePath}）`;
                throw new Error(errorMessage);
              }
            }
          }
        } catch {
          if (errorMessage) {
            console.error(errorMessage);

            if (BREAK_ON_ERROR) {
              process.exit(1);
            }
          }
        }
      };

      /**
       * ディレクトリを再帰的に走査する関数
       * @param {string} dir - 走査対象ディレクトリのパス
       */
      const walkDir = (dir) => {
        try {
          // ディレクトリ内のファイル・フォルダ一覧を取得
          const files = readdirSync(dir);

          // 各ファイル・フォルダを処理
          for (const file of files) {
            const fullPath = join(dir, file);
            const stat = statSync(fullPath);

            // ディレクトリの場合の処理
            if (stat.isDirectory()) {
              // 隠しディレクトリ（.で始まる）とnode_modulesは除外
              if (!file.startsWith('.') && file !== 'node_modules') {
                // 再帰的にサブディレクトリを走査
                walkDir(fullPath);
              }
            }
            // ファイルの場合の処理
            else if (stat.isFile()) {
              checkFile(fullPath);
            }
          }
        } catch {
          // ディレクトリ読み込みエラーは無視
        }
      };

      for (const directory of targetDirectories) {
        walkDir(directory);
      }
    },
    name: PLUGIN_NAME,
  };
}
