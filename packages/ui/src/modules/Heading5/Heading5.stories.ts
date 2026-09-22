import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Meta, StoryObj } from '@storybook/react';
import type { Props as Heading5PropType } from './Heading5.astro';
import Heading5 from './Heading5.astro';

const meta = {
  component: Heading5,
  title: 'Components/Heading/Heading5',
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
} satisfies Meta<StoryArgs<Heading5PropType>>;

export default meta;
type Story = StoryObj<StoryArgs<Heading5PropType>>;

export const Default: Story = {
  args: {
    slots: {
      default: `<h5>Lorem ipsum dolor sit amet</h5>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading5>Lorem ipsum dolor sit amet</Heading5>`,
      },
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<h5><a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a></h5>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Heading5>
          <a href="DUMMY_LINK">Lorem ipsum dolor sit amet</a>
        </Heading5>`,
      },
    },
  },
};
