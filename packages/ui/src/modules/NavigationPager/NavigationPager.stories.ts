import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/NavigationPager/NavigationPager.astro';
import NavigationPager from '@packages/ui/modules/NavigationPager/NavigationPager.astro';

const meta = {
  component: NavigationPager,
  title: 'Components/Navigation/NavigationPager',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    baseUrl: '/news',
    current: 3,
    total: 5,
  },
};

export const FirstPage: Story = {
  args: {
    baseUrl: '/news',
    current: 1,
    total: 5,
  },
};

export const LastPage: Story = {
  args: {
    baseUrl: '/news',
    current: 5,
    total: 5,
  },
};
