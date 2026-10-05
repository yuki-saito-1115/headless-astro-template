import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/ListDescription/ListDescription.astro';
import ListDescription from '@packages/ui/modules/ListDescription/ListDescription.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListDescription,
  tags: ['autodocs'],
  title: 'Components/List/⚠️ListDescription',
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
      default: '説明リストの項目をここに配置します。',
    },
  },
};
