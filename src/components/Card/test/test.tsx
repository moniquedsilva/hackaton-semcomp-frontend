import { render, screen } from '@testing-library/react';

import { Card } from '..';

describe('Component | Card', () => {
  it('should render the Card', () => {
    render(<Card />);

    expect(screen.getByRole('heading', { name: /Card/i })).toBeInTheDocument();
  });
});
