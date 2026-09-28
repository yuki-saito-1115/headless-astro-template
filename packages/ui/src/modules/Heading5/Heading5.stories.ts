import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Heading5/Heading5.astro';
import Heading5 from '@packages/ui/modules/Heading5/Heading5.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Heading5,
  title: 'Components/Heading/⭐ Heading5',
  tags: ['autodocs'],
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    class: { table: { disable: true } },
  },
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
      default: `<h5>Lorem ipsum dolor sit amet</h5>`,
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h5><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h5>`,
    },
  },
};
