import { COMMON_TYPE_COLUMN_VALUES } from '@packages/content/types/CommonType';
import type { Meta, StoryObj } from '@storybook/react';
import Column from './Column.astro';

const meta = {
  component: Column,
  tags: ['autodocs'],
  title: 'Components/Layout/Column',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `直下には \`div.Column__segment\` のみ配置を許容します。<br>\`div.Column__segment\` の中ではあらゆるHTML要素およびAstroコンポーネントの使用を許容します。<br>要素・コンポーネント同士の間隔調整はTailwind CSSのユーティリティを利用してください。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLDivElement' },
        defaultValue: { summary: undefined },
      },
    },
    columnPc: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: 'PCサイズでの列数を指定します。',
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
      },
    },
    columnSp: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: 'SPサイズでの列数を指定します。',
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
      },
    },
  },
  decorators: [
    // Storybook のデフォルトのデコレーターを上書き
    (Story) => {
      const style = document.createElement('style');
      style.textContent = `
        .Column__segment {
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
    columnPc: '1',
    columnSp: '1',
    slots: {
      default: `<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Column columnPc="1" columnSp="1">
          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </Column>`,
      },
    },
  },
};

export const Column2: Story = {
  args: {
    columnPc: '2',
    columnSp: '1',
    slots: {
      default: `<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Column columnPc="2" columnSp="1">
          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </Column>`,
      },
    },
  },
};

export const Column3: Story = {
  args: {
    columnPc: '3',
    columnSp: '2',
    slots: {
      default: `<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Column columnPc="3" columnSp="2">
          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </Column>`,
      },
    },
  },
};

export const Column4: Story = {
  args: {
    columnPc: '4',
    columnSp: '2',
    slots: {
      default: `<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>

<div class="Column__segment">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
</div>`,
    },
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Column columnPc="4" columnSp="2">
          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>

          <div class="Column__segment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </Column>`,
      },
    },
  },
};
