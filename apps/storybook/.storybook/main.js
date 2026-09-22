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
      cacheDir: '../../../.cache/storybook/vite',
    };
  },
};

export default config;
