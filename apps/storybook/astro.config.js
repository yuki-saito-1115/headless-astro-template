import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { checkTailwindDirective } from '../../vite/check-tailwind-directive.js';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  publicDir: resolvePath('../../public'),
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
        '@scripts': resolvePath('../../packages/content/src/scripts'),
        '@styles': resolvePath('../../packages/content/src/styles'),
        '@types': resolvePath('../../packages/ui/src/types'),
      },
    },
  },
});
