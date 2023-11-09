import React from 'react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import { screen, render, fireEvent } from '@testing-library/react'
import PaymentCard, { PaymentCardProps } from './index'

describe('PaymentCard', () => {
  const defaultProps: PaymentCardProps = {
    icon: 'icon-url',
    cardHeader: 'Card Content',
    cardDescription: 'Detail Content 1',
    arrivalDescription: 'Detail Content 2',
    width: '200px',
    height: '200px',
    onChange: jest.fn(),
  }

  it('renders the payment card component with provided props', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <PaymentCard {...defaultProps} />
        </ThemeProvider>
    )

    const paymentCard = getByTestId('payment-card')
    expect(paymentCard).toBeInTheDocument()
  })

  it('calls onClick when the radio button is clicked', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <PaymentCard {...defaultProps} />
        </ThemeProvider>
    )

    const radioButton = getByTestId('radio-button')
    fireEvent.click(radioButton)

    expect(defaultProps.onChange).toHaveBeenCalled()
  })

})
