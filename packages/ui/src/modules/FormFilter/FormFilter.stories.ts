import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/FormFilter/FormFilter.astro';
import FormFilter from '@packages/ui/modules/FormFilter/FormFilter.astro';
import FormRadio from '@packages/ui/modules/FormRadio/FormRadio.astro';
import LayoutColumn from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

const storybookComponent = (component: unknown) =>
  component as AstroComponentFactory;

const meta = {
  component: FormFilter,
  title: 'Components/Form/FormFilter',
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
        '<dt>カテゴリ</dt>',
        '<dd>',
        {
          component: storybookComponent(LayoutColumn),
          props: {
            columnPc: '3',
            columnSp: '1',
          },
          slots: {
            default: [
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  checked: true,
                  id: 'category-all',
                  name: 'category',
                  title: 'すべて',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'category-news',
                  name: 'category',
                  title: 'お知らせ',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'category-event',
                  name: 'category',
                  title: 'イベント',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'category-service',
                  name: 'category',
                  title: 'サービス',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'category-company',
                  name: 'category',
                  title: '企業情報',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'category-recruit',
                  name: 'category',
                  title: '採用情報',
                },
              },
              '</div>',
            ],
          },
        },
        '</dd>',
        '<dt>年度</dt>',
        '<dd>',
        {
          component: storybookComponent(LayoutColumn),
          props: {
            columnPc: '3',
            columnSp: '1',
          },
          slots: {
            default: [
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  checked: true,
                  id: 'year-all',
                  name: 'year',
                  title: 'すべて',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'year-2026',
                  name: 'year',
                  title: '2026年',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'year-2025',
                  name: 'year',
                  title: '2025年',
                },
              },
              '</div>',
            ],
          },
        },
        '</dd>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import FormFilter from '@packages/ui/modules/FormFilter/FormFilter.astro';
import FormRadio from '@packages/ui/modules/FormRadio/FormRadio.astro';
import LayoutColumn from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
---

<FormFilter>
  <dt>カテゴリ</dt>
  <dd>
    <LayoutColumn columnSp="1" columnPc="3">
      <div class="LayoutColumn__segment">
        <FormRadio checked id="category-all" name="category" title="すべて" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="category-news" name="category" title="お知らせ" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="category-event" name="category" title="イベント" />
      </div>
    </LayoutColumn>
  </dd>

  <dt>年度</dt>
  <dd>
    <LayoutColumn columnSp="1" columnPc="3">
      <div class="LayoutColumn__segment">
        <FormRadio checked id="year-all" name="year" title="すべて" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="year-2026" name="year" title="2026年" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="year-2025" name="year" title="2025年" />
      </div>
    </LayoutColumn>
  </dd>
</FormFilter>`,
      },
    },
  },
};
