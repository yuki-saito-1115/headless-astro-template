import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Navigation/Navigation.astro';
import Navigation from '@packages/ui/modules/Navigation/Navigation.astro';

const meta = {
  component: Navigation,
  title: 'Components/Navigation/Navigation',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    back: {
      href: '#previous',
      title: '前のページへ戻る',
    },
    next: {
      href: '#next',
      title: '次のページへ進む',
    },
  },
};

export const BackToTop: Story = {
  args: {
    top: {
      href: '#top',
      title: 'ページ上部に戻る',
    },
  },
};
