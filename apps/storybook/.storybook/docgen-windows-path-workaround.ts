/**
 * storybook-astroのdocgenが、Windowsでpropsを抽出できない不具合の暫定対策
 * https://github.com/storybook-astro/storybook-astro/issues/185
 *
 * docgenが作る仮想ファイルのパスが「\」区切りになり、TypeScriptから見つからなくなる。
 * docgenのモジュールを読み込むときだけ、該当するパスを「/」区切りにする処理を追加する。
 * node_modules内のファイルは書き換えない。
 *
 * 上流で修正され、起動時に「暫定対策を適用できませんでした」と警告が出たら、
 * このファイルと、main.tsでこのファイルを読み込んでいるimportを削除する。
 */
import * as nodeModule from 'node:module';

type LoadResult = {
  format?: string | null;
  shortCircuit?: boolean;
  source?: string | ArrayBuffer | NodeJS.TypedArray;
};

type LoadHook = (
  url: string,
  context: object,
  nextLoad: (url: string, context?: object) => LoadResult,
) => LoadResult;

/** `@types/node`の20系には`module.registerHooks`の型定義がないため、使用する範囲だけ定義する */
type RegisterHooks = (hooks: { load: LoadHook }) => unknown;

/** 書き換え対象のモジュールがあるディレクトリ */
const TARGET_DIRECTORY = '/node_modules/@storybook-astro/framework/dist/';

/** 書き換え対象のモジュールだけに含まれる文字列 */
const TARGET_MARKER = 'function virtualFilePathFor(';

/** パスを「/」区切りにするために、式の後ろへ追加するコード */
const TO_POSIX_PATH = '.replaceAll("\\\\", "/")';

/** 「/」区切りにする式（仮想ファイル、shim、相対パスの.astroインポート） */
const TARGET_EXPRESSIONS = [
  // biome-ignore lint/suspicious/noTemplateCurlyInString: 置換対象のソースコードを文字列のまま照合する
  'join(dirname(astroFilePath), `${basename(astroFilePath)}.ts`)',
  'join2(projectRoot, SHIM_FILE_NAME)',
  'resolve(dirname2(containingFile), specifier)',
];

const WARNING_MESSAGE = [
  '[storybook] storybook-astroのdocgenの暫定対策を適用できませんでした。',
  '上流で修正済みの場合は、.storybook/docgen-windows-path-workaround.tsと、main.tsのimportを削除してください。',
  'https://github.com/storybook-astro/storybook-astro/issues/185',
].join('\n');

const { registerHooks } = nodeModule as typeof nodeModule & {
  registerHooks?: RegisterHooks;
};

const countOccurrences = (source: string, expression: string) =>
  source.split(expression).length - 1;

if (process.platform === 'win32') {
  if (!registerHooks) {
    console.warn(WARNING_MESSAGE);
  } else {
    registerHooks({
      load(url, context, nextLoad) {
        const result = nextLoad(url, context);

        if (!url.includes(TARGET_DIRECTORY) || result.source === undefined) {
          return result;
        }

        const source =
          typeof result.source === 'string'
            ? result.source
            : new TextDecoder().decode(result.source);

        if (!source.includes(TARGET_MARKER)) {
          return result;
        }

        // 一部だけ書き換えると挙動が読めなくなるため、すべて1か所ずつ見つかった場合だけ書き換える
        const isPatchable = TARGET_EXPRESSIONS.every(
          (expression) => countOccurrences(source, expression) === 1,
        );

        if (!isPatchable) {
          console.warn(WARNING_MESSAGE);

          return result;
        }

        return {
          ...result,
          source: TARGET_EXPRESSIONS.reduce(
            (patched, expression) =>
              patched.replace(
                expression,
                () => `${expression}${TO_POSIX_PATH}`,
              ),
            source,
          ),
        };
      },
    });
  }
}
