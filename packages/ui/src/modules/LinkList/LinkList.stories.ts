import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/LinkList/LinkList.astro';
import LinkList from '@packages/ui/modules/LinkList/LinkList.astro';

const meta = {
  component: LinkList,
  title: 'Components/Link/LinkList',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    columnPc: '1',
    columnSp: '1',
    datas: [
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
};

export const Column2: Story = {
  args: {
    columnPc: '2',
    columnSp: '1',
    datas: [
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
};

export const Column3: Story = {
  args: {
    columnPc: '3',
    columnSp: '2',
    datas: [
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
};

export const Column4: Story = {
  args: {
    columnPc: '4',
    columnSp: '2',
    datas: [
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
    ],
  },
};

export const ColumnAuto: Story = {
  args: {
    columnPc: 'auto',
    columnSp: 'auto',
    datas: [
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor sit amet',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem ipsum dolor',
      },
      {
        href: 'DUMMY_LINK',
        title: 'Lorem',
      },
    ],
  },
};
