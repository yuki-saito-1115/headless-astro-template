import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

import type { StoryArgs } from '@packages/content/types/Storybook';
import Button from '@packages/ui/modules/Button/Button.astro';
import type { Props } from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import PanelInformation from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import Text from '@packages/ui/modules/Text/Text.astro';

const storybookComponent = (component: unknown) => component as AstroComponentFactory;

const meta = {
  component: PanelInformation,
  title: 'Components/Panel/PanelInformation',
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
      default: [
        '<div class="PanelInformation__segment">',
        '<div class="PanelInformation__title">Webからのお問い合わせ</div>',
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p>お問い合わせフォームからご相談いただけます。</p>',
          },
        },
        {
          component: storybookComponent(Button),
          props: {
            as: 'a',
            class: 'mt-4',
            href: '/contact/',
            size: 'full',
            theme: 'conversion',
            title: 'フォームから問い合わせる',
          },
        },
        '</div>',
        '<div class="PanelInformation__segment">',
        `<div class="PanelInformation__title">お電話からのお問い合わせ</div>`,
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p><b>XXXXカスタマーセンター</b></p>',
          },
        },
        `<div class="PanelInformation__number">0120-000-000</div>`,
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p>受付時間 9:00～17:00（土・日・祝日は除く）</p>',
          },
        },
        '</div>',
        '<div class="PanelInformation__segment">',
        '<div class="PanelInformation__title">Webからの資料ダウンロード</div>',
        {
          component: storybookComponent(Button),
          props: {
            as: 'a',
            class: 'mt-4',
            href: '/service.pdf',
            size: 'full',
            theme: 'emphasis',
            title: 'サービス紹介資料ダウンロード',
          },
        },
        '</div>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Button from '@packages/ui/modules/Button/Button.astro';
import PanelInformation from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
---

<PanelInformation>
  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">Webからのお問い合わせ</div>
    <Text class="PanelInformation__text mt-4">
      <p>お問い合わせフォームからご相談いただけます。</p>
    </Text>
    <Button
      as="a"
      class="mt-4"
      size="full"
      href="/contact/"
      theme="conversion"
      title="フォームから問い合わせる"
    />
  </div>

  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">お電話からのお問い合わせ</div>
    <Text class="PanelInformation__text mt-4">
      <p><b>XXXXカスタマーセンター</b></p>
    </Text>
    <div class="PanelInformation__number">0120-000-000</div>
    <Text class="PanelInformation__text mt-4">
      <p>受付時間 9:00～17:00（土・日・祝日は除く）</p>
    </Text>
  </div>

  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">Webからの資料ダウンロード</div>
    <Button
      as="a"
      class="mt-4"
      size="full"
      href="/service.pdf"
      theme="emphasis"
      title="サービス紹介資料ダウンロード"
    />
  </div>
</PanelInformation>`,
      },
    },
  },
};

export const Inquiry: Story = {
  args: {
    slots: {
      default: [
        '<div class="PanelInformation__segment">',
        '<div class="PanelInformation__title">Webからのお問い合わせ</div>',
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p>お問い合わせフォームからご相談いただけます。</p>',
          },
        },
        {
          component: storybookComponent(Button),
          props: {
            as: 'a',
            class: 'mt-4',
            href: '/contact/',
            size: 'full',
            theme: 'conversion',
            title: 'フォームから問い合わせる',
          },
        },
        '</div>',
        '<div class="PanelInformation__segment">',
        `<div class="PanelInformation__title">お電話からのお問い合わせ</div>`,
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p><b>XXXXカスタマーセンター</b></p>',
          },
        },
        `<div class="PanelInformation__number">0120-000-000</div>`,
        {
          component: storybookComponent(Text),
          props: {
            class: 'PanelInformation__text mt-4',
          },
          slots: {
            default: '<p>受付時間 9:00～17:00（土・日・祝日は除く）</p>',
          },
        },
        '</div>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Button from '@packages/ui/modules/Button/Button.astro';
import PanelInformation from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
import Text from '@packages/ui/modules/Text/Text.astro';
---

<PanelInformation>
  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">Webからのお問い合わせ</div>
    <Text class="PanelInformation__text mt-4">
      <p>お問い合わせフォームからご相談いただけます。</p>
    </Text>
    <Button
      as="a"
      class="mt-4"
      size="full"
      href="/contact/"
      theme="conversion"
      title="フォームから問い合わせる"
    />
  </div>

  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">お電話からのお問い合わせ</div>
    <Text class="PanelInformation__text mt-4">
      <p><b>XXXXカスタマーセンター</b></p>
    </Text>
    <div class="PanelInformation__number">0120-000-000</div>
    <Text class="PanelInformation__text mt-4">
      <p>受付時間 9:00～17:00（土・日・祝日は除く）</p>
    </Text>
  </div>
</PanelInformation>`,
      },
    },
  },
};

export const Download: Story = {
  args: {
    slots: {
      default: [
        '<div class="PanelInformation__segment">',
        '<div class="PanelInformation__title">Webからの資料ダウンロード</div>',
        {
          component: storybookComponent(Button),
          props: {
            as: 'a',
            class: 'mt-4',
            href: '/service.pdf',
            size: 'full',
            theme: 'emphasis',
            title: 'サービス紹介資料ダウンロード',
          },
        },
        '</div>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Button from '@packages/ui/modules/Button/Button.astro';
import PanelInformation from '@packages/ui/modules/PanelInformation/PanelInformation.astro';
---

<PanelInformation>
  <div class="PanelInformation__segment">
    <div class="PanelInformation__title">Webからの資料ダウンロード</div>
    <Button
      as="a"
      class="mt-4"
      size="full"
      href="/service.pdf"
      theme="emphasis"
      title="サービス紹介資料ダウンロード"
    />
  </div>
</PanelInformation>`,
      },
    },
  },
};
