import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/BadgeList/BadgeList.astro';
import BadgeList from '@packages/ui/modules/BadgeList/BadgeList.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: BadgeList,
  title: 'Components/Badge/BadgeList',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    datas: [
      {
        title: 'badge 1',
        as: 'a',
        href: 'DUMMY_LINK',
      },
      {
        title: 'badge 2',
        as: 'a',
        href: 'DUMMY_LINK',
        theme: 'caution',
      },
      {
        title: 'badge 3',
        as: 'a',
        href: 'DUMMY_LINK',
        theme: 'warning',
      },
    ],
  },
};
