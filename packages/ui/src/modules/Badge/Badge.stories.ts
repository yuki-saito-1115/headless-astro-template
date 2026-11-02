import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Badge/Badge.astro';
import Badge from '@packages/ui/modules/Badge/Badge.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Badge,
  title: 'Components/Badge/Badge',
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

export const Default: Story = {
  args: {
    title: 'Lorem ipsum',
  },
};

export const LinkElement: Story<'a'> = {
  args: {
    as: 'a',
    href: 'DUMMY_LINK',
    title: 'Lorem ipsum',
  },
};

export const ButtonElement: Story<'button'> = {
  args: {
    as: 'button',
    type: 'button',
    title: 'Lorem ipsum',
  },
};

export const Outline: Story = {
  args: {
    title: 'Lorem ipsum',
    outline: true,
  },
};

export const ThemeCaution: Story = {
  args: {
    title: 'Lorem ipsum',
    theme: 'caution',
  },
};

export const ThemeWarning: Story = {
  args: {
    title: 'Lorem ipsum',
    theme: 'warning',
  },
};

export const ShapeRounded: Story = {
  args: {
    title: 'Lorem ipsum',
    shape: 'rounded',
  },
};

export const ShapePill: Story = {
  args: {
    title: 'Lorem ipsum',
    shape: 'pill',
  },
};
