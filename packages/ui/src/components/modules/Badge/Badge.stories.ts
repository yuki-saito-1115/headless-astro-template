import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge.astro';

const meta = {
  component: Badge,
  tags: ['autodocs'],
  title: 'Components/Badge/Badge',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
* このコンポーネントは原則として単品での利用を想定していません。\`BadgeList\` コンポーネントを使用してください。
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: `テキストノード以外の使用を禁止します。`,
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    theme: {
      control: 'radio',
      options: [undefined, 'caution', 'warning'],
      description: `配色を設定できます。<br />セマンティクスに変化はありません。`,
      table: {
        category: 'Props',
        type: { summary: 'caution | warning | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    shape: {
      control: 'radio',
      options: [undefined, 'rounded', 'pill'],
      description: `角丸や楕円の形状を設定できます。<br />セマンティクスに変化はありません。`,
      table: {
        category: 'Props',
        type: { summary: 'rounded | pill | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    outline: {
      control: 'boolean',
      description: `塗りと線の配色を逆転します。<br />セマンティクスに変化はありません。`,
      table: {
        category: 'Props',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: 'text',
      description: `リンク先を設定できます。<br>値を指定すると \`span\` 要素から \`a\` 要素に変わります。`,
      table: {
        category: 'HTML Attributes',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Lorem ipsum',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" />`,
      },
    },
  },
};

export const Link: Story = {
  args: {
    label: 'Lorem ipsum',
    href: 'DUMMY_LINK',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" />`,
      },
    },
  },
};

export const Outline: Story = {
  args: {
    label: 'Lorem ipsum',
    outline: true,
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" outline />`,
      },
    },
  },
};

export const ThemeEmphasis: Story = {
  args: {
    label: 'Lorem ipsum',
    theme: 'caution',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" theme="caution" />`,
      },
    },
  },
};

export const ThemeWarning: Story = {
  args: {
    label: 'Lorem ipsum',
    theme: 'warning',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" theme="warning" />`,
      },
    },
  },
};

export const ShapeRounded: Story = {
  args: {
    label: 'Lorem ipsum',
    shape: 'rounded',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" shape="rounded" />`,
      },
    },
  },
};

export const ShapePill: Story = {
  args: {
    label: 'Lorem ipsum',
    shape: 'pill',
  },
  // TODO: コード出力機能未実装につき手動設定
  parameters: {
    docs: {
      source: {
        code: `// このサンプルコードはControlによる操作から更新されません
        <Badge label="Lorem ipsum" shape="pill" />`,
      },
    },
  },
};
