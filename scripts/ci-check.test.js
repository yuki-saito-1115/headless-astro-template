import assert from 'node:assert/strict';
import { test } from 'node:test';

import { selectWorkspaces } from './ci-check.js';

const all = [
  'site',
  'preview',
  'storybook',
  'docs',
  'content',
  'ui',
];

test('siteの変更はsiteだけをチェックする', () => {
  assert.deepEqual(
    selectWorkspaces([
      'apps/site/src/pages/index.astro',
    ]),
    [
      'site',
    ],
  );
});

test('アプリ内のMarkdownはページの変更としてチェックする', () => {
  assert.deepEqual(
    selectWorkspaces([
      'apps/docs/src/pages/guide.md',
    ]),
    [
      'docs',
    ],
  );
});

test('共有UIの変更は利用先のアプリもチェックする', () => {
  assert.deepEqual(
    selectWorkspaces([
      'packages/ui/src/modules/Button.astro',
    ]),
    [
      'site',
      'preview',
      'storybook',
      'ui',
    ],
  );
});

test('共有contentの変更は全workspaceをチェックする', () => {
  assert.deepEqual(
    selectWorkspaces([
      'packages/content/src/types/microcms.ts',
    ]),
    all,
  );
});

test('依存関係の変更は全workspaceをチェックする', () => {
  for (const path of [
    'package-lock.json',
    'package.json',
    'apps/docs/package.json',
  ]) {
    assert.deepEqual(
      selectWorkspaces([
        path,
      ]),
      all,
    );
  }
});

test('TS設定の変更は他workspaceへの影響も確認する', () => {
  assert.deepEqual(
    selectWorkspaces([
      'apps/site/tsconfig.worker.json',
    ]),
    all,
  );
});

test('複数アプリの変更は対象を重複させない', () => {
  assert.deepEqual(
    selectWorkspaces([
      'apps/site/src/a.ts',
      'apps/preview/src/a.ts',
      'apps/site/src/b.ts',
    ]),
    [
      'site',
      'preview',
    ],
  );
});

test('リポジトリの説明・Renovate設定のみなら型チェックは省く', () => {
  assert.deepEqual(
    selectWorkspaces([
      'README.md',
      'renovate.jsonc',
    ]),
    [],
  );
});

test('共通設定・未知のパス・新しいworkspaceは全チェックにする', () => {
  for (const path of [
    'mise.toml',
    'design-token/user.json',
    '.github/workflows/pr-check.yml',
    'apps/new-app/src/index.ts',
    'packages/new-package/src/index.ts',
  ]) {
    assert.deepEqual(
      selectWorkspaces([
        path,
      ]),
      all,
    );
  }
});

test('差分がない場合は型チェックを省く', () => {
  assert.deepEqual(selectWorkspaces([]), []);
});
