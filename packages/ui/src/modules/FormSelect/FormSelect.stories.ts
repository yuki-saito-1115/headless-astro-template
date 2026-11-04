import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormSelect/FormSelect.astro';
import FormSelect from '@packages/ui/modules/FormSelect/FormSelect.astro';

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
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
  },
};

export const StateInvalid: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    state: 'invalid',
  },
};

export const StateValid: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    state: 'valid',
  },
};

export const SizeSmall: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    size: 'large',
  },
};

export const SizeFull: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        selected: true,
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    size: 'full',
  },
};
