# 従来の [headless-astro-template](https://gitlab.mitsue.com/x-tech/headless-astro-template) からの変更点

## モノレポ環境

```
/
├── apps                        # Cloudflare Worker格納用ディレクトリ
│   ├── docs                   # https://sample-docs.headless-astro-template.workers.dev/      - microCMS API仕様書（Swagger UI）
│   ├── preview                # https://sample-preview.headless-astro-template.workers.dev/   - microCMS プレビュー画面
│   ├── site                   # https://sample-main.headless-astro-template.workers.dev/      - Webサイト本体
│   └── storybook              # https://sample-storybook.headless-astro-template.workers.dev/ - コンポーネント一覧（Storybook）
│
└── packages                    # 共有リソース・コンポーネント格納用ディレクトリ
     ├── content                # 共有画像・スタイル・スクリプト
     └── ui                     # 共有コンポーネント
```

※ apps/packagesの命名の根拠は、単に「調べたらその方が多く目についた」というだけ

### ひとつのブランチで全Workerを管理できる

従来はmain/staging/previewの各Workerに対応する同名ブランチで管理していた。\
モノレポ構造にすることで、ひとつのブランチで（Stagingを除く）全Workerを管理できる。

### stagingWorkerはmainWorkerと前後関係にある

stagingWorkerはmainWorkerに反映するための準備用環境といえる。\
そのため、あえてappsとして用意するのではなく、developブランチ上のsiteディレクトリと関連付けた。\
これにより、GitFlowモデルで管理しやすくなった。

### 共通して利用するリソースやコンポーネントを独立したWorkspaceに別離

従来は、各Worker（ブランチ）内に同様のコンポーネントを持っていたが、packages/contentsやpackages/uiに別離したため一元管理が可能に。\
これらはエイリアスも必要とせず `@packages/ui/modules` のような形で呼び出せる。

なお、アプリケーション固有のコンポーネントやリソースディレクトリに対しては従来通りViteエイリアスを使う。

### docs、storybookをWorkerに別離

docs（microCMS API仕様書）とstorybookは従来stagingWorkerに同梱されていたが、別Workerとして分けた。\
これにより、stagingWorkerとmainWorkerともに、純粋に本番公開に必要なファイルだけを管理できる。

### previewをプレビューテンプレート専用に

previewWorkerは従来stagingWorkerとmainWorkerと同等の環境で、プレビュー用テンプレートを差分として持っていた。\
また、プレビューテンプレートはSSRである必要があるため、その設定も差分として扱っていた。\
モノレポ環境においては環境が分離されているため、差分としてではなく、独立した環境として扱うことができる。

### microCMSの型生成にマネジメントAPIを利用して自動化

従来は柔軟性を優先し手動で作成していたが、APIが増えるごとにコストがかさむことや、将来的な別ツールによる自動化を視野に入れ、microCMSの [マネジメントAPI](https://document.microcms.io/management-api/introduction) から自動生成する仕組みを導入した。\
それに伴い、OpenAPI関連のファイルを削除した。

### [Copier](https://copier.readthedocs.io/en/stable/) テンプレートとして扱いやすい

従来のようにブランチで各Workerを管理している場合、Copierテンプレートはブランチごとに用意するか、複雑な条件分岐が必要だった。\
モノレポ環境にすることで、ひとつのテンプレートとして扱うことができ、複雑な条件分岐も必要ない。\
これにより、[SYD](https://syd.demo.mitsue.com/) での配布が容易になる。

## デザイントークンとCSSを連携

[W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/) による仕様（v1.0.0 - 2025-10）に準拠。\
Tailwind CSSのテーマ設定とデザイントークンが二重管理になるのを防ぐため、[Style Dictionary](https://styledictionary.com/) を導入した。

```
design-token/
├── core/          # Tailwind CSS のデフォルト値に相当するコアトークン（編集禁止）
│   ├── color.json
│   ├── spacing.json
│   └── ...
└── user.json      # プロジェクト固有のトークン（コアトークンを参照して上書き定義）
```

core/*.jsonは [Tailwind CSSのデフォルト値](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/theme.css) に相当するため、ここを編集するとTailwind CSSの機能（ユーティリティクラス生成など）に影響する。\
そのため編集禁止とし、プロジェクト固有の値はuser.jsonでコアトークンを参照・上書きする形にした。

Style Dictionaryのビルド出力はpackages/content/src/styles/theme.cssで、[Tailwind CSS v4の `@theme` ブロック](https://tailwindcss.com/docs/theme) として生成される。\
これにより、Tailwind CSS標準のtailwindcss/theme.cssは使用せず、Style Dictionaryをテーマの唯一の定義元とすることができる。

## Storybook Astro

従来のmml.jsを廃止し、[Storybook Astro](https://github.com/storybook-astro/storybook-astro)（コミュニティベース）を採用した。\
ただし、公式のStorybookと比較するといくつかの機能が未実装である。\
storiesファイルはコンポーネントと同じディレクトリで管理することで、コンポーネントの変更とストーリーの変更をセットで追跡しやすくしている。

## プレコミットフックによるチェック

従来は手動実行のみを想定していたが、プレコミットフックでのチェックを実装した。\
併せて、Astroファイルのチェックにも対応している [markuplint](https://markuplint.dev/ja/) を導入した。
