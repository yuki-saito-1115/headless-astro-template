import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Meta, StoryObj } from '@storybook/react';
import type { Props as MediaPropType } from './Media.astro';
import Media from './Media.astro';

const meta = {
  component: Media,
  tags: ['autodocs'],
  title: 'Components/Media/Media',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [画像](https://document.microcms.io/manual/rich-editor-usage#h7b3c950f25) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [画像](https://document.microcms.io/manual/rich-editor-usage#h7b3c950f25) のHTML構造のみを許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<StoryArgs<MediaPropType>>;

export default meta;
type Story = StoryObj<StoryArgs<MediaPropType>>;

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
