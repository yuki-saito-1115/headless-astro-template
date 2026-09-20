import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// 設定ファイルを基準に相対パスを絶対ファイルパスへ変換する。
const resolvePath = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  output: 'static',
  publicDir: resolvePath('../../public'),
  devToolbar: {
    enabled: false,
  },
  integrations: [mdx()],
  vite: {
    cacheDir: resolvePath('../../.cache/docs/vite'),
  },
});
