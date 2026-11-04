import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  adapter: cloudflare(),
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
    mdx(),
  ],
  output: 'server',
  publicDir: resolvePath('../../public'),
  vite: {
    cacheDir: resolvePath('../../.cache/preview/vite'),
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
        '@preview/components': resolvePath('./src/components'),
        '@preview/modules': resolvePath('./src/components/modules'),
        '@preview/scripts': resolvePath('./src/scripts'),
        '@preview/structures': resolvePath('./src/components/structures'),
        '@preview/styles': resolvePath('./src/styles'),
      },
    },
  },
});
