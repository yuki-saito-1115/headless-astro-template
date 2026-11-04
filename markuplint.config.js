export default {
  extends: 'markuplint:recommended',
  overrides: {
    '**/*.astro': {
      rules: {
        // Astroのfrontmatterが出力HTMLに含まれないため、meta charsetのバイト位置が誤検出される
        'html-standard/meta-charset-position': false,
        // Astroのコンポーネント内styleはビルド時に処理されるため、通常のHTML配置として検査しない
        'html-standard/permitted-contents': false,
      },
    },
  },
  parser: {
    '.astro$': '@markuplint/astro-parser',
  },

  rules: {
    // Astroコンポーネントのslot内容は静的に確定できないため、リスト構造の検査対象から外す
    'a11y/use-list': false,

    // OGP/Twitter Cardなど、プロジェクトで標準化したhead要素の並び順を検査する（公式参考）
    'performance/head-element-order': {
      rules: {
        'head-element-order': [
          'meta[charset]',
          'meta[http-equiv]',
          'meta[name="viewport"]',
          'title',
          {
            attr: 'name',
            order: 'alphabetical',
            selector: 'meta',
          },
          'link[rel="preconnect"]',
          'link[rel="stylesheet"]',
          'link',
          'style',
          'script[src][async]',
          'script[src][defer]',
          'script[src]',
          'script',
        ],
      },
    },
  },
};
