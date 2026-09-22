import { COMMON_TYPE_ICON_SPRITE_VALUES } from '@packages/content/types/CommonType';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon.astro';

const meta = {
  component: Icon,
  tags: ['autodocs'],
  title: 'Components/Media/Icon',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはMarkdown実装やリッチエディタ上では利用できません。__
* このコンポーネントは原則として単品での利用を想定していません。
`,
      },
    },
  },
  argTypes: {
    sprite: {
      control: 'select',
      options: [...COMMON_TYPE_ICON_SPRITE_VALUES],
      description: 'SVGスプライトの `id` 属性値を指定します。',
      table: {
        category: 'Props',
        type: {
          summary: `COMMON_TYPE_ICON_SPRITE_VALUES`,
        },
        defaultValue: { summary: '' },
      },
    },

    lang: {
      control: 'radio',
      options: ['ja', 'en', undefined],
      description: `\`svg\` 要素の中の \`title\` 要素に、日本語を使用するか英語を使用するかを選択できます。`,
      table: {
        category: 'Props',
        type: { summary: 'ja | en | undefined' },
        defaultValue: { summary: 'ja' },
      },
    },

    label: {
      control: 'text',
      description: `予め設定された \`title\` 要素の内容を上書きしたいときにこの値を設定してください。`,
      table: {
        category: 'Props',
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
    sprite: 'download',
  },
};

export const FileExcel: Story = {
  args: {
    sprite: 'file-excel',
  },
};

export const FilePdf: Story = {
  args: {
    sprite: 'file-pdf',
  },
};
