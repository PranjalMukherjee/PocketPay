import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { OnlineBankingCard } from './index';
import { OnlineBankingCardValues } from '../../../utils/constants';

const Data = {
  name: 'Mario Gabriel',
  amount: '100.00 GBP',
  accountNo: '729019188810'
};
describe('Online Banking card component', () => {
  test('should render the online Banking card', () => {
    render(<OnlineBankingCard data={Data} />);
    const component = screen.getByText(OnlineBankingCardValues.heading);
    expect(component).toBeInTheDocument();
  });
  test('should render the button correctly', () => {
    render(<OnlineBankingCard data={Data} />);

    const continueButton = screen.getByRole('button', {
      name: OnlineBankingCardValues.continueButton
    });
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
  });
});
