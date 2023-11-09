import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PayFromAccountCard } from './index';
import { PayFromAccountCardValues } from '../../../utils/constants';

describe('Pay from account card component', () => {
  it('should render the pay from account card correctly', () => {
    render(<PayFromAccountCard accountType="business" amount="75.38 GBP" />);

    const heading = screen.getByText(PayFromAccountCardValues.heading);
    expect(heading).toBeInTheDocument();
  });
  it('should render the icons correctly', () => {
    render(<PayFromAccountCard accountType="business" amount="75.38 GBP" />);

    const icons = screen.getByAltText('accounts');
    expect(icons).toBeInTheDocument();
  });
  it('should render the button correctly', () => {
    render(<PayFromAccountCard accountType="business" amount="75.38 GBP" />);

    const continueButton = screen.getByRole('button', {
      name: PayFromAccountCardValues.continueButtonName
    });
    fireEvent.click(continueButton);
    expect(continueButton).toBeInTheDocument();
  });
});
