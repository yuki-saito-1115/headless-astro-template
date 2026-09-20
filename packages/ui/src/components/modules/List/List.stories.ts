import type { Meta, StoryObj } from '@storybook/react';
import { COMMON_TYPE_COLUMN_VALUES } from '@types/CommonType';
import List from './List.astro';

const meta = {
  component: List,
  tags: ['autodocs'],
  title: 'Components/List/List',
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
    docs: {
      description: {
        component: `
* __このコンポーネントはmicroCMSのリッチエディタの [リスト](https://document.microcms.io/manual/rich-editor-usage#h4334dcd5e5) と関連しています。__
`,
      },
    },
  },
  argTypes: {
    slots: {
      control: 'object',
      description: `microCMSのリッチエディタの [リスト](https://document.microcms.io/manual/rich-editor-usage#h4334dcd5e5) のHTML構造のみを許容します。`,
      table: {
        category: 'Slots',
        type: { summary: 'HTMLUListElement' },
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
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const Nested: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul></li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul></li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
  },
};

export const Column2: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
    columnPc: '2',
    columnSp: '2',
  },
};

export const Column3: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
    columnPc: '3',
    columnSp: '2',
  },
};

export const Column4: Story = {
  args: {
    slots: {
      default: `<ul>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
<li>Lorem ipsum dolor sit amet</li>
</ul>`,
    },
    columnPc: '4',
    columnSp: '2',
  },
};
