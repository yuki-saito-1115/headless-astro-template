import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { checkTailwindDirective } from '../../vite/check-tailwind-directive.js';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  publicDir: resolvePath('../../public'),
  integrations: [mdx()],
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
        '@storybook/components': resolvePath('./src/components'),
        '@storybook/modules': resolvePath('./src/components/modules'),
        '@storybook/structures': resolvePath('./src/components/structures'),
        '@storybook/scripts': resolvePath('./src/scripts'),
        '@storybook/styles': resolvePath('./src/styles'),
      },
    },
  },
});
