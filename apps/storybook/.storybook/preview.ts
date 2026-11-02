// すべてのストーリーへ共通のデザイントークンとTailwind CSSを適用する。
import '@packages/content/styles/tailwind.css';

// 自動生成された使用例にある、コンポーネントの相対importを照合する。
const uiComponentImportPattern = /from '\.\/([^/]+)\.astro';/;

// 全体の既定値。コンポーネントやストーリーごとの設定は各stories.tsで上書きできる。
const preview = {
  // すべてのコンポーネントでDocsページを自動生成する。
  tags: ['autodocs'],
  argTypes: {
    // 利用側で指定するclass属性はDocsとControlsのテーブルに表示しない。
    class: { table: { disable: true } },
  },
  parameters: {
    controls: {
      // 必須Propsを先に表示する。
      sort: 'requiredFirst',
      // Props名から色・日付用の入力欄を選ぶ。
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        // オブジェクト・配列Propsを別変数へ切り出さず、使用例のタグ内へ直接記述する。
        objectProps: 'inline',
        // 使用例をコピーして利用できるよう、相対importを共有パッケージworkspaceのパスへ置き換える。
        transform(
          code: string,
          context: { component?: { moduleId?: string } },
        ) {
          const componentId = context.component?.moduleId?.replace(/\\/g, '/');
          const modulePath = '/packages/ui/src/modules/';
          const moduleIndex = componentId?.indexOf(modulePath);

          // modules配下のコンポーネントだけimportパスを変換する。
          if (moduleIndex === undefined || moduleIndex < 0) {
            return code;
          }

          const importPath = componentId.slice(moduleIndex + modulePath.length);

          return code.replace(
            uiComponentImportPattern,
            `from '@packages/ui/modules/${importPath}';`,
          );
        },
      },
    },
  },
};

export default preview;
