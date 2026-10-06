import type { StoryArgs } from '@packages/content/types/Storybook';
import Card from '@packages/ui/modules/Card/Card.astro';
import Media from '@packages/ui/modules/Media/Media.astro';
import type { Props } from '@packages/ui/modules/WidgetCarousel/WidgetCarousel.astro';
import WidgetCarousel from '@packages/ui/modules/WidgetCarousel/WidgetCarousel.astro';
import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

const storybookComponent = (component: unknown) =>
  component as AstroComponentFactory;

const meta = {
  component: WidgetCarousel,
  tags: ['autodocs'],
  title: 'Components/Widget/WidgetCarousel',
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

const colors = ['1d4ed8', '7e22ce', '047857', 'b45309', 'be123c'];

const options = {
  a11y: {
    containerMessage: 'カルーセル',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  slidesPerView: 1,
  spaceBetween: 16,
};

export const MediaSlider: Story = {
  args: {
    options: {
      ...options,
      a11y: {
        containerMessage: 'サンプル画像',
      },
    },
    slots: {
      default: colors.map((color, index) => ({
        component: storybookComponent(Media),
        props: {
          class: 'WidgetCarousel__slide',
        },
        slots: {
          default: `<figure>
  <img src="https://dummyimage.com/720x400/${color}/fff&text=Slide+${index + 1}" width="720" height="400" alt="スライド${index + 1}" loading="lazy" />
</figure>`,
        },
      })),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Media from '@packages/ui/modules/Media/Media.astro';
import WidgetCarousel from '@packages/ui/modules/WidgetCarousel/WidgetCarousel.astro';
---

<WidgetCarousel
  options={{
    a11y: {
      containerMessage: 'サンプル画像',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    slidesPerView: 1,
    spaceBetween: 16,
  }}
>
  <Media class="WidgetCarousel__slide">
    <figure>
      <img src="https://dummyimage.com/720x400/1d4ed8/fff&text=Slide+1" width="720" height="400" alt="スライド1" loading="lazy" />
    </figure>
  </Media>

  <Media class="WidgetCarousel__slide">
    <figure>
      <img src="https://dummyimage.com/720x400/7e22ce/fff&text=Slide+2" width="720" height="400" alt="スライド2" loading="lazy" />
    </figure>
  </Media>

  <Media class="WidgetCarousel__slide">
    <figure>
      <img src="https://dummyimage.com/720x400/047857/fff&text=Slide+3" width="720" height="400" alt="スライド3" loading="lazy" />
    </figure>
  </Media>
</WidgetCarousel>`,
      },
    },
  },
};

export const CardSlider: Story = {
  args: {
    options: {
      ...options,
      a11y: {
        containerMessage: 'おすすめ記事',
      },
    },
    slots: {
      default: colors.map((color, index) => ({
        component: storybookComponent(Card),
        props: {
          class: 'WidgetCarousel__slide',
          media: {
            alt: '',
            height: 400,
            loading: 'lazy',
            src: `https://dummyimage.com/720x400/${color}/fff&text=Card+${index + 1}`,
            width: 720,
          },
          title: `カード${index + 1}のタイトル`,
        },
        slots: {
          default: 'カードの内容をここに配置します。',
        },
      })),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Card from '@packages/ui/modules/Card/Card.astro';
import WidgetCarousel from '@packages/ui/modules/WidgetCarousel/WidgetCarousel.astro';
---

<WidgetCarousel
  options={{
    a11y: {
      containerMessage: 'おすすめ記事',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    slidesPerView: 1,
    spaceBetween: 16,
  }}
>
  <Card
    class="WidgetCarousel__slide"
    media={{
      alt: '',
      height: 400,
      loading: 'lazy',
      src: 'https://dummyimage.com/720x400/1d4ed8/fff&text=Card+1',
      width: 720,
    }}
    title="カード1のタイトル"
  >
    カードの内容をここに配置します。
  </Card>

  <Card
    class="WidgetCarousel__slide"
    media={{
      alt: '',
      height: 400,
      loading: 'lazy',
      src: 'https://dummyimage.com/720x400/7e22ce/fff&text=Card+2',
      width: 720,
    }}
    title="カード2のタイトル"
  >
    カードの内容をここに配置します。
  </Card>

  <Card
    class="WidgetCarousel__slide"
    media={{
      alt: '',
      height: 400,
      loading: 'lazy',
      src: 'https://dummyimage.com/720x400/047857/fff&text=Card+3',
      width: 720,
    }}
    title="カード3のタイトル"
  >
    カードの内容をここに配置します。
  </Card>
</WidgetCarousel>`,
      },
    },
  },
};
