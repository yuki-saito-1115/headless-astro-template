import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/WidgetDialog/WidgetDialog.astro';
import WidgetDialog from '@packages/ui/modules/WidgetDialog/WidgetDialog.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: WidgetDialog,
  tags: ['autodocs'],
  title: 'Components/Widget/⚠️WidgetDialog',
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
      default: 'ダイアログの内容をここに配置します。',
    },
  },
};
