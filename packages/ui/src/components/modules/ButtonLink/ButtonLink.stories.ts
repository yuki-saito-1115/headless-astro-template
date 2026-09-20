import type { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './ButtonLink.astro';

const meta = {
  component: ButtonLink,
  tags: ['autodocs'],
  title: 'Components/Button/ButtonLink',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
* ページ遷移を目的とするコンポーネントです。
  * フォームの送信・リセット、モーダルの開閉などユーザーのアクションを起動する場合は \`Button\` コンポーネントを使用してください。
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

    href: {
      control: 'text',
      description: 'ボタンのリンク先を設定できます。',
      table: {
        category: 'HTML Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },

    target: {
      control: 'select',
      options: [undefined, '_self', '_blank', '_parent', '_top'],
      description: 'ボタンのリンク先のターゲットを設定できます。',
      table: {
        category: 'HTML Attributes',
        type: { summary: '_self | _blank | _parent | _top | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    href: 'DUMMY_LINK',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
        />`,
      },
    },
  },
};

export const Emphasis: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    href: 'DUMMY_LINK',
    theme: 'emphasis',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
          theme="emphasis"
        />`,
      },
    },
  },
};

export const Conversion: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    href: 'DUMMY_LINK',
    theme: 'conversion',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
          theme="conversion"
        />`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    href: 'DUMMY_LINK',
    disabled: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
          disabled
        />`,
      },
    },
  },
};

export const BeforeIcon: Story = {
  args: {
    label: `Lorem ipsum dolor sit amet`,
    href: 'DUMMY_LINK',
    beforeIcon: {
      sprite: 'download',
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
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
    href: 'DUMMY_LINK',
    afterIcon: {
      sprite: 'download',
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <ButtonLink
          label="Lorem ipsum dolor sit amet"
          href="DUMMY_LINK"
          afterIcon={{
            sprite: 'download',
          }}
        />`,
      },
    },
  },
};
