import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/LayoutMedia/LayoutMedia.astro';
import LayoutMedia from '@packages/ui/modules/LayoutMedia/LayoutMedia.astro';
import Media from '@packages/ui/modules/Media/Media.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: LayoutMedia,
  tags: ['autodocs'],
  title: 'Components/Layout/LayoutMedia',
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
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Row: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
  },
};

export const RowReversed: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
    directPc: 'row-reverse',
    directSp: 'row-reverse',
  },
};

export const Column: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
    directPc: 'column',
    directSp: 'column',
  },
};

export const ColumnReversed: Story = {
  args: {
    slots: {
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      media: {
        component: Media,
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet</figcaption>
</figure>`,
        },
      },
    },
    directPc: 'column-reverse',
    directSp: 'column-reverse',
  },
};
