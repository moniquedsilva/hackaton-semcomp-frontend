import { render, screen } from '@testing-library/react';

import { Input } from '..';

describe('Component | Input', () => {
  it('should render the Input', () => {
    render(<Input />);

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument();
  });
});
