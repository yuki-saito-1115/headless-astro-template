import { fileURLToPath } from 'node:url';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  compressHTML: false,
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      MICROCMS_API_KEY: envField.string({
        access: 'secret',
        context: 'server',
      }),
      MICROCMS_SERVICE_DOMAIN: envField.string({
        access: 'secret',
        context: 'server',
      }),
    },
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
  output: 'static',
  publicDir: resolvePath('../../public'),
  site: 'https://example.com',
  vite: {
    cacheDir: resolvePath('../../.cache/site/vite'),
    plugins: [
      checkTailwindDirective({
        targetDirectories: [
          resolvePath('./src'),
          resolvePath('../../packages/ui/src'),
        ],
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@site/components': resolvePath('./src/components'),
        '@site/modules': resolvePath('./src/components/modules'),
        '@site/scripts': resolvePath('./src/scripts'),
        '@site/structures': resolvePath('./src/components/structures'),
        '@site/styles': resolvePath('./src/styles'),
      },
    },
  },
});
