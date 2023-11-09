import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import CreatePassword from './index'
import { SignUpContextProvider } from "../../../context/CountryContext";

describe('CreatePassword component', () => {
  const handleContinuePassword = jest.fn();
  beforeEach(() => {
    render(<CreatePassword handleContinuePassword={handleContinuePassword}/>,{ wrapper: SignUpContextProvider });
  });

  test('renders CreatePassword component correctly', () => {
    const testingCreatePassword = screen.getByTestId('password-change');
    expect(testingCreatePassword).toBeInTheDocument();
  });

  test('disables continue button for invalid password', () => {
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: '1111' } });
    const continueButton = screen.getByRole('button', { name: 'Continue' });
    expect(continueButton).toBeDisabled();
  });

  it('handles password visibility toggle', async () => {
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByLabelText('toggle password visibility');

    fireEvent.change(passwordInput, { target: { value: '123456789' } });

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(passwordInput).toHaveAttribute('type', 'text');
    });
  });
   
  test('enables continue button for valid password', () => {
    const passwordInput = screen.getByLabelText('Password');
    const continueButton = screen.getByText('Continue');
    fireEvent.change(passwordInput, { target: { value: 'Vamsink@1111' } });
    expect(continueButton).toBeEnabled();
  });
})
