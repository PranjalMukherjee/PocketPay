import "@testing-library/jest-dom";
import React from "react";
import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import LoginPage from ".";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { addUserLoginDetails } from "../../services/User";
jest.mock("@auth0/auth0-react");
jest.mock('../../services/User', () => ({
  addUserLoginDetails: jest.fn()
}));

describe("Login Page rendering correctly", () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login,
    });
    render(<LoginPage />,{ wrapper: Router});
  });

  test("login component rendering correctly", async () => {
    (addUserLoginDetails as jest.Mock).mockResolvedValue(null);
    const emailInput = screen.getByLabelText('Email Address') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    await waitFor(() => {
      expect(emailInput).toHaveValue('test@example.com');
      expect(passwordInput).toHaveValue('password123');
    });
    const signInButton = screen.getByTestId('loginButton');
     expect(signInButton).toBeInTheDocument();
     fireEvent.click(signInButton);
  });
  test("click on sign in with google", () => {
    const googleButton = screen.getByAltText("Google Icon");
    fireEvent.click(googleButton);
    expect(login).toBeCalled;
  });
  test("clicking on the login button",()=>{
    (addUserLoginDetails as jest.Mock).mockResolvedValue({ data: { token: 'user123' } });
    const emailInput = screen.getByLabelText('Email Address') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "ross.gener@gmail.com" } });

    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });

     const signInButton = screen.getByTestId('loginButton');
     expect(signInButton).toBeInTheDocument();
     fireEvent.click(signInButton);
  })
});
