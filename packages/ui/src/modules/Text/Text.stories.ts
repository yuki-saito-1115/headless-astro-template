import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text.astro';

const meta = {
  component: Text,
  tags: ['autodocs'],
  title: 'Components/Text/Text',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [改行と段落](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[太字](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[斜体](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[下線](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[打ち消し線](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[コード](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [改行と段落](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[太字](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[斜体](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[下線](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[打ち消し線](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491)、[コード](https://document.microcms.io/manual/rich-editor-usage#h860d8e4491) のHTML構造のみを許容します。<br>__ただし、太字は \`strong\` 要素、斜体は \`em\` 要素として扱われるため、見た目だけではなく分脈に影響を及ぼします。使用にはくれぐれも注意してください。__`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLParagraphElement' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const LineBreak: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Aenean commodo ligula eget dolor.<br />Aenean massa.<br />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const Bold: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const Italic: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <em>Aenean commodo ligula eget dolor.</em> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const Underline: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <u>Aenean commodo ligula eget dolor.</u> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const Strikethrough: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <s>Aenean commodo ligula eget dolor.</s> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};

export const Code: Story = {
  args: {
    slots: {
      default:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <code>Aenean commodo ligula eget dolor.</code> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  },
};
