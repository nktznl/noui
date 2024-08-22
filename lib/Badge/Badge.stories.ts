import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    text: 'Default Badge',
  },
};

export const CustomStyledBadge: Story = {
  args: {
    text: 'Custom Styled Badge',
    style: {
      backgroundColor: 'blue',
      color: 'yellow',
    },
  },
};
