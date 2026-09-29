import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Text/Text.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Text,
  tags: ['autodocs'],
  title: 'Components/Text/⭐ Text',
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
      default: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>`,
    },
  },
};

export const LineBreak: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Aenean commodo ligula eget dolor.<br />Aenean massa.<br />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};

export const Bold: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};

export const Italic: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <em>Aenean commodo ligula eget dolor.</em> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};

export const Underline: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <u>Aenean commodo ligula eget dolor.</u> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};

export const Strikethrough: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <s>Aenean commodo ligula eget dolor.</s> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};

export const Code: Story = {
  args: {
    slots: {
      default:
        '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <code>Aenean commodo ligula eget dolor.</code> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>',
    },
  },
};
