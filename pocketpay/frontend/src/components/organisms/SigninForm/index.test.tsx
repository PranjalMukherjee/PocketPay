import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignIn from '.';

describe('SignIn Component', () => {
  it('renders the component', () => {
    render(<SignIn />);
    const welcomeText = screen.getByText('Welcome Back');
    expect(welcomeText).toBeInTheDocument();
  });

  it('handles email and password input changes', async () => {
    render(<SignIn />);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(emailInput).toHaveValue('test@example.com');
      expect(passwordInput).toHaveValue('password123');
    });
  });

  it('validates email input', async () => {
    render(<SignIn />);

    const emailInput = screen.getByLabelText('Email Address');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  });

  it('validates password input', async () => {
    render(<SignIn />);

    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(passwordInput, { target: { value: 'short' } });
  });

  it('handles password visibility toggle', async () => {
    render(<SignIn />);

    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByLabelText('toggle password visibility');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(passwordInput).toHaveAttribute('type', 'text');
    });
  });

  it('handles form submission', async () => {
    const handleSubmit = jest.fn();
    render(<SignIn handleLogIn={handleSubmit} />);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByTestId('loginButton');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
  });
});
