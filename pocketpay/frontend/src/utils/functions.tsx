import  React, { useState, useCallback, SetStateAction, Dispatch, useContext } from 'react';
import {  
  InputBox, 
  StyledDatePicker, 
  DropdownBox, 
  StyledBox
} from '../utils/styledComponents'
import {
  FIRST_NAME,
  LAST_NAME,
  DOB_LABLE,
  COUNTRY_DROPDOWN_LABEL,
  COUNTRY_DATA,
  TRANSFER_NUMBER
} from '../utils/constants';
import { InputField } from '../components/atoms/TextField';
import DatePickerComponent from '../components/atoms/DatePicker';
import { TransactionBodyType } from '../context/TransactionContext';
import { BusinessUserInterface, TransactionInterface } from './types';
import { TransactionService } from '../services/Transaction';
import { UserBusinessDetailsContext } from '../context/UserBusinessDetailsContext';
import API from '../services/index';
export const isValidPassword = (password: string) => {
  const VALIDPASSWORD = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;
  return VALIDPASSWORD.test(password);
};

export const isValidEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
  return emailPattern.test(email);
};

export const validateAccountNo = (value: string) => {
  const Account_reg = /^\d{12}$/;
  return Account_reg.test(value);
};
export const validateFirstName = (value: string) => {
  const firstName = value;
  return firstName.trim() === '';
};

export const validateLastName = (value: string) => {
  const lastName = value;
  return lastName.trim() === '';
};

export const validateIfsc = (value: string) => {
  const ifscCode = value;
  return ifscCode.trim() === '';
};

export const useHandleTextField = () => {
  const [anchorEl, setAnchorEl] = useState();

  const handleTextField = useCallback(
    (event: any) => setAnchorEl(event?.currentTarget),
    [anchorEl]
  );

  return { anchorEl, handleTextField };
};

export const InputData = (handleFirstName: (event: any) => void) => {
  return (
    <StyledBox>
      <InputBox>
        <InputField
          placeholder={FIRST_NAME}
          label={FIRST_NAME}
          onChange={handleFirstName}
          sx={{ width: '516px' }}
        />
      </InputBox>

      <InputBox>
        <InputField placeholder={LAST_NAME} label={LAST_NAME} sx={{ width: '516px' }} />
      </InputBox>

      <StyledDatePicker>
        <DatePickerComponent label={DOB_LABLE} />
      </StyledDatePicker>

    </StyledBox>
  );
};

export const getFeeDetails = (
  fee: number,
  senderCurrencyType: any,
  amount_to_convert: number,
  currencyExchangeRate: any,
  receiverCurrencyType: any
) => [
  {
    id: 1,
    label: 'Fee:',
    text: `${fee.toFixed(2).padStart(5, '0')} ${senderCurrencyType}`
  },
  {
    id: 2,
    label: 'Amount we’ll convert:',
    text: `${amount_to_convert.toFixed(2).padStart(5, '0')} ${senderCurrencyType}`
  },
  {
    id: 3,
    label: 'Guaranteed rate:',
    text: `1 ${senderCurrencyType} = ${currencyExchangeRate} ${receiverCurrencyType}`
  }
];
export const getRecipientDetails = (receiverData: {
  firstName: any;
  lastName: any;
  email: any;
  accountNo: any;
  accountType: any;
}) => [
  {
    id: 1,
    label: 'Name:',
    text: `${receiverData.firstName} ${receiverData.lastName}`
  },
  {
    id: 2,
    label: 'Email:',
    text: receiverData.email
  },
  {
    id: 3,
    label: 'Account number:',
    text: receiverData.accountNo
  },
  {
    id: 4,
    label: 'Account type:',
    text: receiverData.accountType
  }
];

export const handleCountrySelection = (
  selectedValue: string,
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>,
  setDisable: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setSelectedCountry(selectedValue);
  if (selectedValue) {
    setDisable(false);
  } else {
    setDisable(true);
  }
};
export const handleEdit = (setIsEdit: Dispatch<SetStateAction<boolean>>) => () => {
  setIsEdit(true);
};

export const handleText = (
  setAddress: Dispatch<SetStateAction<string>>,
  
) => (event: React.ChangeEvent<HTMLInputElement>) => {
  

  setAddress(event.target.value);
};


export const handleTradeAddress = (setPopAddress: Dispatch<SetStateAction<string>>) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  setPopAddress(event.target.value);
};

