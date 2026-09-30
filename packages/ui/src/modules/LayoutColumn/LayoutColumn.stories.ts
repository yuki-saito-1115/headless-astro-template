import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
import LayoutColumn from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: LayoutColumn,
  tags: ['autodocs'],
  title: 'Components/Layout/LayoutColumn',
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
    columnPc: '1',
    columnSp: '1',
    slots: {
      default: `<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
};

export const Column2: Story = {
  args: {
    columnPc: '2',
    columnSp: '1',
    slots: {
      default: `<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
};

export const Column3: Story = {
  args: {
    columnPc: '3',
    columnSp: '2',
    slots: {
      default: `<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
};

export const Column4: Story = {
  args: {
    columnPc: '4',
    columnSp: '2',
    slots: {
      default: `<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
};

export const ColumnAuto: Story = {
  args: {
    columnPc: 'auto',
    columnSp: 'auto',
    slots: {
      default: `<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="LayoutColumn__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
};
