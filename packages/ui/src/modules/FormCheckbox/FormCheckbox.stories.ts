import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormCheckbox/FormCheckbox.astro';
import FormCheckbox from '@packages/ui/modules/FormCheckbox/FormCheckbox.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormCheckbox,
  tags: ['autodocs'],
  title: 'Components/Form/⭐ FormCheckbox',
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
    id: 'checkbox-default',
    label: 'Lorem ipsum dolor sit amet',
  },
};

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    label: 'Lorem ipsum dolor sit amet',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    label: 'Lorem ipsum dolor sit amet',
    disabled: true,
  },
};

export const Reversed: Story = {
  args: {
    id: 'checkbox-reversed',
    label: 'Lorem ipsum dolor sit amet',
    reversed: true,
  },
};

export const StateInvalid: Story = {
  args: {
    id: 'checkbox-invalid',
    label: 'Lorem ipsum dolor sit amet',
    state: 'invalid',
    checked: true,
  },
};

export const StateValid: Story = {
  args: {
    id: 'checkbox-valid',
    label: 'Lorem ipsum dolor sit amet',
    state: 'valid',
    checked: true,
  },
};
