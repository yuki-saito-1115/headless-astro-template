import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/PanelDownload/PanelDownload.astro';
import PanelDownload from '@packages/ui/modules/PanelDownload/PanelDownload.astro';

const meta = {
  component: PanelDownload,
  title: 'Components/Panel/PanelDownload',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    button: {
      as: 'a',
      download: true,
      href: '/service.pdf',
      iconAfter: {
        name: 'download',
      },
      title: 'ダウンロード',
    },
    description: 'サービス紹介資料をダウンロードできます。',
  },
};
