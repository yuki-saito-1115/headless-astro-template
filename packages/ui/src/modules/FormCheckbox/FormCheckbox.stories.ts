import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormCheckbox/FormCheckbox.astro';
import FormCheckbox from '@packages/ui/modules/FormCheckbox/FormCheckbox.astro';

const meta = {
  component: FormCheckbox,
  title: 'Components/Form/FormCheckbox',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    id: 'checkbox-checked',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'checkbox-disabled',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const Reversed: Story = {
  args: {
    id: 'checkbox-reversed',
    reversed: true,
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const StateInvalid: Story = {
  args: {
    checked: true,
    id: 'checkbox-invalid',
    state: 'invalid',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const StateValid: Story = {
  args: {
    checked: true,
    id: 'checkbox-valid',
    state: 'valid',
    title: 'Lorem ipsum dolor sit amet',
  },
};
