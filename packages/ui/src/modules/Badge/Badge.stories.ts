import Badge from '@packages/ui/modules/Badge/Badge.astro';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Badge,
  tags: ['autodocs'],
  title: 'Components/Badge/Badge',
  argTypes: {
    class: { table: { disable: true } },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Lorem ipsum',
  },
};

export const Link: Story = {
  args: {
    label: 'Lorem ipsum',
    href: 'DUMMY_LINK',
  },
};

export const Outline: Story = {
  args: {
    label: 'Lorem ipsum',
    outline: true,
  },
};

export const ThemeEmphasis: Story = {
  args: {
    label: 'Lorem ipsum',
    theme: 'caution',
  },
};

export const ThemeWarning: Story = {
  args: {
    label: 'Lorem ipsum',
    theme: 'warning',
  },
};

export const ShapeRounded: Story = {
  args: {
    label: 'Lorem ipsum',
    shape: 'rounded',
  },
};

export const ShapePill: Story = {
  args: {
    label: 'Lorem ipsum',
    shape: 'pill',
  },
};
