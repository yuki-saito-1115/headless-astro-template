import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { checkTailwindDirective } from '../../packages/content/src/plugins/vite/check-tailwind-directive.js';

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

  integrations: [sitemap()],

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
        '@components': resolvePath('../../packages/ui/src/components'),
        '@layouts': resolvePath('../../packages/ui/src/layouts'),
        '@scripts': resolvePath('../../packages/content/src/scripts'),
        '@styles': resolvePath('../../packages/content/src/styles'),
        '@types': resolvePath('../../packages/ui/src/types'),
      },
    },
  },
});
