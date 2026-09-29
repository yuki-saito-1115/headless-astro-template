import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/List/List.astro';
import List from '@packages/ui/modules/List/List.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: List,
  tags: ['autodocs'],
  title: 'Components/List/List',
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

export const Default: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const Ordered: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Note: Story = {
  args: {
    note: true,
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const OrderedNote: Story = {
  args: {
    note: true,
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const OptionalNumber: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
<li value="888">Lorem ipsum dolor sit amet</li>
</ul>
<ol>
<li>Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
<li value="888">Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const OptionalNumberNote: Story = {
  args: {
    note: true,
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
<li value="888">Lorem ipsum dolor sit amet</li>
</ul>
<ol>
<li>Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
<li value="888">Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const OptionalMarker: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li value="①">Lorem ipsum dolor sit amet</li>
<li value="③">Lorem ipsum dolor sit amet</li>
<li value="④">Lorem ipsum dolor sit amet</li>
<li value="⑨">Lorem ipsum dolor sit amet</li>
</ul>
<ol>
<li value="①">Lorem ipsum dolor sit amet</li>
<li value="③">Lorem ipsum dolor sit amet</li>
<li value="④">Lorem ipsum dolor sit amet</li>
<li value="⑨">Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Nested: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul></li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol></li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};
