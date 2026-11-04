import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

import type { StoryArgs } from '@packages/content/types/Storybook';
import Link from '@packages/ui/modules/Link/Link.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
import type { Props } from '@packages/ui/modules/WidgetDialog/WidgetDialog.astro';
import WidgetDialog from '@packages/ui/modules/WidgetDialog/WidgetDialog.astro';

const storybookComponent = (component: unknown) => component as AstroComponentFactory;

const meta = {
  component: WidgetDialog,
  title: 'Components/Widget/WidgetDialog',
} satisfies Meta<Props>;

export default meta;

/**
 * ストーリーの型。このコンポーネントはPropsに `Polymorphic` を使っていないため、出力要素ごとに型を絞る必要はありません
 * `StoryArgs` は `args` に `slots` を追加します
 */
type Story = StoryObj<StoryArgs<Props>>;

export const Default: Story = {
  args: {
    heading: 'ダイアログの見出し',
    id: 'widget-dialog-story',
    slots: {
      default: [
        {
          component: storybookComponent(Text),
          props: {
            class: 'mb-4',
          },
          slots: {
            default: '<p>ダイアログの内容をここに配置します。</p>',
          },
        },
        {
          component: storybookComponent(Link),
          slots: {
            default: '<a href="/">関連ページを見る</a>',
          },
        },
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Button from '@packages/ui/modules/Button/Button.astro';
import Link from '@packages/ui/modules/Link/Link.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
import WidgetDialog from '@packages/ui/modules/WidgetDialog/WidgetDialog.astro';
---

<Text>
  <p>
    <Button
      as="button"
      command="show-modal"
      commandfor="contact-dialog"
      theme="text"
      title="ダイアログを開く"
    />
  </p>
</Text>

<WidgetDialog id="contact-dialog" heading="ダイアログの見出し">
  <Text class="mb-4">
    <p>ダイアログの内容をここに配置します。</p>
  </Text>
  <Link><a href="/">関連ページを見る</a></Link>
</WidgetDialog>`,
      },
    },
  },
};
