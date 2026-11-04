import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    mdx(),
  ],
  publicDir: resolvePath('../../public'),
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      MICROCMS_SERVICE_DOMAIN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      MICROCMS_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
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
        '@preview/structures': resolvePath('./src/components/structures'),
        '@preview/scripts': resolvePath('./src/scripts'),
        '@preview/styles': resolvePath('./src/styles'),
      },
    },
  },
});
