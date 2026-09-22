import type { Meta, StoryObj } from '@storybook/react';
import BadgeList from './BadgeList.astro';

const meta = {
  component: BadgeList,
  tags: ['autodocs'],
  title: 'Components/Badge/BadgeList',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
`,
      },
    },
  },
  argTypes: {
    datas: {
      control: 'object',
      description:
        '各要素は `Badge` コンポーネントが受け取るPropsと同じ形式で指定してください。',
      table: {
        category: 'Props',
        type: { summary: 'Props as BadgePropType[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    datas: [
      {
        label: 'badge 1',
        href: 'DUMMY_LINK',
      },
      {
        label: 'badge 2',
        href: 'DUMMY_LINK',
        theme: 'caution',
      },
      {
        label: 'badge 3',
        href: 'DUMMY_LINK',
        theme: 'warning',
      },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <BadgeList datas={[
          { label: 'badge 1', href: 'DUMMY_LINK' },
          { label: 'badge 2', href: 'DUMMY_LINK', theme: 'caution', },
          { label: 'badge 3', href: 'DUMMY_LINK', theme: 'warning', },
        ]} />`,
      },
    },
  },
};
