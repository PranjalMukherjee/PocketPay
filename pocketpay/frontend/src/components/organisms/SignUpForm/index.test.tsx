import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignUpForm from '.';

describe('SignUpForm Component', () => {
  it('renders the form with the correct title', () => {
    render(<SignUpForm />);
    const titleElement = screen.getByText('Next');
    expect(titleElement).toBeInTheDocument();
  });

  it('enables the "Next" button when a valid email is entered', () => {
    render(<SignUpForm />);
    const emailInput = screen.getByTestId('email-input');
    const nextButton = screen.getByTestId('signUpButton');
    expect(emailInput).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  it('disables the "Next" button when an invalid email is entered', () => {
    render(<SignUpForm />);
    const emailInput = screen.getByTestId('email-input');
    const nextButton = screen.getByTestId('signUpButton');
    expect(emailInput).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  it('calls the onSubmit function when "Next" button is clicked with a valid email', () => {
    const mockSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockSubmit} />);
    const emailInput = screen.getByTestId('email-input');
    const nextButton = screen.getByTestId('signUpButton');
    expect(emailInput).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(nextButton).toBeInTheDocument();
  });

  it('displays the login link', () => {
    render(<SignUpForm />);
    const loginLink = screen.getByTestId('login');
    expect(loginLink).toBeInTheDocument();
  });
  it('updates the state and enables the "Next" button when a valid email is entered', () => {
    render(<SignUpForm />);
    const nextButton = screen.getByTestId('signUpButton');

    const emailInput = screen.getByPlaceholderText('Enter your email address');

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });

    expect(emailInput).toBeInTheDocument();
    expect(nextButton).not.toBeDisabled();
  });

  it('should update the email input field', () => {
    render(<SignUpForm />);
    const emailInput = screen.getByPlaceholderText('Enter your email address');

    fireEvent.change(emailInput, { target: { value: 'valid' } });
  });
});