export const handleRadio =
  (setSelectedValue: Dispatch<SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

export const handleSaveTradeAddress =
  (
    setIsEdit: Dispatch<SetStateAction<boolean>>,
    address: string,
    selectedValue: string,
    TRADE_ADDRESS_DATA: string[]
  ) =>
  () => {
    TRADE_ADDRESS_DATA[parseInt(selectedValue)] = address;
    setIsEdit(false);
  };

export const handleCancelTradeAddress = (setIsEdit: Dispatch<SetStateAction<boolean>>) => () => {
  setIsEdit(false);
};

export const handleAddTradeAddress = (setAddressPopUp: Dispatch<SetStateAction<boolean>>) => () => {
  setAddressPopUp(true);
};

export const handleClickTradeAddress =
  (
    TRADE_ADDRESS_DATA: string[],
    popAddress: string,
    setAddressPopUp: Dispatch<SetStateAction<boolean>>
  ) =>
  () => {
    TRADE_ADDRESS_DATA.push(popAddress);
    setAddressPopUp(false);
  };

export const handleSelectOption = (setSelected: Dispatch<SetStateAction<string>>) => 
  (event: any) => {
    setSelected(event.name);
  };

export const handleSubcategorySelection = (setSubcategory: Dispatch<SetStateAction<null>>) => 
  (event: any) => {
    setSubcategory(event.name);
  };

export const handleBusinessSizeSelection = (setBusinessSize: Dispatch<SetStateAction<null>>) => 
  (event: any) => {
    setBusinessSize(event.name);
  };
export const addMinutesToDate = (date: Date, minutesToAdd: number): Date => {
  const result = new Date(date);
  result.setMinutes(date.getMinutes() + minutesToAdd);
  return result;
};
export const addHoursToDate = (date: Date, hoursToAdd: number): Date => {
  const result = new Date(date);
  result.setHours(date.getHours() + hoursToAdd);
  return result;
};
export const formatDate = (date: Date): string => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const targetTime = new Date(date);
  const hours = targetTime.getHours();
  const minutes = targetTime.getMinutes();

  if (date.toDateString() === now.toDateString()) {
    return `Today at ${formatTime(hours, minutes)}`;
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return `Tomorrow at ${formatTime(hours, minutes)}`;
  } else {
    return `${formatFullDate(date)} at ${formatTime(hours, minutes)}`;
  }
};
const formatTime = (hours: number, minutes: number): string => {
  const amOrPm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours || 12;
  const formattedTime = `${hours}:${String(minutes).padStart(2, '0')} ${amOrPm}`;
  return formattedTime;
};
const formatFullDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return date.toLocaleDateString(undefined, options);
};
export const createTransaction = async (
  transaction: TransactionBodyType,
  buisnessId: number
) => {
  const transactionBody: TransactionInterface = {
    senderAmount: transaction.sendAmount,
    senderCurrency: transaction.sendCountryCode,
    receiverCurrency: transaction.recieveCountryCode,
    receiverAmount: Number(
      (transaction.sendAmount * transaction.rate).toFixed(2)
    ),
    date: new Date(),
    recipient: {
      ...transaction.recipientDetails,
      accountType: transaction.recipientDetails.accountType.toUpperCase(),
    },
    purpose: transaction.purpose,
    status: "SENDING",
    transferNumber: TRANSFER_NUMBER,
    paymentId: transaction.paymentId,
  };
  await TransactionService.createTransaction(transactionBody);
  for (const director of transaction.directors) {
    const owner: BusinessUserInterface = {
      businessUserType: "DIRECTOR",
      country: director.countryOfResidence,
      dob: new Date(director.dateOfBirth ?? ""),
      firstName: director.firstName,
      lastName: director.lastName,
      businessId: buisnessId,
    };
    await TransactionService.addBusinessUser(owner);
  }
  for (const stackholder of transaction.stackholders) {
    const owner: BusinessUserInterface = {
      businessUserType: "OWNER",
      country: stackholder.countryOfResidence,
      dob: new Date(stackholder.dateOfBirth ?? ""),
      firstName: stackholder.firstName,
      lastName: stackholder.lastName,
      businessId: buisnessId,
    };
    await TransactionService.addBusinessUser(owner);
  }
};
export const setToken = (token: string) => {
  API.defaults.headers.common = { Authorization: `Bearer ${token}` };
};
export const getUserIdAndToken = async () => {
  const [user_id, token] = await Promise.all([
    new Promise((resolve) => {
      const user_id = localStorage.getItem('userID');
      if (user_id) {
        resolve(user_id);
      }
    }),
    new Promise((resolve) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        resolve(token);
      }
    })
  ]);

  return { user_id, token };
};