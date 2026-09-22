import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Meta, StoryObj } from '@storybook/react';
import type { Props as Heading6PropType } from './Heading6.astro';
import Heading6 from './Heading6.astro';

const meta = {
  component: Heading6,
  title: 'Components/Heading/Heading6',
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
} satisfies Meta<StoryArgs<Heading6PropType>>;

export default meta;
type Story = StoryObj<StoryArgs<Heading6PropType>>;

export const Default: Story = {
  args: {
    slots: {
      default: `<h6>Lorem ipsum dolor sit amet</h6>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading6>Lorem ipsum dolor sit amet</Heading6>`,
      },
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h6><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h6>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading6>
          <a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a>
        </Heading6>`,
      },
    },
  },
};
