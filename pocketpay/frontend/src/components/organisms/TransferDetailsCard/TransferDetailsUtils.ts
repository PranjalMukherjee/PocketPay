import Button from '../../atoms/Button';
import Typography from '@mui/material/Typography';
import { Box, SxProps, styled } from '@mui/material';
import Info from '../../../../public/assets/images/info.svg';
import Rate from '../../../../public/assets/images/downwardarrow.svg';
import Europe from '../../../../public/assets/icons/europeFlag.svg';
import Andorra from '../../../../public/assets/icons/andorra.svg';
import Flag from '../../../../public/assets/icons/uk.svg';
import India from '../../../../public/assets/icons/india.svg';
import theme from '../../../theme/index';
import React from 'react';
export const TRANSFER_DETAILS = {
  title: 'How much would you like to transfer?',
  labels: ['You send', 'Receipient gets'],
  content: [
    {
      leftContent: 'Low cost transfer fee:',
      rightContent: 'From 3.69GBP',
      src: Info,
      alt: 'info'
    },
    {
      leftContent: 'Guaranteed rate (24 hrs):',
      rightContent: '1.20048',
      src: Rate,
      alt: 'rate'
    },
    {
      leftContent: 'Total amount:',
      rightContent: '996.31 GBP',
      src: Info,
      alt: 'info'
    }
  ],
  modal: {
    text: 'We’ll apply this rate if we receive your money today.',
    label: 'OK'
  },
  downArrowAlt: 'downArrow',
  dropdownLabel: 'Select '
};

export const iconsTypo = [
  { flag: India, code: 'INR' },
  { flag: Flag, code: 'GBP' },
  { flag: Europe, code: 'AUD' },
  { flag: Andorra, code: 'EUR' }
];
export const options = ['India', 'United Kingdom', 'Austria', 'Andorra'];
export const countryCodeObj: { [key: string]: { flag: string; code: string } } = {
  india: { flag: India, code: 'INR' },
  unitedkingdom: { flag: Flag, code: 'GBP' },
  austria: { flag: Europe, code: 'AUD' },
  andorra: { flag: Andorra, code: 'EUR' }
};
export const countryInitialState = [iconsTypo[1], iconsTypo[2]];
export const removeSpacesAndConvertToLower = (str: string) => {
  return str.replace(/\s/g, '').toLowerCase();
};
export const StyledTypography = styled(Typography)`
  &.MuiTypography-body1 {
    width: 383px;
    height: 64px;
    margin-top: 40px;
    margin-left: 40px;
  }
`;
export const StyledButton = styled(Button)`
  &.MuiButton-root {
    background: primary;
    width: 135px;
    height: 56px;
    border-radius: 56px;
    margin-top: 151px;
    margin-left: 214px;
  }
`;
export const Boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '564px',
  height: '335px',
  bgcolor: 'background.paper',
  borderRadius: '16px'
};
export const Wrapper = styled(Box)(`
    width:37.75vw;
    min-width:420px;
    max-width:516px;
    & .inputs{
      & .MuiInputBase-root.MuiOutlinedInput-root{
        margin-bottom:28px;
      }
    }
    & .content-item{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      margin-top:20px;
    }
    & .ruler{
      width:20px;
      flex-grow:1;
      height:1px;
      background:${theme.palette.Greys.stroke};
      margin:0 3px;
    }
    & .MuiButton-root{
      min-width:0;
    }
    & .dropdown-icon{
      cursor:pointer;
      display:flex;
      align-items:center;
    }
    & .MuiTypography-root.MuiTypography-body1{
      width:32px;
      display:flex;
      justify-content:center;
    }
    & input[type="number"] {
      -moz-appearance: textfield;
    }

    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .confirm-button{
      width:135px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structuralColors.buttonHover};
    }
    .confirm-btn-container{
      position:absolute;
      left:70%;
      top:89.6%;
    }
    .disable{
      opacity:0.3;
      
    }
    .disable-click{
      pointer-events:none !important;
    }
`);

export const InnerWrapper = styled(Box)(`
margin-top:52px;
height:315px;
`);
export const MOCK_TRANSACTION = {
  id: 1,
  amount: 200,
  amountConverted: 114.68,
  fromCurrency: 'GBP',
  toCurrency: 'EUR',
  recipient: {
    email: 'mario.gabriel@gmail.com',
    account: '123456885865',
    firstName: 'Mario',
    lastName: 'Gabriel',
    bankIFSCCode: 'ABFJ12929G',
    bankAccountType: 'Checking'
  },
  status: 'sending'
};
export interface Recipient {
  email: string;
  account: string;
  firstName: string;
  lastName: string;
  bankIFSCCode: string;
  bankAccountType: string;
}
export interface Transaction {
  id?: number;
  amount: number;
  amountConverted: number;
  fromCurrency: string;
  toCurrency: string;
  recipient: Recipient;
  status: string;
  purpose?: string;
}
export interface Business {
  name: string;
  registerNumber: string;
  registerAddress: string;
  senderId: number;
  category: string;
  subCategory: string;
  sizeOfBusiness: string;
}
export interface UserDetails {
  id?: number;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  pincode: number;
  email: string;
  dateOfBirth: string;
  city: string;
  phoneNumber: string;
  country: string;
}
export interface ContextValue {
  transaction: Transaction;
  setTransaction: React.Dispatch<React.SetStateAction<Transaction>>;
  user: UserDetails;
  setUser: React.Dispatch<React.SetStateAction<UserDetails>>;
  currentUser: UserDetails;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserDetails>>;
  business: Business;
  setBusiness: React.Dispatch<React.SetStateAction<Business>>;
}
export const paperDropdownSxProps: SxProps = {
  maxHeight: "460px",
  overflow: "auto",
  boxShadow: "none",
  border: `1px solid ${theme.palette.grey[100]}`,
  borderTop: "none",
  borderRadius: "0 0 8px 8px",
  [`& .MuiList-root`]: {
    padding: 0,
    [`& .MuiMenuItem-root`]: {
      padding: "16px 18px",
    },
  },
};
export const amountCardProps = {
  fee: 3.69,
  rate: 1.20048,
  totalAmount: 996.31,
};
export const amountCardHeader = "How much would you like to transfer?";
export const countriesDropdownList = [
  {
    icon: Andorra,
    value: "Andorra",
    code: "EUR",
    extraAmount: 1.15,
  },
  {
    icon: Flag,
    value: "United Kingdom",
    code: "GBP",
    extraAmount: 1.14,
  },
  {
    icon: Europe,
    value: "Austria",
    code: "AUD",
    extraAmount: 2.14,
  },
  {
    icon: India,
    value: "India",
    code: "INR",
    extraAmount: 3.15,
  },
];
export const cancelPopUpValues = {
  text1: "Are you sure ?",
  text2: "You want to cancel this transfer",
  ButtonYes: "Yes",
  ButtonNo: "No",
  sendTransferText: "We’ll apply this rate if we receive your money today.",
  ButtonOk: "OK",
};