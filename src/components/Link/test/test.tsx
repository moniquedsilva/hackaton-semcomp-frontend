import { render, screen } from '@testing-library/react';

import { Link } from '..';

describe('Component | Link', () => {
  it('should render the Link', () => {
    render(<Link />);

    expect(screen.getByRole('heading', { name: /Link/i })).toBeInTheDocument();
  });
});
