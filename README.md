# headless-astro-template

AstroとCloudflare Workersを使用するHeadless CMSプロジェクト向けのモノレポテンプレートです。

## 用語

- **アプリケーションworkspace**: `apps/*` 配下のworkspaceです。`site`、`preview`が該当します。
- **共有パッケージworkspace**: `packages/*` 配下のworkspaceです。`content`、`ui`が該当します。
- **workspace**: アプリケーションworkspaceと共有パッケージworkspaceをまとめた呼称です。
- **Worker**: Cloudflareの実行・デプロイ単位です。ディレクトリやnpm workspaceの呼称には使用しません。

## 構成

```text
apps/
  site/      # main・staging Worker用のアプリケーションworkspace
  preview/   # preview Worker用のアプリケーションworkspace
packages/
  content/   # コンテンツ・クライアント層用の共有パッケージworkspace
  ui/        # Astroコンポーネント、レイアウト、スタイル、スクリプト用の共有パッケージworkspace
```

`apps/site` はmainとstagingで共通のサイトを提供します。main Workerはmainブランチ、staging Workerはdevelopブランチの `apps/site` をそれぞれデプロイします。`apps/preview` はmainブランチのpreview Worker専用です。

## コマンド

```sh
npm install
npm run setup
npm run build
npm run dev
npm run dev:site
npm run dev:preview
```

`npm run dev` は、2つのアプリケーションworkspaceの開発サーバーをまとめて起動します。

## ローカルセットアップ

`npm run setup` は、ローカル開発に必要なGit設定と環境変数ファイルを初期化します。

- `setup:git`: Git hooksの参照先を `.hooks` に設定し、Git LFSをローカルリポジトリに設定します。
- `setup:env`: `.env.sample` から `.env` を作成し、各アプリケーションworkspaceの `.env` と、previewアプリケーションworkspaceの `.dev.vars` をシンボリックリンクとして作成します。

`.env` と `.dev.vars` が既に存在する場合は上書きしません。`.dev.vars` はローカルでCloudflare Workers相当のSSR環境を動かすためのファイルで、Cloudflare上のWorkerではCloudflare側に設定したVariables / Secretsを使用します。

## Tailwind CSS の制約

Vite プラグインで、各アプリケーションworkspaceの `src` と `packages/ui/src` にある `.astro` ファイルを検査します。Tailwind CSS の `@apply` と `@reference` は使用禁止です。

## デプロイ

main WorkerはGitHub Actionsでビルド・デプロイします。

| Worker | ブランチ | ビルドコマンド | デプロイコマンド |
| --- | --- | --- | --- |
| main | `main` | `npm run build:site` | `npm run deploy:site` |

staging Workerとpreview WorkerはCloudflare Workers Buildsでビルド・デプロイします。

| Worker | ブランチ | ルートディレクトリ | ビルドコマンド | デプロイコマンド |
| --- | --- | --- | --- | --- |
| staging | `develop` | `/` | `npm run build:site` | `npx wrangler deploy --config apps/site/wrangler.staging.jsonc` |
| preview | `main` | `/` | `npm run build:preview` | `npm run deploy:preview` |

ビルド監視パスには、対象のアプリケーションworkspaceと共有パッケージworkspaceを含めます。

| Worker | ビルド監視パス |
| --- | --- |
| staging | `apps/site/**`, `packages/**` |
| preview | `apps/preview/**`, `packages/**` |

preview Workerはmainブランチを、staging Workerはdevelopブランチを監視します。
