import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProfileMenu from './index'
import { USER_MENU } from '../../../utils/constants'
import { useAuth0 } from '@auth0/auth0-react'
jest.mock("@auth0/auth0-react")

describe('Testing ProfileMenu', () => {
  const logoutFn = jest.fn()
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: logoutFn
    })
  })
  test('ProfileMenu should be closed when isOpen state is set to false', () => {
    render(<ProfileMenu isOpen={false} userName={USER_MENU}/>)
    const testingProfileMenu = screen.queryByTestId('profile-menu')
    expect(testingProfileMenu).toBeNull()
  })

  test('ProfileMenu should be opened when isOpen state is set to true', () => {
    render(<ProfileMenu isOpen userName={USER_MENU}/>)
    const testingProfileMenu = screen.getByTestId('profile-menu')
    expect(testingProfileMenu).toBeDefined()
  })

  test('should call the handleLogOut function when logout option is clicked', () => {

    render(<ProfileMenu isOpen userName={USER_MENU} handleLogOut={logoutFn}/>)
    const testingProfileMenu = screen.getByTestId('profile-menu')
    expect(testingProfileMenu).toBeDefined()

    const testingOnClick = screen.getByTestId('Logout-Option')
    fireEvent.click(testingOnClick)
    expect(logoutFn).toHaveBeenCalled();
  })
})
