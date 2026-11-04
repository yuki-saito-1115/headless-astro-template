import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/LayoutMedia/LayoutMedia.astro';
import LayoutMedia from '@packages/ui/modules/LayoutMedia/LayoutMedia.astro';
import Media from '@packages/ui/modules/Media/Media.astro';

const meta = {
  component: LayoutMedia,
  title: 'Components/Layout/LayoutMedia',
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
    directPc: 'row-reverse',
    directSp: 'row-reverse',
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

export const Column: Story = {
  args: {
    directPc: 'column',
    directSp: 'column',
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

export const ColumnReversed: Story = {
  args: {
    directPc: 'column-reverse',
    directSp: 'column-reverse',
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
