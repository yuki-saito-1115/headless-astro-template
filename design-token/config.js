import { readFileSync } from 'node:fs';

export default {
  // トークンソースファイルのパス
  source: ['design-token/core/**/*.json', 'design-token/user.json'],

  // composite トークン（typography など）を自動展開する
  expand: true,

  platforms: {
    css: {
      // CSS向けの標準トランスフォームをまとめて適用
      transformGroup: 'css',

      // 出力先のベースパス
      buildPath: 'packages/content/',

      // CSS変数のプレフィックス（--project-xxx）
      prefix: '',

      files: [
        {
          destination: 'src/styles/theme.css',
          format: 'tailwind/theme',
        },
      ],

      // 個別トランスフォーム（transformGroup に追加で適用）
      transforms: ['name/kebab-double-dash', 'color/hex8'],
    },
  },

  hooks: {
    transforms: {
      // トークン名を kebab-case に変換しつつ、-- を保持するカスタムトランスフォーム
      // 標準の name/kebab は -- を - に正規化してしまうため代替として使用
      'name/kebab-double-dash': {
        type: 'name',
        transform: (token, config) => {
          const path = token.path.map((p) => p.replace(/--/g, '§'));
          return [config.prefix, ...path].join('-').replace(/§/g, '--'); // 復元
        },
      },
    },
    formats: {
      // Tailwind v4 の @theme ブロックとして出力するカスタムフォーマット
      // tailwindcss/theme.css の代替として使用し、style-dictionary をテーマの唯一の定義元にする
      'tailwind/theme': ({ dictionary }) => {
        const header = readFileSync('design-token/header.txt', 'utf-8');
        const vars = dictionary.allTokens
          .map((token) => {
            const key = `--${token.name.replace(/^-/, '')}`;
            const comment = token.$description
              ? ` /** ${token.$description} */`
              : '';
            return `  ${key}: ${token.$value};${comment}`;
          })
          .join('\n');
        return `${header}@theme {\n${vars}\n}\n`;
      },
    },
  },
};
