import type { Meta, StoryObj } from '@storybook/react';
import { COMMON_TYPE_COLUMN_VALUES } from '@type/CommonType';
import LinkList from './LinkList.astro';

const meta = {
  component: LinkList,
  tags: ['autodocs'],
  title: 'Components/Link/LinkList',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
- __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
`,
      },
    },
  },
  argTypes: {
    datas: {
      control: 'object',
      description: `各要素は \`CommonTypeLink\` 型のオブジェクトを指定します。`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeLink[]' },
        defaultValue: { summary: undefined },
      },
    },
    columnPc: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: `PCサイズでの列数を指定します。`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
      },
    },
    columnSp: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: `SPサイズでの列数を指定します。`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
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
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
    ],
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <LinkList
          datas={[
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
          ]}
        />`,
      },
    },
  },
};
export const Column2: Story = {
  args: {
    datas: [
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
    ],
    columnPc: '2',
    columnSp: '2',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <LinkList
          columnPc="2"
          columnSp="2"
          datas={[
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
          ]}
        />`,
      },
    },
  },
};

export const Column3: Story = {
  args: {
    datas: [
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
    ],
    columnPc: '3',
    columnSp: '2',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <LinkList
          columnPc="3"
          columnSp="2"
          datas={[
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
          ]}
        />`,
      },
    },
  },
};

export const Column4: Story = {
  args: {
    datas: [
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
      {
        label: 'Lorem ipsum dolor sit amet',
        href: 'DUMMY_LINK',
      },
    ],
    columnPc: '4',
    columnSp: '2',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <LinkList
          columnPc="4"
          columnSp="2"
          datas={[
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
            { label: 'Lorem ipsum dolor sit amet', href: 'DUMMY_LINK' },
          ]}
        />`,
      },
    },
  },
};
