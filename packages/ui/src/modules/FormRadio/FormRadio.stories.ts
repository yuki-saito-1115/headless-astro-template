import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormRadio/FormRadio.astro';
import FormRadio from '@packages/ui/modules/FormRadio/FormRadio.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormRadio,
  tags: ['autodocs'],
  title: 'Components/Form/⭐ FormRadio',
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
    id: 'radio-default',
    label: 'Lorem ipsum dolor sit amet',
  },
};

export const Checked: Story = {
  args: {
    id: 'radio-checked',
    label: 'Lorem ipsum dolor sit amet',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'radio-disabled',
    label: 'Lorem ipsum dolor sit amet',
    disabled: true,
  },
};

export const Reversed: Story = {
  args: {
    id: 'radio-reversed',
    label: 'Lorem ipsum dolor sit amet',
    reversed: true,
  },
};

export const StateInvalid: Story = {
  args: {
    id: 'radio-invalid',
    label: 'Lorem ipsum dolor sit amet',
    state: 'invalid',
    checked: true,
  },
};

export const StateValid: Story = {
  args: {
    id: 'radio-valid',
    label: 'Lorem ipsum dolor sit amet',
    state: 'valid',
    checked: true,
  },
};
