import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import type { InlineConfig } from 'vite';

import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const config = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      sanitization: {
        enabled: false,
      },
    },
  },
  staticDirs: [
    '../../../public',
  ],
  stories: [
    '../../../packages/ui/src/**/*.stories.@(js|ts)',
  ],
  async viteFinal(config: InlineConfig) {
    return {
      ...config,
      cacheDir: resolvePath('../../../.cache/storybook/vite'),
      plugins: [
        ...(config.plugins ?? []),
        checkTailwindDirective({
          targetDirectories: [
            resolvePath('../../../packages/ui/src'),
          ],
        }),
        tailwindcss(),
      ],
    };
  },
};

export default config;
