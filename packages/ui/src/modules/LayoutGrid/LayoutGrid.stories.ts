import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/LayoutGrid/LayoutGrid.astro';
import LayoutGrid from '@packages/ui/modules/LayoutGrid/LayoutGrid.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: LayoutGrid,
  tags: ['autodocs'],
  title: 'Components/Layout/LayoutGrid',
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
      default: `<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-11 gridSp-11">11</div>`,
    },
  },
};

export const Sample1: Story = {
  args: {
    slots: {
      default: `<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-8 gridSp-8">8</div>`,
    },
  },
};

export const Sample2: Story = {
  args: {
    slots: {
      default: `<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-1 gridSp-1">1</div>

<div class="LayoutGrid__segment gridPc-2 gridSp-2">2</div>

<div class="LayoutGrid__segment gridPc-3 gridSp-3">3</div>

<div class="LayoutGrid__segment gridPc-3 gridSp-3">3</div>`,
    },
  },
};
