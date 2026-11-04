import type { Meta, StoryObj } from '@storybook/react';

import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/NavigationSns/NavigationSns.astro';
import NavigationSns from '@packages/ui/modules/NavigationSns/NavigationSns.astro';

const meta = {
  component: NavigationSns,
  title: 'Components/Navigation/NavigationSns',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    datas: {
      facebook: '#facebook',
      good: '#good',
      instagram: '#instagram',
      line: '#line',
      share: '#share',
      x: '#x',
    },
  },
};
