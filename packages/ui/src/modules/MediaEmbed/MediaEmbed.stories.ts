import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/MediaEmbed/MediaEmbed.astro';
import MediaEmbed from '@packages/ui/modules/MediaEmbed/MediaEmbed.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: MediaEmbed,
  tags: ['autodocs'],
  title: 'Components/Media/MediaEmbed',
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

export const Youtube: Story = {
  args: {
    slots: {
      default: `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/B6_iQvaIjXw?si=qySgrpaeN8jW2Uts" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen="" scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>`,
    },
  },
};

export const GoogleMaps: Story = {
  args: {
    slots: {
      default: `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 75%;"><iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC5AabUmFCrVTvkne8HfUV-Qotqx6-MC3E&amp;center=38.2553991,140.888458&amp;zoom=15" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen=""></iframe></div>`,
    },
  },
};

export const Facade: Story = {
  args: {
    facade: true,
    slots: {
      default: `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/B6_iQvaIjXw?si=qySgrpaeN8jW2Uts" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen="" scrolling="no" allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" referrerpolicy="strict-origin"></iframe></div>`,
    },
  },
};
