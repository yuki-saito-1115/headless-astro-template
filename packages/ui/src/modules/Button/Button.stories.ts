import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button.astro';

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button/Button',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
* ユーザーのアクション（フォームの送信・リセット、モーダルの開閉など）を起動するコンポーネントです。
  * ページ遷移が目的の場合は \`ButtonLink\` コンポーネントを使用してください。
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: `テキストノード以外の使用を禁止します。`,
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    theme: {
      control: 'radio',
      options: [undefined, 'emphasis', 'conversion', 'text'],
      description:
        '用途に合わせて配色を設定できます。<br>セマンティクスに変化はありませんのでご注意ください。',
      table: {
        category: 'Props',
        type: { summary: 'emphasis | conversion | text | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    beforeIcon: {
      control: 'object',
      description:
        'ボタンの前に表示するアイコンを設定できます。<br>`Media/Icon` コンポーネントが受け取るPropsと同じ形式で指定してください。',
      table: {
        category: 'Props',
        type: {
          summary: `IconPropType`,
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    afterIcon: {
      control: 'object',
      description:
        'ボタンの後に表示するアイコンを設定できます。<br>`Media/Icon` コンポーネントが受け取るPropsと同じ形式で指定してください。',
      table: {
        category: 'Props',
        type: {
          summary: `IconPropType`,
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンを非活性にするかどうかを設定できます。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'radio',
      options: [undefined, 'button', 'submit', 'reset'],
      description: 'ボタンのタイプを設定できます。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'button | submit | reset | undefined' },
        defaultValue: { summary: 'button' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button label="Lorem ipsum dolor sit amet" />`,
      },
    },
  },
};

export const Emphasis: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    theme: 'emphasis',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          theme="emphasis"
        />`,
      },
    },
  },
};

export const Conversion: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    theme: 'conversion',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          theme="conversion"
        />`,
      },
    },
  },
};

export const Text: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    theme: 'text',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          theme="text"
        />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    disabled: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          disabled
        />`,
      },
    },
  },
};

export const BeforeIcon: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    beforeIcon: {
      sprite: 'download',
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          beforeIcon={{
            sprite: 'download',
          }}
        />`,
      },
    },
  },
};

export const AfterIcon: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    afterIcon: {
      sprite: 'download',
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Button
          label="Lorem ipsum dolor sit amet"
          afterIcon={{
            sprite: 'download',
          }}
        />`,
      },
    },
  },
};
