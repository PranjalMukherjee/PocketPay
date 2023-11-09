import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareTrackingModal from '.';

describe('ShareTrackingModal', () => {
  it('should render the component with correct text', () => {
    render(<ShareTrackingModal />);
    expect(screen.getByText('Share tracking link')).toBeInTheDocument();
    expect(
      screen.getByText('Share the link above, and they can securely track this transfer.')
    ).toBeInTheDocument();
  });
});
