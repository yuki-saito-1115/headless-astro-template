import { fileURLToPath } from 'node:url';
import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';
import tailwindcss from '@tailwindcss/vite';

const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

/** @type {import("@storybook-astro/framework").StorybookConfig} */
const config = {
  stories: ['../../../packages/ui/src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  staticDirs: ['../../../public'],
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      cacheDir: resolvePath('../../../.cache/storybook/vite'),
      plugins: [
        ...(config.plugins ?? []),
        checkTailwindDirective({
          targetDirectories: [resolvePath('../../../packages/ui/src')],
        }),
        tailwindcss(),
      ],
    };
  },
};

export default config;
