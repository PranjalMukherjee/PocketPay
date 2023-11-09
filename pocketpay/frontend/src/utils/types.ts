import { PopoverOrigin } from '@mui/material';

type labels = {
  leftLable: string;
  rightLable: string;
};
export interface VerticalStepperProps {
  steps: labels[];
  activeStep: number;
}

export type IDropdownDetails = {
  image?: string;
  name: string;
  currency?: string;
  value?: string;
};

export interface IDropdownProps {
  placeholder: string;
  data: IDropdownDetails[];
  currencyData?: IDropdownDetails[];
  isCurrency: boolean;
  label: string;
  isLabelText: boolean;
  handleValue?: (event: number) => void;
  anchorOrigin?: PopoverOrigin;
  anchorEl?: Element;
  defaultValue?: any;
  onChange?: (event: any) => void;
  isCard?: boolean;
}
export type BusinessDetails = {
  id: number;
  registrationNumber: string;
  name: string;
  role: string;
};

export interface DropdownInputfieldProps {
  placeholder: string;
  isCurrency: boolean;
  mobileNumber?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleValue?: (event: number) => void;
  defaultValue?: number;
}
export interface BusinessDetailsInterface {
  name: string | undefined;
  registrationNo: string | number;
  address: string;
  businessCategory: string | undefined;
  subCategory: string;
  businessSize: string;
  userId: number;
}
export interface UserInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: {
    homeAddress: string;
    city: string;
    postalCode: string;
  };
  email: string;
  password: string;
  accountType: string;
  country: string;
  phoneNumber: string;
}

export interface TradeAddressInterface {
  address: string;
  businessId: number;
}
export type FormFields = {
  email: string;
  accountNo: string;
  firstName: string;
  lastName: string;
  ifscCode: string;
  accountType: string;
  isValidGmail: boolean;
  accountNoError: boolean;
  firstNameError: boolean;
  lastNameError: boolean;
  ifscCodeError: boolean;
};
export interface InputFieldData {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: boolean;
  helperText: string;
}

export interface IMobileVerficationProps {
  handleChange: () => void;
}

export type SelectingCategory = {
  icon: string;
  name: string;
  value?: string;
};

export interface AccountTypeCardProps {
  title: string;
  subtitle: string;
  data: SelectingCategory[];
  handleSendMoney?: () => void;
  handleAccountSetup?: () => void;
}

export interface ISelectCountryProp {
  handleSelectCountry: () => void;
}

export interface IPasswordChangeProp {
  handleContinuePassword: () => void;
}

export interface ITradeAddressProps {
  handleConfirm?: () => void;
}

export interface IBusinessConfirmationProps {
  businessSelectedName?: string;
  onClick?: (event: any) => void;
}

export interface ISigninTemplateProps {
  dataContainer: React.ReactNode;
}

export interface IVerifyAccountProps {
  onClick?: (event: any) => void;
}

export interface IUserDetailsProps {
  handleUserDetail?: () => void;
}
export interface BusinessUserInterface {
  firstName: string;
  lastName: string;
  dob: Date | null;
  country: string;
  businessUserType: "DIRECTOR" | "OWNER";
  businessId: number;
}

export interface TransactionInterface {
  id?: number;
  senderAmount: number;
  senderCurrency: string;
  receiverCurrency: string;
  receiverAmount: number;
  date: Date;
  recipient: {
    email: string;
    accountNo: string;
    firstName: string;
    lastName: string;
    ifsc: string;
    accountType: string;
  };
  purpose: string;
  status: "SENT" | "SENDING" | "CANCELLED";
  transferNumber: string;
  paymentId: number;
}
export interface BusinessDetailsInterface {
  name: string | undefined;
  registrationNo: string | number;
  address: string;
  businessCategory: string | undefined;
  subCategory: string;
  businessSize: string;
  userId: number;
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: {
    homeAddress: string;
    city: string;
    postalCode: string;
  };
  email: string;
  password: string;
  accountType: string;
  country: string;
  phoneNumber: string;
}
export interface BankCardInterface {
  id: number;
  name: string;
  cardNumber: string;
  expiryDate: string;
}
export interface BankInterface {
  id: number;
  bankName: string;
  accountNo: string;
  code: string;
}
export type BusinessFields = {
  firstName: string;
  lastName: string;
  dateOfBirth: null | string;
  countryOfResidence: string;
}[];
export interface UserDetailsType {
  firstName: string;
  lastName: string;
  dob: any;
  country: string;
  address: string;
  city: string;
  postalCode: string;
  addressError?: boolean;
  firstNameError?: boolean;
  lastNameError?: boolean;
  cityError?: boolean;
  postalCodeError?: boolean;
}
export interface PaymentInterface {
  id: number;
  paymentMode: "BANK" | "CARD";
  debitCardPayment: BankCardInterface;
  bankPayment: BankInterface;
}
