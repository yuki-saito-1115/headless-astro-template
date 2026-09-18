export default {
  extends: 'markuplint:recommended',
  parser: {
    '.astro$': '@markuplint/astro-parser',
  },

  rules: {
    // 箇条書きの内容を li 要素で記述しているかを検査する
    'a11y/use-list': false,
  },
};
