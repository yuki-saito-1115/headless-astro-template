import type { Props } from '@packages/ui/modules/FormRadioList/FormRadioList.astro';
import FormRadioList from '@packages/ui/modules/FormRadioList/FormRadioList.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: FormRadioList,
  title: 'Components/Form/FormRadioList',
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    columnPc: '2',
    datas: [
      {
        id: 'radio-list-1',
        name: 'radio-list',
        title: '選択肢1',
      },
      {
        id: 'radio-list-2',
        name: 'radio-list',
        title: '選択肢2',
      },
    ],
  },
};
