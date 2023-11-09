import React from 'react';
import InitiateTransactionPage from '.';
import { render } from '../../testSetup';
import { fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/index';

import { SEND_MONEY_TITLE } from '../../utils/constants';
describe('InitiateTransactionPage', () => {
  it('should render the page without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <InitiateTransactionPage />
      </ThemeProvider>
    );

    const sendMoneyCard = screen.getByText('Send Money');
    expect(sendMoneyCard).toBeInTheDocument();
    fireEvent.click(sendMoneyCard);
    const title = screen.getByText(SEND_MONEY_TITLE);
    expect(title).toBeInTheDocument();
  });
  it('should render signup page upon clicking the finish setup card ', () => {
    render(
      <ThemeProvider theme={theme}>
        <InitiateTransactionPage />
      </ThemeProvider>
    );

    const finishSetup = screen.getByText('Finish Account Setup');
    fireEvent.click(finishSetup);
    expect(finishSetup).toBeInTheDocument();
  });
  it('should render home page upon clicking on the back button ', () => {
    render(
      <ThemeProvider theme={theme}>
        <InitiateTransactionPage />
      </ThemeProvider>
    );

    const backButton = screen.getByAltText('arrowRight');
    fireEvent.click(backButton);
    expect(backButton).toBeInTheDocument();
  });
});
