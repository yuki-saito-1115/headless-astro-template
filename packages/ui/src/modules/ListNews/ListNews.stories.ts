import type { Props } from '@packages/ui/modules/ListNews/ListNews.astro';
import ListNews from '@packages/ui/modules/ListNews/ListNews.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ListNews,
  tags: ['autodocs'],
  title: 'Components/List/ListNews',
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 */
type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    datas: [
      {
        date: '2026-10-04T15:00:00.000Z',
        category: ['カテゴリ1'],
        id: 'news-1',
        title: 'お知らせの内容を表示します。',
      },
      {
        date: '2026-10-03T15:00:00.000Z',
        category: ['カテゴリ2'],
        id: 'news-2',
        link: 'https://example.com/news/',
        title: 'お知らせの内容を表示します。',
      },
    ],
  },
};
