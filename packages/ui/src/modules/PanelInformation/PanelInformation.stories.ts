import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import PanelInformation from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: PanelInformation,
  tags: ['autodocs'],
  title: 'Components/Panel/⚠️PanelInformation',
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
  args: {},
};
