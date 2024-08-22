import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('renders correctly', () => {
    render(
      <Checkbox
        label="Test Label"
        checked={false}
        onChange={() => {}}
      />,
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = vi.fn();
    render(
      <Checkbox
        label="Test Label"
        checked={false}
        onChange={handleChange}
      />,
    );
    const checkbox = screen.getByLabelText('Test Label');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies className prop correctly', () => {
    const className = 'custom-class';
    render(
      <Checkbox
        label="Test Label"
        checked={false}
        onChange={() => {}}
        className={className}
      />,
    );
    const divElement = screen.getByText('Test Label').closest('div');
    expect(divElement).toHaveClass(className);
  });
});
