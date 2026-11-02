import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Box/Box.astro';
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box.astro';

const meta = {
  component: Box,
  title: 'Components/Box/Box',
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
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const Headless: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
  },
};

export const Scrollable: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N',
    },
    title: 'Lorem ipsum dolor sit amet',
    scroll: true,
  },
};

export const Details: Story<'details'> = {
  args: {
    as: 'details',
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    open: true,
  },
};

export const ThemeRelated: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'related',
  },
};

export const ThemeImportant: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'important',
  },
};

export const ThemeAlert: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,',
    },
    title: 'Lorem ipsum dolor sit amet',
    theme: 'alert',
  },
};
