import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/ListDescription/ListDescription.astro';
import ListDescription from '@packages/ui/modules/ListDescription/ListDescription.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListDescription,
  title: 'Components/List/ListDescription',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Column: Story = {
  args: {
    slots: {
      default: `<dl>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
</dl>`,
    },
  },
};

export const Row: Story = {
  args: {
    directSp: 'row',
    directPc: 'row',
    slots: {
      default: `<dl>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
</dl>`,
    },
  },
};

export const Inline: Story = {
  args: {
    directSp: 'inline',
    directPc: 'inline',
    slots: {
      default: `<dl>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
  <dt>項目</dt>
  <dd>説明テキスト</dd>
</dl>`,
    },
  },
};
