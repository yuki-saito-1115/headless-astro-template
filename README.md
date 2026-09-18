# headless-astro-template

AstroとCloudflare Workersを使用するHeadless CMSプロジェクト向けのモノレポテンプレートです。

## 用語

- **アプリケーションworkspace**: `apps/*` 配下のworkspaceです。`main`、`preview`、`staging`が該当します。
- **共有パッケージworkspace**: `packages/*` 配下のworkspaceです。`content`、`ui`が該当します。
- **workspace**: アプリケーションworkspaceと共有パッケージworkspaceをまとめた呼称です。
- **Worker**: Cloudflareの実行・デプロイ単位です。ディレクトリやnpm workspaceの呼称には使用しません。

## 構成

```text
apps/
  main/      # main Worker用のアプリケーションworkspace
  staging/   # staging Worker用のアプリケーションworkspace
  preview/   # preview Worker用のアプリケーションworkspace
packages/
  content/   # コンテンツ・クライアント層用の共有パッケージworkspace
  ui/        # Astroコンポーネント、レイアウト、スタイル、スクリプト用の共有パッケージworkspace
```

現在、各アプリケーションworkspaceは同じ静的Astro構成を使用しています。各Workerにはそれぞれ`wrangler.jsonc`があり、Cloudflare Workers Buildsでは対応するアプリケーションworkspaceをWorkerのルートディレクトリとして設定します。現時点では環境ごとの構成差はありません。

## コマンド

```sh
npm install
npm run build
npm run dev
npm run dev:main
npm run dev:staging
npm run dev:preview
```

`npm run dev` は、3つのアプリケーションworkspaceの開発サーバーをまとめて起動します。

## Cloudflare Workers Builds

同じGitリポジトリを各Cloudflare Workerに接続し、以下のように設定します。

| Worker | ルートディレクトリ | ビルドコマンド | デプロイコマンド |
| --- | --- | --- | --- |
| main | `/apps/main` | `npm run build` | `npx wrangler deploy` |
| staging | `/apps/staging` | `npm run build` | `npx wrangler deploy` |
| preview | `/apps/preview` | `npm run build` | `npx wrangler deploy` |

ビルド監視パスには、対象のアプリケーションworkspaceと共有パッケージworkspaceを含めます。

| Worker | ビルド監視パス |
| --- | --- |
| main | `apps/main/**`, `packages/**` |
| staging | `apps/staging/**`, `packages/**` |
| preview | `apps/preview/**`, `packages/**` |

この構成では、ブランチごとの差分ではなく、単一ブランチ上の複数Workerとして環境差分を管理します。
