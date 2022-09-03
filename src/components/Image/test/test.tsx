import { render, screen } from '@testing-library/react';

import { Image } from '..';

describe('Component | Image', () => {
  it('should render the Image', () => {
    render(<Image />);

    expect(screen.getByRole('heading', { name: /Image/i })).toBeInTheDocument();
  });
});
