import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card.astro';

const meta = {
  title: 'Components/Card/Card（準備中）',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
- このコンポーネントは○○の目的で使用します。それ以外の目的での使用は推奨しません。
- __このコンポーネントはリッチエディタのスタイルや構造と関連しているため、改修の際は併せてリッチエディタの修正もお願いします。__
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    element: {
      control: 'radio',
      options: ['div', 'li'],
      description: 'レンダリングする HTML 要素を設定します。',
      table: {
        type: { summary: 'div | li' },
        defaultValue: { summary: 'div' },
      },
    },

    outline: {
      control: 'boolean',
      description: 'アウトライン（枠線）スタイルを適用します。',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    stackSP: {
      control: 'boolean',
      description: 'SP サイズでカードを縦積みレイアウトにします。',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    stackPC: {
      control: 'boolean',
      description: 'PC サイズでカードを縦積みレイアウトにします。',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default: `<div class="Card__head">
  <div class="Card__title">Card Title</div>
</div>

<div class="Card__body">
  <div class="Card__body__content">Card Body</div>
</div>

<div class="Card__foot">
  <div class="Card__foot__content">Card Foot</div>
</div>

<div class="Card__media">
  <div class="Card__media__content">Card Media</div>
</div>`,
    },
  },
};

export const Point: Story = {
  args: {
    slots: {
      default: `<div class="Card__head">
  <div class="Card__title">Card Title</div>
</div>

<div class="Card__body">
  <div class="Card__body__content">Card Body</div>
</div>

<div class="Card__foot">
  <div class="Card__foot__content">Card Foot</div>
</div>

<div class="Card__media">
  <div class="Card__media__content">Card Media</div>
</div>`,
    },
    theme: 'point',
  },
};

export const Detail: Story = {
  args: {
    slots: {
      default: `<div class="Card__head">
  <div class="Card__title">Card Title</div>
</div>

<div class="Card__body">
  <div class="Card__body__content">Card Body</div>
</div>

<div class="Card__foot">
  <div class="Card__foot__content">Card Foot</div>
</div>

<div class="Card__media">
  <div class="Card__media__content">Card Media</div>
</div>`,
    },
    theme: 'detail',
  },
};
