import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

import type { StoryArgs } from '@packages/content/types/Storybook';
import Text from '@packages/ui/modules/Text/Text.astro';
import type { Props } from '@packages/ui/modules/WidgetTab/WidgetTab.astro';
import WidgetTab from '@packages/ui/modules/WidgetTab/WidgetTab.astro';

const storybookComponent = (component: unknown) => component as AstroComponentFactory;

const meta = {
  component: WidgetTab,
  title: 'Components/Widget/WidgetTab',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    datas: [
      {
        slot: 'tab1',
        title: 'タブ1',
      },
      {
        slot: 'tab2',
        title: 'タブ2',
      },
      {
        slot: 'tab3',
        title: 'タブ3',
      },
    ],
    id: 'tab-sample',
    slots: {
      tab1: {
        component: storybookComponent(Text),
        slots: {
          default: '<p>タブ1の内容です。</p>',
        },
      },
      tab2: {
        component: storybookComponent(Text),
        slots: {
          default: '<p>タブ2の内容です。</p>',
        },
      },
      tab3: {
        component: storybookComponent(Text),
        slots: {
          default: '<p>タブ3の内容です。</p>',
        },
      },
    },
  },
};
