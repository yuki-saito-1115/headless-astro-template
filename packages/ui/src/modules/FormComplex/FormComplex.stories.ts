import type { StoryArgs } from '@packages/content/types/Storybook';
import Button from '@packages/ui/modules/Button/Button.astro';
import type { Props } from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormComplex from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormSelect from '@packages/ui/modules/FormSelect/FormSelect.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
import type { Meta, StoryObj } from '@storybook/react';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';

const storybookComponent = (component: unknown) =>
  component as AstroComponentFactory;

const yearOptions = [
  { label: '', value: '' },
  { label: '2026', value: '2026' },
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' },
];

const monthOptions = [
  { label: '', value: '' },
  ...Array.from({ length: 12 }, (_, index) => ({
    label: `${index + 1}`,
    value: String(index + 1),
  })),
];

const dayOptions = [
  { label: '', value: '' },
  ...Array.from({ length: 31 }, (_, index) => ({
    label: `${index + 1}`,
    value: String(index + 1),
  })),
];

const meta = {
  component: FormComplex,
  tags: ['autodocs'],
  title: 'Components/Form/FormComplex',
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

// biome-ignore lint/suspicious/noShadowRestrictedNames: ストーリー名として日付入力を表す
export const Date: Story = {
  args: {
    directPc: 'row',
    directSp: 'row',
    slots: {
      default: [
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: yearOptions,
          },
        },
        '年</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: monthOptions,
          },
        },
        '月</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: dayOptions,
          },
        },
        '日</span>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import FormComplex from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
---

<FormComplex>
  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '2026', value: '2026' },
      { label: '2025', value: '2025' },
    ]} />年
  </span>

  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ]} />月
  </span>

  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ]} />日
  </span>
</FormComplex>`,
      },
    },
  },
};

export const Tel: Story = {
  args: {
    directPc: 'row',
    directSp: 'row',
    slots: {
      default: [
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormText),
        },
        '-</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormText),
        },
        '-</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormText),
        },
        '</span>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import FormComplex from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
---

<FormComplex>
  <span class="FormComplex__segment">
    <FormText />-
  </span>

  <span class="FormComplex__segment">
    <FormText />-
  </span>

  <span class="FormComplex__segment">
    <FormText />
  </span>
</FormComplex>`,
      },
    },
  },
};

export const Address: Story = {
  args: {
    directPc: 'row',
    directSp: 'row',
    slots: {
      default: [
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormText),
        },
        {
          component: storybookComponent(Button),
          props: {
            as: 'button',
            title: '郵便番号から住所検索',
            theme: 'text',
          },
        },
        '</span>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import Button from '@packages/ui/modules/Button/Button.astro';
import FormComplex from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
---

<FormComplex>
  <span class="FormComplex__segment">
    <FormText />
    <Button as="button" theme="text" title="郵便番号から住所検索" />
  </span>
</FormComplex>`,
      },
    },
  },
};

export const Column: Story = {
  args: {
    directPc: 'column',
    directSp: 'column',
    slots: {
      default: [
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: yearOptions,
          },
        },
        '年</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: monthOptions,
          },
        },
        '月</span>',
        '<span class="FormComplex__segment">',
        {
          component: storybookComponent(FormSelect),
          props: {
            options: dayOptions,
          },
        },
        '日</span>',
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `---
import FormComplex from '@packages/ui/modules/FormComplex/FormComplex.astro';
import FormText from '@packages/ui/modules/FormText/FormText.astro';
---

<FormComplex directSp="column" directPc="column">
  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '2026', value: '2026' },
      { label: '2025', value: '2025' },
    ]} />年
  </span>

  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ]} />月
  </span>

  <span class="FormComplex__segment">
    <FormSelect options={[
      { label: '', value: '' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
    ]} />日
  </span>
</FormComplex>`,
      },
    },
  },
};
