import type { Meta, StoryObj } from '@storybook/react';

import type { Props } from '@packages/ui/modules/ListFeature/ListFeature.astro';
import ListFeature from '@packages/ui/modules/ListFeature/ListFeature.astro';

const meta = {
  component: ListFeature,
  title: 'Components/List/ListFeature',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 */
type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    datas: [
      {
        badge: '特長1',
        text: '特長の説明テキスト',
        title: '特長のタイトル',
      },
      {
        badge: '特長2',
        text: '特長の説明テキスト',
        title: '特長のタイトル',
      },
    ],
  },
};
