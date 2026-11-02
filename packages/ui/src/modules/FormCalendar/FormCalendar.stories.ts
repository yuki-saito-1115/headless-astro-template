import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormCalendar/FormCalendar.astro';
import FormCalendar from '@packages/ui/modules/FormCalendar/FormCalendar.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormCalendar,
  title: 'Components/Form/FormCalendar',
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateInvalid: Story = {
  args: {
    state: 'invalid',
  },
};

export const StateValid: Story = {
  args: {
    state: 'valid',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const SizeFull: Story = {
  args: {
    size: 'full',
  },
};
