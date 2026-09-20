import { fileURLToPath } from 'node:url';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

const componentsPath = resolvePath('../../../packages/ui/src/components');
const layoutsPath = resolvePath('../../../packages/ui/src/layouts');
const scriptsPath = resolvePath('../../../packages/content/src/scripts');
const stylesPath = resolvePath('../../../packages/content/src/styles');
const typesPath = resolvePath('../../../packages/ui/src/types');

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
    // StorybookのVite設定に、Astroと同じaliasとキャッシュ保存先を追加する。
    const aliases = Array.isArray(config.resolve?.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve?.alias ?? {}).map(
          ([find, replacement]) => ({
            find,
            replacement,
          }),
        );

    return {
      ...config,
      cacheDir: '../../../.cache/storybook/vite',
      resolve: {
        ...config.resolve,
        alias: [
          ...aliases,
          { find: '@components', replacement: componentsPath },
          { find: '@layouts', replacement: layoutsPath },
          { find: '@scripts', replacement: scriptsPath },
          { find: '@styles', replacement: stylesPath },
          { find: '@types', replacement: typesPath },
        ],
      },
    };
  },
};

export default config;
