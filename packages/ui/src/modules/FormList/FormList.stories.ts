import type { StoryArgs } from '@packages/content/types/Storybook';
import Badge from '@packages/ui/modules/Badge/Badge.astro';
import type { Props } from '@packages/ui/modules/FormList/FormList.astro';
import FormList from '@packages/ui/modules/FormList/FormList.astro';
import FormRadio from '@packages/ui/modules/FormRadio/FormRadio.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
import LayoutColumn from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
import List from '@packages/ui/modules/List/List.astro';
import TextWarning from '@packages/ui/modules/TextWarning/TextWarning.astro';
import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

const storybookComponent = (component: unknown) =>
  component as AstroComponentFactory;

const meta = {
  component: FormList,
  tags: ['autodocs'],
  title: 'Components/Form/FormList',
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
    directPc: 'row',
    directSp: 'column',
    slots: {
      default: [
        '<dt><label for="name">氏名</label></dt>',
        '<dd>',
        {
          component: storybookComponent(LayoutColumn),
          props: {
            columnPc: '1',
            columnSp: '1',
          },
          slots: {
            default: [
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormText),
                props: {
                  id: 'name',
                  name: 'name',
                  size: 'full',
                  type: 'text',
                },
              },
              '</div>',
            ],
          },
        },
        '</dd>',
        '<dt>お問い合わせ内容</dt>',
        '<dd>',
        {
          component: storybookComponent(LayoutColumn),
          props: {
            columnPc: '1',
            columnSp: '1',
          },
          slots: {
            default: [
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'inquiry-service',
                  name: 'inquiry',
                  title: 'サービスについて',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'inquiry-product',
                  name: 'inquiry',
                  title: '製品について',
                },
              },
              '</div>',
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormRadio),
                props: {
                  id: 'inquiry-recruit',
                  name: 'inquiry',
                  title: '採用について',
                },
              },
              '</div>',
            ],
          },
        },
        '</dd>',
        '<dt>',
        '<label for="email">メールアドレス',
        {
          component: storybookComponent(Badge),
          props: {
            theme: 'warning',
            title: '必須',
          },
        },
        '</label>',
        {
          component: storybookComponent(List),
          props: {
            class: 'mt-4',
            theme: 'note',
          },
          slots: {
            default: '<ul><li>半角英数字で入力してください。</li></ul>',
          },
        },
        '</dt>',
        '<dd>',
        {
          component: storybookComponent(TextWarning),
          slots: {
            default: '<p>メールアドレスを入力してください。</p>',
          },
        },
        {
          component: storybookComponent(LayoutColumn),
          props: {
            class: 'mt-4',
            columnPc: '1',
            columnSp: '1',
          },
          slots: {
            default: [
              '<div class="LayoutColumn__segment">',
              {
                component: storybookComponent(FormText),
                props: {
                  id: 'email',
                  name: 'email',
                  size: 'full',
                  state: 'invalid',
                  type: 'email',
                },
              },
              '</div>',
            ],
          },
        },
        {
          component: storybookComponent(List),
          props: {
            class: 'mt-4',
            theme: 'note',
          },
          slots: {
            default: '<ul><li>確認のため、もう一度入力してください。</li></ul>',
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
import FormList from '@packages/ui/modules/FormList/FormList.astro';
import FormRadio from '@packages/ui/modules/FormRadio/FormRadio.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
import LayoutColumn from '@packages/ui/modules/LayoutColumn/LayoutColumn.astro';
import List from '@packages/ui/modules/List/List.astro';
import TextWarning from '@packages/ui/modules/TextWarning/TextWarning.astro';
import Badge from '@packages/ui/modules/Badge/Badge.astro';
---

<FormList>
  <dt><label for="name">氏名</label></dt>
  <dd>
    <LayoutColumn columnSp="1" columnPc="1">
      <div class="LayoutColumn__segment">
        <FormText id="name" name="name" size="full" type="text" />
      </div>
    </LayoutColumn>
  </dd>

  <dt>お問い合わせ内容</dt>
  <dd>
    <LayoutColumn columnSp="1" columnPc="1">
      <div class="LayoutColumn__segment">
        <FormRadio id="inquiry-service" name="inquiry" title="サービスについて" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="inquiry-product" name="inquiry" title="製品について" />
      </div>
      <div class="LayoutColumn__segment">
        <FormRadio id="inquiry-recruit" name="inquiry" title="採用について" />
      </div>
    </LayoutColumn>
  </dd>

  <dt>
    <label for="email">
      メールアドレス
      <Badge theme="warning" title="必須" />
    </label>
    <List theme="note">
      <ul><li>半角英数字で入力してください。</li></ul>
    </List>
  </dt>
  <dd>
    <TextWarning>
      <p>メールアドレスを入力してください。</p>
    </TextWarning>

    <LayoutColumn class="mt-4" columnSp="1" columnPc="1">
      <div class="LayoutColumn__segment">
        <FormText
          id="email"
          name="email"
          size="full"
          state="invalid"
          type="email"
        />
      </div>
    </LayoutColumn>

    <List class="mt-4" theme="note">
      <ul><li>確認のため、もう一度入力してください。</li></ul>
    </List>
  </dd>
</FormList>`,
      },
    },
  },
};
