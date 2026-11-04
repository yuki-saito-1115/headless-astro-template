import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/HeadingLevel2/HeadingLevel2.astro';
import HeadingLevel2 from '@packages/ui/modules/HeadingLevel2/HeadingLevel2.astro';

const meta = {
  component: HeadingLevel2,
  title: 'Components/Heading/HeadingLevel2',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    slots: {
      default: `<h2>Lorem ipsum dolor sit amet</h2>`,
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h2><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h2>`,
    },
  },
};
