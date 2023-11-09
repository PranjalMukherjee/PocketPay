import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ReviewTransferDetails } from '.';
import { ACCOUNT_NO_HELPER_TEXT, INVALID_EMAIL } from '../../../utils/constants';
const reviewTransferDetailsProps = {
  amount: 77.74,
  fee: '00.00',
  rate: 1.14,
  reciepientCountryCode: 'EUR',
  sendAmount: 100,
  sendCountryCode: 'GBP',
  name: 'Mario Gabriel',
  email: 'mario.gabriel@gmail.com',
  accountNo: '213637383919',
  accountType: 'Checking',
  shouldArrive: 'April 28th'
};
describe('ReviewTransferDetails', () => {
  it('Should click on the transfer details edit link and click on the cancel and save button', () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
    const editLink = screen.getAllByText('Edit')[0];
    expect(editLink).toBeInTheDocument;
    fireEvent.click(editLink);
    expect(screen.getByTestId('editDetails')).toBeInTheDocument;
    const cancelButton = screen.getByText(/Cancel/i);
    expect(cancelButton).toBeInTheDocument;
    fireEvent.click(cancelButton);
    expect(screen.queryByTestId('editDetails')).not.toBeInTheDocument;
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const amountField = screen.getAllByRole('textbox')[0];
    expect(amountField).toBeInTheDocument;
    fireEvent.change(amountField, { target: { value: '110.00 GBP' } });
    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);
  });
  it('should click on recipient details change link and click on cancel and save button', () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
    const editLink = screen.getByText('Change');
    fireEvent.click(editLink);
    expect(screen.getByTestId('editDetails')).toBeInTheDocument;
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);
    expect(screen.queryByTestId('editDetails')).not.toBeInTheDocument;
    fireEvent.click(screen.getByText('Change'));
    const nameField = screen.getAllByRole('textbox')[0];
    expect(nameField).toBeInTheDocument;
    fireEvent.change(nameField, { target: { value: 'Sai' } });
    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);
  });
  it('should check validations of fields in recipient details', () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
    const editLink = screen.getByText('Change');
    fireEvent.click(editLink);
    const inputFields = screen.getAllByRole('textbox');
    fireEvent.change(inputFields[1], { target: { value: 'email' } });
    fireEvent.change(inputFields[2], { target: { value: 'accountNo' } });
    expect(screen.getByText(ACCOUNT_NO_HELPER_TEXT)).toBeInTheDocument;
  });
});
