import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge Component', () => {
  it('renders the Badge component', () => {
    render(<Badge text="Test Badge" />);
    const badgeElement = screen.getByText(/Test Badge/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<Badge text="Correct Text" />);
    const badgeElement = screen.getByText(/Correct Text/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    const customClass = 'custom-badge';
    render(
      <Badge
        text="Styled Badge"
        className={customClass}
      />,
    );
    const badgeElement = screen.getByText(/Styled Badge/i);
    expect(badgeElement).toHaveClass(customClass);
  });
});
