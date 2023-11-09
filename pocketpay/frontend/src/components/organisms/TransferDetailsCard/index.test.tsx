import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TransferDetailsCard } from '.';
import { amountCardProps, cancelPopUpValues } from './TransferDetailsUtils';
import { TransactionContextProvider } from '../../../context/TransactionContext';
describe('TransferDetailsCard', () => {
  beforeEach(() => {
    render(<TransferDetailsCard {...amountCardProps} />, {
      wrapper: TransactionContextProvider
    });
  });
  test('should renders the component correctly', () => {
    expect(screen.getByTestId('amountCard')).toBeInTheDocument();
  });
  test('should change the country on send money and change the value and click on continue button', () => {
    const sendInput = screen.getAllByRole('textbox')[0];
    fireEvent.change(sendInput, { target: { value: 'send' } });
    fireEvent.change(sendInput, { target: { value: 100 } });
    const sendButton = screen.getAllByAltText('expandIcon')[0];
    fireEvent.click(sendButton);
    const indiaOption = screen.getByText(/Austria/i);
    expect(indiaOption).toBeInTheDocument;
    fireEvent.click(indiaOption);
    const recepientButton = screen.getAllByAltText('expandIcon')[1];
    fireEvent.click(recepientButton);
    const indiaOption1 = screen.getByText(/India/i);
    expect(indiaOption1).toBeInTheDocument;
    fireEvent.click(indiaOption1);
    fireEvent.click(screen.getByText(/Continue/i));
  });
  test('should click on rate button and open modal', () => {
    fireEvent.click(screen.getByAltText('sendAmountIcon'));
    expect(screen.getByText(cancelPopUpValues.sendTransferText)).toBeInTheDocument;
  });
});
