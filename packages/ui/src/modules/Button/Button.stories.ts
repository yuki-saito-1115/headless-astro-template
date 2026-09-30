import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Button/Button.astro';
import Button from '@packages/ui/modules/Button/Button.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button/Button',
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っているため、出力要素ごとに型を絞れるようにしています
 * `Tag` はPropsの `as` から `undefined` を除いた要素名の一覧です
 * `Story<'a'>` のように出力要素を指定すると、`args` にその要素固有の属性（`href` など）を指定できます
 * 省略すると全要素の共通属性のみ指定できます。`StoryArgs` は `args` に `slots` を追加します
 */
type Tag = NonNullable<Props['as']>;
type Story<T extends Tag = Tag> = StoryObj<StoryArgs<Props<T>>>;

export const LinkElement: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    as: 'a',
    href: 'DUMMY_LINK',
  },
};

export const ButtonElement: Story<'button'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    as: 'button',
    type: 'button',
  },
};

export const ThemeEmphasis: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    theme: 'emphasis',
    as: 'a',
    href: 'DUMMY_LINK',
  },
};

export const ThemeConversion: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    theme: 'conversion',
    as: 'a',
    href: 'DUMMY_LINK',
  },
};

export const ThemeText: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    theme: 'text',
    as: 'a',
    href: 'DUMMY_LINK',
  },
};

export const DisabledButton: Story<'button'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    as: 'button',
    disabled: true,
  },
};

export const DisabledLink: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const IconBefore: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    as: 'a',
    href: 'DUMMY_LINK',
    iconBefore: {
      name: 'download',
    },
  },
};

export const IconAfter: Story<'a'> = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    as: 'a',
    href: 'DUMMY_LINK',
    iconAfter: {
      name: 'download',
    },
  },
};
