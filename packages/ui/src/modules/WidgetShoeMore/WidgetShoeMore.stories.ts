import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/WidgetShoeMore/WidgetShoeMore.astro';
import WidgetShoeMore from '@packages/ui/modules/WidgetShoeMore/WidgetShoeMore.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: WidgetShoeMore,
  tags: ['autodocs'],
  title: 'Components/Widget/⚠️WidgetShoeMore',
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
      default: '追加表示する内容をここに配置します。',
    },
  },
};
