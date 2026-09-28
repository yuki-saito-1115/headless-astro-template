import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Heading3/Heading3.astro';
import Heading3 from '@packages/ui/modules/Heading3/Heading3.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Heading3,
  title: 'Components/Heading/⭐ Heading3',
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
      default: `<h3>Lorem ipsum dolor sit amet</h3>`,
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h3><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h3>`,
    },
  },
};
