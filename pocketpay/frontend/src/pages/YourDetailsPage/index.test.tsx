import React from 'react';
import { UserDetailsPage } from '.';
import { render } from '../../testSetup';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import axios from "axios"
jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;
const mockUserData = {
  firstName: 'Pranjal',
  lastName: 'Mukherjee',
  dateOfBirth: '29-12-2000',
  address: {
    homeAddress: '123',
    city: 'rampur',
    postalCode: '2312'
  },
  email: 'h@gmail.com',
  password: '12@pr',
  accountType: 'saving',
  country: 'India',
  phoneNumber: '3423423423'
};
const mockBusinessData = {
  name: 'gregeg',
  registrationNo: 'gregegre',
  address: 'erhthrs',
  businessCategory: 'rgergrv',
  subCategory: 'gvervregv',
  businessSize: 'heatbtbsd',
  userId: 212
};

jest.mock("../../services/User", ()=>({
    createSignUpDetails: jest.fn((mockUserData) => {
        if(mockUserData){
            return Promise.resolve({data : {id: "mockUserId"}})
        }
        else{
            return Promise.reject(new Error("Invalid"))
        }
    }),
}))

test('enters the value to input fields ,dropdown,calendar input', () => {
  render(<UserDetailsPage />);
  const fName = screen.getByPlaceholderText(/First name/i) as HTMLInputElement;
  fireEvent.change(fName, { target: { value: 'pranjal' } });
  expect(fName.value).toBe('pranjal');
  fireEvent.change(fName, { target: { value: '' } });
  expect(fName.value).toBe('');
  const lName = screen.getByPlaceholderText(/Last name/i) as HTMLInputElement;
  fireEvent.change(lName, { target: { value: 'pranjal' } });
  expect(lName.value).toBe('pranjal');
  fireEvent.change(lName, { target: { value: '' } });
  expect(lName.value).toBe('');
  axiosMock.post.mockResolvedValue({ data: { id: 'mockUserId' } });
});
