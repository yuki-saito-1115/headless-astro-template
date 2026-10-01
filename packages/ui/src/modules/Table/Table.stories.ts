import type { StoryArgs } from '@packages/content/types/Storybook';
import type { Props } from '@packages/ui/modules/Table/Table.astro';
import Table from '@packages/ui/modules/Table/Table.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table/Table',
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

export const RowHeadings: Story = {
  args: {
    slots: {
      default: `<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <th>テキスト</th>
      <th>テキスト</th>
    </tr>
    <tr>
      <td>テキスト</td>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <td>テキスト</td>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>`,
    },
  },
};

export const ColumnHeadings: Story = {
  args: {
    slots: {
      default: `<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>`,
    },
  },
};

export const BothHeadings: Story = {
  args: {
    slots: {
      default: `<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <th>テキスト</th>
      <th>テキスト</th>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>`,
    },
  },
};

export const Column: Story = {
  args: {
    directSp: 'column',
    slots: {
      default: `<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>`,
    },
  },
};

export const Scroll: Story = {
  args: {
    scrollSp: true,
    scrollPc: true,
    slots: {
      default: `<table>
  <tbody>
    <tr>
      <th>テキスト</th>
      <th>テキスト</th>
      <th>テキスト</th>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
    <tr>
      <th>テキスト</th>
      <td>テキスト</td>
      <td>テキスト</td>
    </tr>
  </tbody>
</table>`,
    },
  },
};
