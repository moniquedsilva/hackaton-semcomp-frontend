import { render, screen } from '@testing-library/react';

import { Sidebar } from '..';

describe('Component | Sidebar', () => {
  it('should render the Sidebar', () => {
    render(<Sidebar />);

    expect(screen.getByRole('heading', { name: /Sidebar/i })).toBeInTheDocument();
  });
});
