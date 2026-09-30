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
    columnPc: '1',
    columnSp: '1',
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

export const Numbered: Story = {
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

export const ManualNumbered: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li value="5">Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Note: Story = {
  args: {
    theme: 'note',
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

export const NumberedNote: Story = {
  args: {
    theme: 'note',
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

export const ManualNumberdNote: Story = {
  args: {
    theme: 'note',
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li value="5">Lorem ipsum dolor sit amet</li>
<li value="88">Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Nested: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet
  <ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet
    <ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Lorem ipsum dolor sit amet</li>
    </ul>
  </li>
  <li>Lorem ipsum dolor sit amet</li>
  <li value="88">Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  </ol>

  <ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Lorem ipsum dolor sit amet</li>
  </ul>
</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const Column2: Story = {
  args: {
    columnPc: '2',
    columnSp: '1',
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

export const Column3: Story = {
  args: {
    columnPc: '3',
    columnSp: '2',
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const Column4: Story = {
  args: {
    columnPc: '4',
    columnSp: '2',
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const ColumnAuto: Story = {
  args: {
    columnPc: 'auto',
    columnSp: 'auto',
    slots: {
      default: `<ul>
<li>Lorem ipsum</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor</li>
<li>Lorem</li>
</ul>`,
    },
  },
};
