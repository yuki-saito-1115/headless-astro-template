import type { Meta, StoryObj } from '@storybook/react';
import { COMMON_TYPE_COLUMN_VALUES } from '@types/CommonType';
import NumberList from './NumberList.astro';

const meta = {
  component: NumberList,
  tags: ['autodocs'],
  title: 'Components/List/NumberList',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [番号付きリスト](https://document.microcms.io/manual/rich-editor-usage#h8baf1c3620) と関連しています。<br>__ただし、\`ol\` 要素として扱われるため、見た目だけではなく分脈に影響を及ぼします。使用にはくれぐれも注意してください。____
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [番号付きリスト](https://document.microcms.io/manual/rich-editor-usage#h8baf1c3620) のHTML構造のみを許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLOListElement' },
        defaultValue: { summary: undefined },
      },
    },
    columnPc: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: `PCサイズでの列数を指定します。<br>__このpropsはリッチエディタでは利用できません。__`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
      },
    },
    columnSp: {
      control: 'select',
      options: [...COMMON_TYPE_COLUMN_VALUES, undefined],
      description: `SPサイズでの列数を指定します。<br>__このpropsはリッチエディタでは利用できません。__`,
      table: {
        category: 'Props',
        type: { summary: 'CommonTypeColumn | undefined' },
        defaultValue: { summary: '1' },
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Nested: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol></li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol></li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
  },
};

export const Column2: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
    columnPc: '2',
    columnSp: '2',
  },
};

export const Column3: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
    columnPc: '3',
    columnSp: '2',
  },
};

export const Column4: Story = {
  args: {
    slots: {
      default: `<ol>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ol>`,
    },
    columnPc: '4',
    columnSp: '2',
  },
};
