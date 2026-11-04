import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Media/Media.astro';
import Media from '@packages/ui/modules/Media/Media.astro';

const meta = {
  component: Media,
  title: 'Components/Media/Media',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    slots: {
      default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
</figure>`,
    },
  },
};

export const WithCaption: Story = {
  args: {
    slots: {
      default: `<figure>
  <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
  <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>`,
    },
  },
};

export const Link: Story = {
  args: {
    slots: {
      default: `<figure>
  <a href="DUMMY_LINK">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
  </a>
</figure>`,
    },
  },
};

export const Picture: Story = {
  args: {
    slots: {
      default: `<figure>
  <picture>
    <source media="(min-width: 768px)" srcset="https://dummyimage.com/600x400/ddd/fff" type="image/webp" width="600" height="400" />
    <img src="https://dummyimage.com/327x200/ddd/fff" width="327" height="200" loading="lazy" alt="" />
  </picture>
  <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>`,
    },
  },
};

export const AlignLeft: Story = {
  args: {
    slots: {
      default: `<figure style="text-align: left;">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>`,
    },
  },
};

export const AlignRight: Story = {
  args: {
    slots: {
      default: `<figure style="text-align: right;">
    <img src="https://dummyimage.com/600x400/ddd/fff" width="600" height="400" alt="" />
    <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</figcaption>
</figure>`,
    },
  },
};
