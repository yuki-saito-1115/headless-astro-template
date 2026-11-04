import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Button/Button.astro';
import Button from '@packages/ui/modules/Button/Button.astro';

const meta = {
  component: Button,
  title: 'Components/Button/Button',
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
    as: 'a',
    href: 'DUMMY_LINK',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const ButtonElement: Story<'button'> = {
  args: {
    as: 'button',
    title: 'Lorem ipsum dolor sit amet',
    type: 'button',
  },
};

export const ThemeEmphasis: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    theme: 'emphasis',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const ThemeConversion: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    theme: 'conversion',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const ThemeText: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    theme: 'text',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const SizeSmall: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    size: 'small',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const SizeMedium: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    size: 'medium',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const SizeLarge: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    size: 'large',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const SizeFull: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    size: 'full',
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const DisabledButton: Story<'button'> = {
  args: {
    as: 'button',
    disabled: true,
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const DisabledLink: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const IconBefore: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    iconBefore: {
      name: 'download',
    },
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const IconAfter: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    iconAfter: {
      name: 'download',
    },
    title: 'Lorem ipsum dolor sit amet',
  },
};
