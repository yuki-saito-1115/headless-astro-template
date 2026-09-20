import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select.astro';

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Form/Select',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `__このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__`,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: [undefined, 'valid', 'invalid', 'disabled'],
      description: 'フォームの状態を設定します。',
      table: {
        category: 'Props',
        type: { summary: 'valid | invalid | disabled | undefined' },
        defaultValue: { summary: undefined },
      },
    },
    size: {
      control: 'select',
      options: [undefined, 'small', 'medium', 'large', 'full'],
      description: 'フォームのサイズを設定します。',
      table: {
        category: 'Props',
        type: { summary: 'small | medium | large | full | undefined' },
        defaultValue: { summary: undefined },
      },
    },
    options: {
      control: 'object',
      description: 'セレクトボックスのオプションを設定します。',
      table: {
        category: 'Props',
        type: { summary: 'FormSelectOptionPropType[]' },
        defaultValue: {
          summary: '[]',
        },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    state: 'invalid',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          state="invalid"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const Valid: Story = {
  args: {
    state: 'valid',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          state="valid"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          state="disabled"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          size="small"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          size="medium"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          size="large"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};

export const FullSize: Story = {
  args: {
    size: 'full',
    options: [
      { label: 'Option 1', value: 'option1', selected: true },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Select
          size="full"
          options={[
            { label: 'Option 1', value: 'option1', selected: true },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
        />`,
      },
    },
  },
};
