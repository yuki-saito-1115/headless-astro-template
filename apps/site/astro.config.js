import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { checkTailwindDirective } from '../../vite/check-tailwind-directive.js';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  publicDir: resolvePath('../../public'),
  devToolbar: {
    enabled: false,
  },
  compressHTML: false,
  integrations: [sitemap(), mdx()],
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
        '@site/structures': resolvePath('./src/components/structures'),
        '@site/scripts': resolvePath('./src/scripts'),
        '@site/styles': resolvePath('./src/styles'),
      },
    },
  },
});
