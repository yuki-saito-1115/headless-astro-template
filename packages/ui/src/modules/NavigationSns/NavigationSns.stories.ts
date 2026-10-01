import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/NavigationSns/NavigationSns.astro';
import NavigationSns from '@packages/ui/modules/NavigationSns/NavigationSns.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: NavigationSns,
  tags: ['autodocs'],
  title: 'Components/Navigation/NavigationSns',
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
    share: { href: '#share' },
    good: { href: '#good' },
    facebook: { href: '#facebook' },
    x: { href: '#x' },
    instagram: { href: '#instagram' },
    line: { href: '#line' },
  },
};
