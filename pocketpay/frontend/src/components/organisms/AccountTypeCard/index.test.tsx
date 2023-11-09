import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import AccountTypeCard from './index'
import {
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  ACCOUNT_SELECT_DATA,
} from '../../../utils/constants'

const handleSendMoney = jest.fn();
const handleAccountSetup = jest.fn();

describe('Account Type card Component', () => {
  test('renders without crashing', () => {
    render(
        <ThemeProvider theme={theme}>
            <AccountTypeCard
                title={ACCOUNT_SELECT_TITLE}
                subtitle={ACCOUNT_SELECT_VALUE}
                data={ACCOUNT_SELECT_DATA}
            />
        </ThemeProvider>
    )
    const category = screen.getByTestId('category-selection')
    expect(category).toBeInTheDocument()
  })

  it('calls handleSendMoney when the first option is clicked', () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <AccountTypeCard
                title={ACCOUNT_SELECT_TITLE}
                subtitle={ACCOUNT_SELECT_VALUE}
                data={ACCOUNT_SELECT_DATA}
                handleSendMoney={handleSendMoney}
                handleAccountSetup={handleAccountSetup}
            />
        </ThemeProvider>
    );
    fireEvent.click(getByText('Personal account'));
    expect(handleSendMoney).toHaveBeenCalledTimes(1);
    expect(handleAccountSetup).not.toHaveBeenCalled();
  });

  it('calls handleAccountSetup when the second option is clicked', () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <AccountTypeCard
                title={ACCOUNT_SELECT_TITLE}
                subtitle={ACCOUNT_SELECT_VALUE}
                data={ACCOUNT_SELECT_DATA}
                handleSendMoney={handleSendMoney}
                handleAccountSetup={handleAccountSetup}
            />
        </ThemeProvider>
    );
    fireEvent.click(getByText('Business account'));
    expect(handleAccountSetup).toHaveBeenCalledTimes(1);
    expect(handleSendMoney).not.toHaveBeenCalled();
  });
})
