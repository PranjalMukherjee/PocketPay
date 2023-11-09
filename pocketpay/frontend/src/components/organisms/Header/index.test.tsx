import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '.';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn()
}));

const logoutMock = jest.fn();
(useAuth0 as jest.Mock).mockReturnValue({
  logout: logoutMock
});

describe('Application Header', () => {
  beforeEach(() => {
    render(<Header username="Ross Gener" />,{ wrapper: Router});
  });
  test('should render the Header', () => {
    const username = screen.getByText('Ross Gener');
    expect(username).toBeInTheDocument();
  });
  test('should render the logout popup successfully', () => {
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);
    expect(screen.getByText('Logout')).toBeInTheDocument();

    fireEvent.click(avatar);
  });
  test('should close the logout popup successfully when clicking on logout', () => {
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);
    expect(screen.getByText('Logout')).toBeInTheDocument();

    const logout = screen.getByText('Logout');
    fireEvent.click(logout);
  });
});
