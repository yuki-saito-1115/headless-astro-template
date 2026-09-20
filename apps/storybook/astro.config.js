import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const componentsPath = fileURLToPath(
  new URL('../../packages/ui/src/components', import.meta.url),
);
const layoutsPath = fileURLToPath(
  new URL('../../packages/ui/src/layouts', import.meta.url),
);
const publicPath = fileURLToPath(new URL('../../public', import.meta.url));
const scriptsPath = fileURLToPath(
  new URL('../../packages/content/src/scripts', import.meta.url),
);
const stylesPath = fileURLToPath(
  new URL('../../packages/content/src/styles', import.meta.url),
);

export default defineConfig({
  publicDir: publicPath,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': componentsPath,
        '@layouts': layoutsPath,
        '@scripts': scriptsPath,
        '@styles': stylesPath,
      },
    },
  },
});
