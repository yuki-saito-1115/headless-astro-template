import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid.astro';

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `__このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    slots: {
      control: 'object',
      description: `直下には \`div.Grid__segment\` のみ配置を許容します。<br>\`div.Grid__segment\` の中ではあらゆるHTML要素およびAstroコンポーネントの使用を許容します。<br>要素・コンポーネント同士の間隔調整はTailwind CSSのユーティリティを利用してください。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLDivElement' },
        defaultValue: { summary: undefined },
      },
    },
    gridPc: {
      control: false,
      description: `直下の \`div.Grid__segment\` に \`class="gridPc-4"\` のようにクラス名を付与することでグリッド段数を設定できます。<br>1行あたりの合計が12になるように指定してください（例: 4 + 4 + 4、6 + 6、3 + 3 + 3 + 3 など）。`,
      table: {
        category: 'Children Classes',
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
        defaultValue: { summary: undefined },
      },
    },
    gridSp: {
      control: false,
      description: `直下の \`div.Grid__segment\` に \`class="gridSp-4"\` のようにクラス名を付与することでグリッド段数を設定できます。<br>1行あたりの合計が12になるように指定してください（例: 4 + 4 + 4、6 + 6、3 + 3 + 3 + 3 など）。`,
      table: {
        category: 'Children Classes',
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
        defaultValue: { summary: undefined },
      },
    },
  },
  decorators: [
    // Storybook のデフォルトのデコレーターを上書き
    (Story) => {
      const style = document.createElement('style');
      style.textContent = `
        .Grid__segment {
          padding: 1em;
          border: 1px dashed #999;
        }
      `;
      document.head.appendChild(style);
      return Story();
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default: `<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-11 gridSp-11">11</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Grid>
          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-11 gridSp-11">11</div>
        </Grid>`,
      },
    },
  },
};

export const Sample1: Story = {
  args: {
    slots: {
      default: `<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-8 gridSp-8">8</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Grid>
          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-8 gridSp-8">8</div>
        </Grid>`,
      },
    },
  },
};

export const Sample2: Story = {
  args: {
    slots: {
      default: `<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-1 gridSp-1">1</div>

<div class="Grid__segment gridPc-2 gridSp-2">2</div>

<div class="Grid__segment gridPc-3 gridSp-3">3</div>

<div class="Grid__segment gridPc-3 gridSp-3">3</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Grid>
          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-1 gridSp-1">1</div>

          <div class="Grid__segment gridPc-2 gridSp-2">2</div>

          <div class="Grid__segment gridPc-3 gridSp-3">3</div>

          <div class="Grid__segment gridPc-3 gridSp-3">3</div>
        </Grid>`,
      },
    },
  },
};
