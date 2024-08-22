import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    text: 'Click Me!',
    onClick: () => alert('Button clicked!'),
    className: '',
  } as ButtonProps,
};

export const DisabledButton: Story = {
  args: {
    text: 'Click Me!',
    onClick: () => alert('Button clicked!'),
    className: 'disabled',
  } as ButtonProps,
};
