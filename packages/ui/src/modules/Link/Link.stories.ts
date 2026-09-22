import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link.astro';

const meta = {
  component: Link,
  tags: ['autodocs'],
  title: 'Components/Link/Link',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [リンク](https://document.microcms.io/manual/rich-editor-usage#he4ba96ecb5) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [リンク](https://document.microcms.io/manual/rich-editor-usage#he4ba96ecb5) のHTML構造のみを許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default: `<a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Link>
          <a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a>
        </Link>`,
      },
    },
  },
};

export const ExternalLink: Story = {
  args: {
    slots: {
      default: `<a href="https://DUMMY_LINK" target="_blank">Lorem ipsum dolor sit amet</a>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Link>
          <a href="https://DUMMY_LINK" target="_blank">Lorem ipsum dolor sit amet</a>
        </Link>`,
      },
    },
  },
};
