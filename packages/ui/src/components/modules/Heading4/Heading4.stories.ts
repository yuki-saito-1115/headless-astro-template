import type { Meta, StoryObj } from '@storybook/react';
import Heading4 from './Heading4.astro';

const meta = {
  component: Heading4,
  title: 'Components/Heading/Heading4',
  tags: ['autodocs'],
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [見出し、段落](https://document.microcms.io/manual/rich-editor-usage#hdec08ed8b7) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [見出し、段落](https://document.microcms.io/manual/rich-editor-usage#hdec08ed8b7) のHTML構造のみを許容します。<br>リッチエディタ以外ではすべての見出し要素を許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLHeadingElement' },
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
      default: `<h4>Lorem ipsum dolor sit amet</h4>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading4>Lorem ipsum dolor sit amet</Heading4>`,
      },
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h4><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h4>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading4>
          <a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a>
        </Heading4>`,
      },
    },
  },
};
