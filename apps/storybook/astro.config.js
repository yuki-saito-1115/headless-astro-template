import { fileURLToPath } from 'node:url';
import { checkTailwindDirective } from '../../packages/content/src/plugins/vite/check-tailwind-directive.js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  publicDir: resolvePath('../../public'),
  vite: {
    cacheDir: resolvePath('../../.cache/storybook/vite'),
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
