import { fireEvent, render, screen } from "@testing-library/react";
import SignUpPage from ".";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
jest.mock("@auth0/auth0-react");
describe("Signuppage", () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login,
    });
    render(<SignUpPage />,{ wrapper: Router});
  });

  test("renders with the value", () => {
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "test@gmail.com" } });
    expect(inputField.value).toBe("test@gmail.com");
    const termsButton = screen.getByText("Terms of use");
    const privacyButton = screen.getByText("Privacy Policy");
    expect(termsButton).toBeInTheDocument();
    expect(privacyButton).toBeInTheDocument();
    const b1 = screen.getByText("Log in");
    fireEvent.click(b1);
  });
  test("click on sign in with google", () => {
    const googleButton = screen.getByAltText("Google Icon");
    fireEvent.click(googleButton);
    expect(login).toBeCalled;
  });
  test("clicking on the signup button",()=>{
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "test@gmail.com" } });

    const signInButton = screen.getByRole("button",{name:"Next"});
    expect(signInButton).toBeInTheDocument();
  })
});
