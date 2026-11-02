import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormSelect/FormSelect.astro';
import FormSelect from '@packages/ui/modules/FormSelect/FormSelect.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormSelect,
  title: 'Components/Form/FormSelect',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const StateInvalid: Story = {
  args: {
    state: 'invalid',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const StateValid: Story = {
  args: {
    state: 'valid',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const SizeFull: Story = {
  args: {
    size: 'full',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
