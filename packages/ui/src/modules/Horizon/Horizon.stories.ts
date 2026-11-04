import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Horizon/Horizon.astro';
import Horizon from '@packages/ui/modules/Horizon/Horizon.astro';

const meta = {
  component: Horizon,
  title: 'Components/Horizon/Horizon',
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
      default: `<hr />`,
    },
  },
};

export const ThemeDotted: Story = {
  args: {
    slots: {
      default: `<hr />`,
    },
    theme: 'dotted',
  },
};

export const ThemeDashed: Story = {
  args: {
    slots: {
      default: `<hr />`,
    },
    theme: 'dashed',
  },
};
