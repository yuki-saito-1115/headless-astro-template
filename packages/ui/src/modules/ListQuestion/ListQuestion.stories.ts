import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/ListQuestion/ListQuestion.astro';
import ListQuestion from '@packages/ui/modules/ListQuestion/ListQuestion.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListQuestion,
  tags: ['autodocs'],
  title: 'Components/List/⚠️ListQuestion',
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
      default: '質問と回答をここに配置します。',
    },
  },
};
