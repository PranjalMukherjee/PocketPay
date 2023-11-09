import React from "react";
import {  screen, fireEvent, within } from "@testing-library/react";
import { ThemeProvider } from "@mui/material"
import theme from '../../../src/theme/index'
import SignUpDetailsPage from ".";
import { render } from "../../testSetup";

describe("SignUpDetailsPage component", () => {
  it("renders the AccountType component initially", () => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpDetailsPage />
      </ThemeProvider>
    );

    const card = screen.getByText("Business account");
    expect(card).toBeInTheDocument();
    fireEvent.click(card);

    const divElementToClick = screen.getByRole("combobox", {
      name: "Select your country",
    });
    fireEvent.click(divElementToClick);

    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'A' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })

    const continueButt = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButt);

    const inputField = screen.getByDisplayValue('+44');
    const continueButtonPh = screen.getByText('Continue');
    fireEvent.change(inputField, { target: { value: '+44 9959592603' } });
    fireEvent.click(continueButtonPh);

    const notReceivedLink = screen.getByTestId("notReceived");
    fireEvent.click(notReceivedLink);
    fireEvent.click(screen.getByText("Use a different phone number"));

    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton);

    const otpInput = screen.getByPlaceholderText("Enter code here");
    fireEvent.change(otpInput, { target: { value: "123456" } });

    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    const passwordInput = screen.getByPlaceholderText(
      "Enter your password"
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    expect(passwordInput.value).toBe("Password@123");
    const continueButtonClick = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(continueButtonClick);

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
    fireEvent.click(backButton);
  });
  it("click on back button", () => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpDetailsPage />
      </ThemeProvider>
    );
    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
  });
  it("rendering two account cards",()=>{
    render(
      <ThemeProvider theme={theme}>
        <SignUpDetailsPage />
      </ThemeProvider>
    );

    const card = screen.getByText("Personal account");
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
  })
});
