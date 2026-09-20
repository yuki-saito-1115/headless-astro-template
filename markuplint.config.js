export default {
  extends: 'markuplint:recommended',
  parser: {
    '.astro$': '@markuplint/astro-parser',
  },

  rules: {
    // 箇条書きの内容を li 要素で記述しているかを検査する
    'a11y/use-list': false,
    // Astro のコンポーネント内スタイルと OGP 属性は HTML 仕様上の制約と異なる
    'html-standard/permitted-contents': false,
    'no-unknown-attr': false,
    'performance/head-element-order': false,
  },
};
