import type { Meta, StoryObj } from '@storybook/react';
import Horizon from './Horizon.astro';

const meta = {
  component: Horizon,
  tags: ['autodocs'],
  title: 'Components/Horizon/Horizon',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [区切り線](https://document.microcms.io/manual/rich-editor-usage#hbfbcb364fd) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [区切り線](https://document.microcms.io/manual/rich-editor-usage#hbfbcb364fd) のHTML構造のみを許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLHRElement' },
        defaultValue: { summary: undefined },
      },
    },
    theme: {
      control: 'radio',
      options: [undefined, 'dotted', 'dashed'],
      description: `罫線のスタイルを設定できます。<br />ただしこのPropsはリッチエディタでは利用できません。`,
      table: {
        category: 'Props',
        type: { summary: 'dotted | dashed | undefined' },
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
      default: `<hr />`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Horizon>
          <hr />
        </Horizon>`,
      },
    },
  },
};

export const ThemeDotted: Story = {
  args: {
    slots: {
      default: `<hr />`,
    },
    theme: 'dotted',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Horizon theme="dotted">
          <hr />
        </Horizon>`,
      },
    },
  },
};

export const ThemeDashed: Story = {
  args: {
    slots: {
      default: `<hr />`,
    },
    theme: 'dashed',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Horizon theme="dashed">
          <hr />
        </Horizon>`,
      },
    },
  },
};
