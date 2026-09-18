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

`apps/site` はmainとstagingで共通のサイトを提供します。main Workerはmainブランチ、staging Workerはstagingブランチの `apps/site` をそれぞれデプロイします。`apps/preview` はmainブランチのpreview Worker専用です。

## コマンド

```sh
npm install
npm run build
npm run dev
npm run dev:site
npm run dev:preview
```

`npm run dev` は、2つのアプリケーションworkspaceの開発サーバーをまとめて起動します。

## Cloudflare Workers Builds

同じGitリポジトリを各Cloudflare Workerに接続し、以下のように設定します。

| Worker | ブランチ | ルートディレクトリ | ビルドコマンド | デプロイコマンド |
| --- | --- | --- | --- | --- |
| main | `main` | `/` | `npm run build:site` | `npm run deploy --workspace @headless-astro-template/site` |
| staging | `staging` | `/` | `npm run build:site` | `npm run deploy:staging` |
| preview | `main` | `/` | `npm run build:preview` | `npm run deploy:preview` |

ビルド監視パスには、対象のアプリケーションworkspaceと共有パッケージworkspaceを含めます。

| Worker | ビルド監視パス |
| --- | --- |
| main | `apps/site/**`, `packages/**` |
| staging | `apps/site/**`, `packages/**` |
| preview | `apps/preview/**`, `packages/**` |

main Workerとpreview Workerはmainブランチを、staging Workerはstagingブランチを監視します。
