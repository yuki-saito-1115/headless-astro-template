import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const contentPath = fileURLToPath(
  new URL('../../packages/content/src', import.meta.url),
);
const uiPath = fileURLToPath(new URL('../../packages/ui/src', import.meta.url));
const publicPath = fileURLToPath(new URL('../../public', import.meta.url));

export default defineConfig({
  output: 'static',
  publicDir: publicPath,
  vite: {
    resolve: {
      alias: {
        '@shared/content': contentPath,
        '@shared/ui': uiPath,
      },
    },
  },
});
