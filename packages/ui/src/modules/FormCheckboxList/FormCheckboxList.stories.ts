import type { Props } from '@packages/ui/modules/FormCheckboxList/FormCheckboxList.astro';
import FormCheckboxList from '@packages/ui/modules/FormCheckboxList/FormCheckboxList.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormCheckboxList,
  tags: ['autodocs'],
  title: 'Components/Form/FormCheckboxList',
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    columnPc: '2',
    datas: [
      {
        id: 'checkbox-list-1',
        name: 'checkbox-list',
        title: '選択肢1',
      },
      {
        id: 'checkbox-list-2',
        name: 'checkbox-list',
        title: '選択肢2',
      },
    ],
  },
};
