import './docgen-windows-path-workaround.ts';
import { fileURLToPath } from 'node:url';
import { checkTailwindDirective } from '@packages/content/plugins/vite/check-tailwind-directive';
import tailwindcss from '@tailwindcss/vite';
import type { InlineConfig } from 'vite';

const resolvePath = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

const config = {
  stories: ['../../../packages/ui/src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  staticDirs: ['../../../public'],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      sanitization: {
        sanitizeHtml: {
          allowedAttributes: {
            figure: ['style'],
          },
        },
      },
    },
  },
  async viteFinal(config: InlineConfig) {
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
