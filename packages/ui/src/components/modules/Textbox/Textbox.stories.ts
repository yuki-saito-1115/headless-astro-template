import type { Meta, StoryObj } from '@storybook/react';
import Textbox from './Textbox.astro';

const meta = {
  component: Textbox,
  tags: ['autodocs'],
  title: 'Components/Form/Textbox',
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
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'select',
      options: [undefined, 'small', 'medium', 'large', 'full'],
      description: 'フォームのサイズを設定します。',
      table: {
        category: 'Props',
        type: { summary: 'small | medium | large | full | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      control: 'select',
      options: [
        undefined,
        'text',
        'email',
        'password',
        'search',
        'number',
        'tel',
        'url',
      ],
      description: 'フォームのタイプを設定します。',
      table: {
        category: 'HTML Attributes',
        type: {
          summary: 'text | email | password | search | number | tel | url',
        },
        defaultValue: { summary: 'text' },
      },
    },
    minlength: {
      control: 'text',
      description: 'フォームの最小文字数を設定します。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: '' },
      },
    },
    maxlength: {
      control: 'text',
      description: 'フォームの最大文字数を設定します。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox />`,
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    state: 'invalid',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox state="invalid" />`,
      },
    },
  },
};

export const Valid: Story = {
  args: {
    state: 'valid',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox state="valid" />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox state="disabled" />`,
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox size="small" />`,
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox size="medium" />`,
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox size="large" />`,
      },
    },
  },
};

export const FullSize: Story = {
  args: {
    size: 'full',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Textbox size="full" />`,
      },
    },
  },
};
