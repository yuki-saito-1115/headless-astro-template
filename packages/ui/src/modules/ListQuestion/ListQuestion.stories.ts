import type { Props } from '@packages/ui/modules/ListQuestion/ListQuestion.astro';
import ListQuestion from '@packages/ui/modules/ListQuestion/ListQuestion.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListQuestion,
  tags: ['autodocs'],
  title: 'Components/List/ListQuestion',
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
 */
type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    datas: [
      {
        question: '質問テキスト',
        answer: '回答テキスト',
      },
      {
        question: '質問テキスト',
        answer: '回答テキスト',
      },
    ],
  },
};
