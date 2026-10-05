import type { Props } from '@packages/ui/modules/ListStep/ListStep.astro';
import ListStep from '@packages/ui/modules/ListStep/ListStep.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListStep,
  tags: ['autodocs'],
  title: 'Components/List/ListStep',
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
        title: '手順のタイトル',
        text: '手順の説明テキスト',
      },
      {
        title: '手順のタイトル',
        text: '手順の説明テキスト',
      },
    ],
  },
};
