import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(
      <Button
        text="Click me"
        onClick={() => {}}
      />,
    );
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button
        text="Click me"
        onClick={handleClick}
      />,
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct className', () => {
    const { getByText } = render(
      <Button
        text="Click me"
        onClick={() => {}}
        className="custom-class"
      />,
    );
    expect(getByText('Click me')).toHaveClass('custom-class');
  });
});
