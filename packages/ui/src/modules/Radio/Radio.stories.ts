import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio.astro';

const meta = {
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Form/Radio',
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
    label: {
      control: 'text',
      description: 'フォームのラベルを設定します。',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
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
    reversed: {
      control: 'boolean',
      description: 'フォームとラベルの位置を反転します。',
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    id: {
      control: 'text',
      description:
        'フォームの `id` 属性を設定します。<br>__この属性は設定必須です。設定しない場合アクセシビリティ基準を達成できない可能性があります。__',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    checked: {
      control: 'boolean',
      description: 'フォームのチェック状態を設定します。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio />`,
      },
    },
  },
};

export const Checked: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
    checked: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio checked />`,
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
    state: 'invalid',
    checked: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio state="invalid" checked />`,
      },
    },
  },
};

export const Valid: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
    state: 'valid',
    checked: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio state="valid" checked />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
    state: 'disabled',
    checked: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio state="disabled" checked />`,
      },
    },
  },
};

export const Reversed: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet',
    reversed: true,
    checked: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Radio reversed checked />`,
      },
    },
  },
};
