import * as React from 'react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import { fireEvent,  screen } from '@testing-library/react'
import TradeAddress from './index'
import { render } from '../../../testSetup'

describe('Trade Address Component', () => {

  it('should render TradeAddress component', () => {
    render(
      <ThemeProvider theme={theme}>
        <TradeAddress handleConfirm={() => {}} />
      </ThemeProvider>
      )
    expect(screen.getByTestId('trade-address')).toBeInTheDocument();
  });

  it('should open the address popup when add trade address button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <TradeAddress handleConfirm={() => {}} />
      </ThemeProvider>
      )
    const addTradeAddressButton = screen.getByRole('button', { name: "Add trading address" });
    fireEvent.click(addTradeAddressButton);
    expect(screen.getByTestId('addressPopup')).toBeInTheDocument();
  });

  it('should call handleConfirm when the confirm button is clicked', () => {
    const handleConfirmMock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <TradeAddress handleConfirm={handleConfirmMock} />
      </ThemeProvider>
      )
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(handleConfirmMock).toHaveBeenCalled();
  });

  it('enables isEdit state after clicking the Edit link', () => {
    render(
      <ThemeProvider theme={theme}>
        <TradeAddress handleConfirm={() => {}} />
      </ThemeProvider>
      )

    const editLink = screen.getByText('Edit');
    fireEvent.click(editLink);

    const textArea = screen.getByTestId('textArea');
    expect(textArea).toBeInTheDocument();
  });

})
