import React, { useContext } from 'react';
import theme from '../theme/index';
import andorra from '../../public/assets/icons/andorra.svg';
import unitedkingdom from '../../public/assets/icons/uk.svg';
import austria from '../../public/assets/icons/austria.svg';

import { MenuItemProps } from '../components/molecules/MenuItem';
import HomeIcon from '../../public/assets/icons/nav_home.svg';
import CardIcon from '../../public/assets/icons/nav_card.svg';
import PeopleIcon from '../../public/assets/icons/nav_people.svg';
import TeamIcon from '../../public/assets/icons/nav_team.svg';
import AccountIcon from '../../public/assets/icons/nav_account.svg';
import GiftIcon from '../../public/assets/icons/nav_gift.svg';
import IndiaFlag from '../../public/assets/icons/india.svg';
import USAFlag from '../../public/assets/icons/US.svg';
import GBPFlag from '../../public/assets/icons/GBP.svg';
import AddIcon from '../../public/assets/icons/add.svg';
import { HomeColor } from '../components/organisms/SideNavigation';
import personal from '../../public/assets/icons/personal.svg';
import business from '../../public/assets/icons/business.svg';
import SBI from '../../public/assets/icons/Sbi.svg';
import HDFC from '../../public/assets/icons/hdfc.svg';
import LLoyds from '../../public/assets/icons/lloyd.svg';
import HSBC from '../../public/assets/icons/hsbc.svg';
import AXIS from '../../public/assets/icons/axis.svg';
import OTHER from '../../public/assets/icons/otherBank.svg';
import TypographyComponent from '../components/atoms/Typography';
import { BankCardInterface } from './types';
import SETUP from '../../public/assets/icons/Setup.svg';
import SEND from '../../public/assets/icons/Send.svg';
import Mybusiness from '../../public/assets/icons/MyBusiness.svg';
import Business from '../../public/assets/icons/Business-charity.svg';
import User from '../../public/assets/icons/User-Money.svg';
export const ICON_ALT_TEXT = 'Icon is not found';
export const NOT_FOUND = 'not found image';
export const HEADING_TEXT = 'This is h1 variant text.';
export const BODY_TEXT = 'This is body3 variant text.';
export const CAPTION_TEXT = 'This is caption variant text.';
export const DROPDOWN_OPTIONS = [
  ['India', 'United Kingdom', 'Europe'],
  ['Business', 'Personal', 'rent/utilities']
];
export const PLACEHOLDERS = ['Country of residence'];
export const PAYMENT_CARD_TEXT = 'Debit Card';
export const PAYMENT_PRIMARY_TEXT = 'Send from your Visa or Mastercard.';
export const PAYMENT_SECONDARY_TEXT = 'Should arrive by January 28th.';
export const SECONDARY_BUTTON_TEXT = 'Add trading address';
export const PRIMARY_BUTTON_TEXT = 'Confirm';
export const STEPPER_LABELS = [
  ['Email', 'Account Type', 'Country', '2-factor-authentication', 'Password'],
  ['Your Business', 'Business Activity', 'Your details'],
  ['Amount', 'You', 'Recipient', 'Verification', 'Review', 'Pay']
];
export const RIGHT_ARROW_ALT = 'right arrow is not found';
export const SBI_NAME = 'State bank of India';
export const SELECT_ACCOUNT = 'Select account';
export const AN_EXISTING_ACCOUNT = 'An existing account';
export const NEW_ACCOUNT = 'New account';
export const SELECT_AN_OPTION = 'Select an option';
export const ACCOUNT_ENDING_WITH_4656 = 'Ending in 4656';
export const ACCOUNT_ENDING_WITH_4242 = 'Ending in 4242';
export const CANCEL_TRANSFER_BUTTON = 'Cancel transfer';
export const ACCOUNT_NUMBER_ENDING_WITH_4242 = 'xxxx xxxx 4242';
export const ACCOUNT_NUMBER_ENDING_WITH_4656 = 'xxxx xxxx 4656';
export const ROSS_GENER = 'Ross Gener';

export const WHERE_WOULD_YOU_LIKE_TO_REFUND = 'Where would you like us to refund the money?';
export const DOWN_ARROW_ALT = 'down-arrow';
export const CANCEL_THE_TRANSFER = 'Cancel the transfer';
export const CANCEL_TRANSFER_OPTIONS = [
  {
    id: 1,
    name: ROSS_GENER,
    acctNo: ACCOUNT_ENDING_WITH_4656,
    value: 'option1'
  },
  {
    id: 2,
    name: ROSS_GENER,
    acctNo: ACCOUNT_ENDING_WITH_4242,
    value: 'option2'
  }
];
export const steps = [
  {
    leftLable: 'Today at 6:43 pm',
    rightLable: 'You set up your transfer'
  },
  {
    leftLable: 'Today at 6:44 pm',
    rightLable: 'We received your GBP'
  },
  {
    leftLable: 'Today at 6:50 pm',
    rightLable: 'Your money’s being processed'
  },
  {
    leftLable: 'Tomorrow at 12:00 am',
    rightLable: 'We pay out your EUR'
  },
  {
    leftLable: 'Tomorrow at 6:00 am',
    rightLable: 'George max recieves your EUR'
  }
];
export const DAYS_OF_WEEK = new Map([
  ['Su', 'SUN'],
  ['Mo', 'MON'],
  ['Tu', 'TUE'],
  ['We', 'WED'],
  ['Th', 'THU'],
  ['Fr', 'FRI'],
  ['Sa', 'SAT']
]);
export const dayOfWeekFormatterHandler = (dayOfWeek: string) => DAYS_OF_WEEK.get(dayOfWeek) ?? '';
export const DOB = 'Date of birth';
export const cvvRegex = /^\d{3}$/;
export const CARD_DETAILS = (lastFourDigits: string, expiryDate: string) => [
  { text: 'Last four digit', color: theme.palette.text.mediumEmphasis },
  { text: lastFourDigits.toString(), color: theme.palette.text.highEmphasis },
  { text: 'Expiry date', color: theme.palette.text.mediumEmphasis },
  { text: expiryDate, color: theme.palette.text.highEmphasis }
];
export const SHARE_TRACKING_LINK = 'Share tracking link';
export const SHARE_LINK_ABOVE = 'Share the link above, and they can securely track this transfer.';
export const EMAIL = 'Email';
export const SHARE_TRACKING_LINK_VALUES = [
  { id: 1, label: 'Copy', alt: 'link-img' },
  { id: 2, label: 'Email', alt: 'message-img' }
];
export const MY_BUSINESS = 'My Business';

export const DETAIL_MENU = 'Your details';
export const SETTINGS_MENU = 'Settings';
export const HELP_MENU = 'Help Center';
export const LOG_OUT_MENU = 'Logout';
export const USER_MENU = 'Ross Gener';
export const USER_ID_MENU = 'P44561754';
export const ACCOUNT_NO_HELPER_TEXT = 'Account number length should be equal to 12';
export const INVALID_EMAIL = 'Invalid Email';
export const REVIEW_TRANSFER_DETAILS = 'Review details of your transfer';
export const EMAIL_REGEX = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
export const ACCOUNT_NO_REGEX = /^\d{12}$/;

export const countryCurrency = {
  value: 0
};
export const PURPOSEOFPOCKETPAY = [
  { name: 'Paying rent, utilities or property charges' },
  { name: 'Paying suppliers/contractors/employees' },
  { name: 'Paying for goods or services abroad' },
  { name: 'Paying tax on profit or property' }
];
export const SELECTACCOUNTOPTION = [
  { name: 'Ross Gener', value: 'Ending in 4656' },
  { name: 'Ross Gener', value: 'Ending in 4242' }
];
export const COUNTRYREGISTRATION = [
  { image: andorra, name: 'Andorra', currency: 'EUR', unitValue: 88.31 },
  {
    image: unitedkingdom,
    name: 'United Kingdom',
    currency: 'GBP',
    unitValue: 99.61
  },
  { image: austria, name: 'Austria', currency: 'AUD', unitValue: 88.32 },
  { image: IndiaFlag, name: 'India', currency: 'INR', unitValue: 1 }
];
export const SELECT_UR_COUNTRY = 'Select your country';
export const SELECT_COUNTRY = 'Select country';
export const SELECT_OPTION = 'Select an option';
export const TELL_US = "Tell us what you're using Pocketpay for";
export const SELECT_CURRENCY = 'Select currency';
export const ACCOUNT_OPTION_PLACEHOLDER = 'Select an option';

export const CONTINUE_BTN = 'Continue';
export const FIRST_NAME = 'First name';
export const LAST_NAME = 'Last name';
export const DOB_LABLE = 'Date of birth';
export const BUSINESS_DIRECTORS_TEXT =
  'Please confirm these details from companies house. If anyone’s missing, add them below.';
export const BUSINESS_SHAREHOLDER_TEXT =
  'Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.';
export const BUSINESS_DIRECTORS_LABEL = 'Director';
export const BUSINESS_SHAREHOLDER_LABEL = 'Shareholder';
export const COUNTRY_DROPDOWN_LABEL = 'Country of residence';
export const BUSINESS_DIRECTORS_DETAIL = 'Confirm your business directors';
export const BUSINESS_SHAREHOLDER_DETAIL = 'Confirm your business owners';
export const ADD_DIRECTOR_TEXT = 'Add another director';
export const ADD_SHAREHOLDER_TEXT = 'Add another owner';
export const COUNTRY_DATA = [
  { name: 'Andorra' },
  { name: 'United Kingdom' },
  { name: 'Austria' },
  { name: 'India' }
];
export const NAVITEM_HOME_LABEL = 'Home';
export const NAVITEM_CARDS_LABEL = 'Cards';
export const NAVITEM_RECIPIENTS_LABEL = 'Recipients';
export const NAVITEM_TEAM_LABEL = 'Team';
export const NAVITEM_ACCOUNT_LABEL = 'Account';
export const NAVITEM_INVITE_GIFT_LABEL = 'Invite & earn 150 GBP';
export const NAVITEM_OPEN_BALANCE_LABEL = 'Open a balance';
export const NAVITEM_BALANCE_LABEL = 'Balances';
export const NAVITEM_GBP_LABEL = '1200 GBP';
export const NAVITEM_INDIA_LABEL = '10,000.00 INR';
export const NAVITEM_USD_LABEL = '192.00 USD';
export const NAVITEM_JAR_LABEL = 'Home';
export const NAVITEM_NEW_LABEL = 'New';

export const navItems: MenuItemProps[] = [
  {
    imgSrc: HomeIcon,
    text: NAVITEM_HOME_LABEL,
    imgAlt: 'Home icon',
    style: HomeColor
  },
  {
    imgSrc: CardIcon,
    text: NAVITEM_CARDS_LABEL,
    imgAlt: 'Card Icon'
  },
  {
    imgSrc: PeopleIcon,
    text: NAVITEM_RECIPIENTS_LABEL,
    imgAlt: 'People'
  },
  {
    imgSrc: TeamIcon,
    text: NAVITEM_TEAM_LABEL,
    imgAlt: 'Teams icon'
  },
  {
    imgSrc: AccountIcon,
    text: NAVITEM_ACCOUNT_LABEL,
    imgAlt: 'Account Icon'
  },
  {
    imgSrc: GiftIcon,
    text: NAVITEM_INVITE_GIFT_LABEL,
    imgAlt: 'Gift Icon'
  }
];

export const balanceItems: MenuItemProps[] = [
  {
    imgSrc: IndiaFlag,
    text: NAVITEM_INDIA_LABEL,
    imgAlt: 'India Flag Icon'
  },
  {
    imgSrc: GBPFlag,
    text: NAVITEM_GBP_LABEL,
    imgAlt: 'GBP'
  },
  {
    imgSrc: USAFlag,
    text: NAVITEM_USD_LABEL,
    imgAlt: 'USA flag'
  },
  {
    imgSrc: AddIcon,
    text: NAVITEM_OPEN_BALANCE_LABEL,
    imgAlt: 'Add Icon'
  }
];
export const DROPDOWN_RIGHT = 'You Send';
export const DROPDOWN_RIGHT_VALUE = 'Select currency';
export const DROPDOWN_LEFT = 'Mobile number';
export const DROPDOWN_LEFT_PH = '+44 020 7947 6330';
export const FillRecipientConst = {
  ACCOUNTNUMBER_LABEL: 'Account Number',
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  IFSC_CODE: 'The Indian Financial system code (IFSC)',
  MAIN_TEXT: 'Send to someone',
  EMAIL_PLACEHOLDER: 'Email',
  CHECKBOX_LABEL: 'I know their bank details',
  SUB_TEXT: 'Recipient details',
  DROPDOWN_LABEL: 'Account Type',
  DROPDOWN_PLACEHOLDER: 'Select Account Type',
  DROPDOWN_ITEMS: ['Checking', 'Savings']
};
export const LoginCardValues = {
  heading: 'Welcome back',
  emailLabel: 'Email',
  emailPlaceholder: 'Enter your email',
  emailHelperText: 'Enter a valid email',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Enter your password',
  passwordHelperText:
    'Password must be at least 8 characters long, containing at least one letter, one digit, and one special character (@#$%^&+=)',
  loginButton: 'Log in',
  RememberText: 'Remember me',
  rememberSupportText: 'Trouble logging in?',
  loginHelperText: 'Or, Log in with',
  AccountNumberText: 'Account number should be 12 digits',
  FirstNameErrorText: 'FirstName is required',
  LastNameErrorText: 'LastName is required',
  IfscErrorText: 'IFSC Code is required'
};
export const CONTINUE = 'Continue';

export const ALREADY_HAVE_AN_ACCOUNT = 'Already have an account ? ';
export const BY_REGISTERING = 'By registering, you accept our ';
export const CREATE_ACCOUNT = 'Create your PocketPay account';
export const ENTER_EMAIL = 'Enter your email address';
export const Email_REGEX = '^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$';
export const LOGIN = 'Log in';
export const POLICY = 'Privacy Policy';
export const TERM = ' Terms of use ';
export const NEXT = 'Next';
export const SIGNUPFORM_LOGIN_WITH = 'Or, log in with';
export const CARD_HEADER = [
  'Debit Card',
  'Credit Card',
  'Transfer from your bank account',
  ' SWIFT Transfer'
];
export const CARD_DESCRIPTION = [
  'Send from your Visa or Mastercard.',
  'Transfer the money using bank account.',
  'Send GBP from your bank account outside the UK.'
];
export const ARRIVAL_DESCRIPTION = 'Should arrive by January 28th.';
export const TransferDetailsCardValues = {
  heading1: 'Transfer details',
  heading2: 'Recipient details',
  continueButton: 'Continue to pay',
  cancelTransferButton: 'Cancel this transfer'
};

export const WELCOME_BACK = 'Welcome Back';
export const SIGN_IN = 'Sign In';
export const TROUBLE_LOGIN = 'Trouble logging in?';
export const Options = [
  'Zemoso technologies pvt ltd',
  'Zentech solutions pvt ltd',
  'ZedX Infotech pvt ltd',
  'Zeswe Solutions pvt ltd'
];
export const PURPOSE_OPTIONS = [
  'Paying rent, utilities or property charges',
  'Paying suppliers/contractors/employees',
  'Paying for goods or services abroad',
  'Paying tax on profit or property'
];
export const Trade = 'Sole trader, freelancer or not registered with Companies house?';
export const SearchBussiness = 'Search for your business';

export const MOBILENUMBER_SELECTION = [
  'Verify your phone number with a code',
  'It helps us keep your account secure.',
  'Mobile number'
];
export const SENDING_MONEY_CARD_HEAD = 'Who are you sending money to?';
export const ACCOUNT_SELECT_TITLE = 'What kind of account would you like to open today?';
export const ACCOUNT_SELECT_VALUE = 'You can add another account later on, too.';
export const ACCOUNT_SELECT_DATA = [
  {
    icon: personal,
    name: 'Personal account',
    value: 'Send, spend, and receive around the world for less.'
  },
  {
    icon: business,
    name: 'Business account',
    value: 'Do business or freelance work internationally.'
  }
];
export const SELECT_COUNTRY_DATA = [
  'Your country of registration',
  'Select your country',
  'Country of registration'
];
export const CHOOSE_BANK = 'Choose your bank';
export const CANCEL_TRANSFER = 'Cancel transfer #';
export const BANK_LIST = [
  {
    bankIcon: SBI,
    bank: 'State bank of India'
  },
  { bankIcon: HDFC, bank: 'HDFC' },
  { bankIcon: HSBC, bank: 'HSBC' },
  { bankIcon: AXIS, bank: 'AXIS' },
  {
    bankIcon: LLoyds,
    bank: 'LLOYDS'
  },
  {
    bankIcon: OTHER,
    bank: 'Other bank'
  }
];
export const PASSWORD_PLACEHOLDER = 'Enter your password';
export const YOUR_MONEY_WILL_BE_REFUNDED = 'Your money will be refunded';
export const REFUND_DESCRIPTION =
  'When we receive your money, we’ll give you a refund. Refunds usually take 3-5 working days.';
export const SET_UP_BY = 'Set up by:';
export const TRANSFER_NUMBER = 'Transfer number:';
export const TRANSFER_DIGIT = '#3227627272';
export const ROSS_GENER_YOU = 'Ross Gener (YOU)';
export const PASSWORD_LABLE = 'Password';
export const PASSWORD_DETAIL = 'Create your password';
export const OnlineBankingCardValues = {
  heading: 'Next, go to your Lloyds’s online banking and make a payment',
  subHeading1: 'Our bank details for payments in GBP',
  subHeading2:
    'Below are the bank details for this payment. Please only send the money from an account in your name',
  bankDetails: [
    'Our bank address',
    'PocketPay \n56 Shoreditch High Street \nLondon E16JJ \nUnited Kingdom'
  ],
  endText: (
    <>
      {`You can use your LIoylds `}
      <span
        style={{
          color: theme.palette.primary[500],
          textDecoration: 'underline'
        }}>
        online banking
      </span>
      {` to or mobile app to make your bank transfer to PocketPay`}
    </>
  ),
  continueButton: 'Continue',
  cancelButton: 'Cancel this transfer'
};
export const TRADE_ADDRESS_HEADER = [
  'Confirm trading address',
  'Your trading address is usually the place you work every day. If the business has multiple trading addresses, add as many as possible'
];
export const TRADE_ADDRESS_VALUE = ['Trading addresses', 'Edit', 'Trading address', 'Address'];
export const TRADE_ADDRESS_BUTTONS = ['Add trading address', 'Confirm', 'Cancel', 'Save'];
export const TRADE_ADDRESS_DATA = [
  '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
];
export const CANCEL_BTN = 'Cancel';
export const SAVE_BTN = 'Save';
export const BUZ_DETAIL = 'Business Details';
export const BUZ_NAME = 'Business name';
export const REG_NUM = 'Registration number';
export const REG_ADDR = 'Registration address';
export const BUSINESS_DETAIL = 'Confirm your business details';
export const BUSINESS_DETAIL_SUB =
  'Sole trader, freelancer or not registered with Companies house?';
export const ZENTECH_BUSINESS = 'Zentech Solutions Pvt Ltd';
export const ZENTECH_REGISTRATION_NUMBER = '2020ZEN5367GJ';
export const CONFIRM_BTN = 'Confirm';
export const EDIT_BTN_TEXT = 'Edit';
export const PayFromAccountCardValues = {
  heading: 'Pay from your Lloyds account',
  subText_1: 'You’ll be redirected to Lloyds, where you can securely log in to your own ',
  subText_2: ' account and approve the payment for your ',
  subtext_3: ' transfer.',
  subText2: 'Safe and Secure',
  list: [
    'We’ll use an encrypted end to end connection.',
    'Your bank will not share your login details with PocketPay or anyone else.'
  ],
  continueButtonName: 'Continue to pay',
  payManuallyButton: 'Pay manually'
};
export const confirmDetails = {
  name: 'Zentech Solutions Pvt Ltd',
  regno: '2020ZEN5367GJ',
  address:
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
};
export const MULTI_DROPDOWN_HEADER = 'Help us verify your account faster';
export const MULTI_DROPDOWN_LABEL = 'Without this information we can’t verify your account';
export const CATEGORY_PLACEHOLDER = 'Category';
export const SUBCATEGORY_PLACEHOLDER = 'Subcategory';
export const BUSINESS_SIZE_PLACEHOLDER = 'Size of your business';
export const ACCOUNT_CATEGORY = [
  { name: 'Design, marketing or communication' },
  { name: 'Health, sports or personal care' },
  { name: 'Real estate or construction' },
  { name: 'Education or learning' },
  { name: 'Others' }
];
export const ACCOUNT_SUBCATEGORY = [{ name: 'Real estate sale, purchase and management' }];
export const BUSINESS_SIZE = [{ name: '50-100' }];
export const BUSINESS_SEARCH_ALT = 'Search';
export const PurchaseConfirmValues = {
  purchaseSteps: [
    {
      label: 'Step 1: Open and confirm the push notification we sent to your mobile.'
    },
    {
      label: 'Step 2: Return to this screen and press the button below to finish your purchase.'
    }
  ],
  label2: ' to PocketPay using visa card ending ',
  label: 'Confirm your purchase',
  completeButton: 'Complete'
};
export const USER_DETAILS_HEADING = 'Fill in your details';
export const USER_DETAILS_LABEL =
  'Since you’re opening the account, we need to know a bit more about you.';
export const USER_DETAILS_DATA = [
  { name: 'Home address' },
  { name: 'City' },
  { name: 'Postal Code' }
];

export const PURPOSE_TITLE = 'What’s the purpose for using PocketPay?';
export const PURPOSE_SUBTITLE =
  'To help us keep PocketPay safe and secure, please tell us what you’re using PocketPay for';

export const USER_NAME_DATA = [{ name: 'First name' }, { name: 'Last name' }];
export const Fallback = ({
  error,
  resetErrorBoundary
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div>
      <TypographyComponent variant="h2" children="Something went wrong:" />
      <TypographyComponent variant="body2" children={error.message} color="red" />
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
};
export const HOME_TRANSACTION_VALUES = [
  {
    id: 1,
    SENDER_NAME: 'Mario Gabriel',
    SEND_AMOUNT: 100,
    RECIEPIENT_AMOUNT: 114.96,
    RECIPIENT_CODE: 'EUR',
    SEND_CODE: 'GBP',
    CREATED_AT: new Date(),
    USER_NAME: 'Ross Gener',
    TRANSFER_NUMBER: '3227627272',
    ACCOUNTS: ['4656', '4252']
  },
  {
    id: 2,
    SENDER_NAME: 'James',
    SEND_AMOUNT: 340,
    RECIEPIENT_AMOUNT: 355.96,
    RECIPIENT_CODE: 'EUR',
    SEND_CODE: 'GBP',
    CREATED_AT: new Date(),
    USER_NAME: ' Gener',
    TRANSFER_NUMBER: '3227627272',
    ACCOUNTS: ['4656', '4252']
  }
];
export const HP_HEADING = 'Home';
export const HP_BUTTON = 'Send money';
export const HP_TEXTLINE_ONE = 'This is where you’ll see your activity and transactions.';
export const HP_TEXTLINE_TWO = 'Choose how you’d like to get started.';
export const CANCEL_TRANSFER_HEADER = 'Your money will be refunded';
export const CANCEL_TRANSFER_SUBTEXT =
  'When we receive your money, we’ll give you a refund. Refunds usually take 3-5 working days.';
export const HomeTabs = ['Updates', 'Details'];
export const CARD_ITEMS: BankCardInterface[] = [
  { cardNumber: '4546', expiryDate: '09/25', id: 1, name: 'EUR Visa Debit' },
  { cardNumber: '9313', expiryDate: '06/25', id: 2, name: 'EUR Visa Debit' }
];
export const DEFAULT_BUSINESS_ADDRESS =
  '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054';
export const LOGIN_FILED = 'Login failed: The provided email and password do not match.';
export const NAVIGATE_HOME = '/home-page';
export const BASE_URL = 'https://bc122be.bootcamp64.tk';
export const API_URLS = {
  debitCardPayment: `${BASE_URL}/debitCardPayment`,
  transactions: `${BASE_URL}/transactions`
};
export const NAVIGATE_SIGNUP_DETAILS = '/signup-details-page';
export const SENDING_MONEY = [
  {
    icon: SEND,
    name: 'Send Money',
    value: 'Pay an international employee, invoice, or expense'
  },
  {
    icon: SETUP,
    name: 'Finish Account Setup',
    value: 'Get balances in multiple currencies, and take buisness goals'
  }
];
export const NAVIGATE_SEND_MONEY = '/send-money';
export const SEND_MONEY_TITLE = 'What would you like to do today?';
export const NAVIGATE_SIGUP = '/sign-up';
export const BANK_ACCOUNT_PAYMENT_FLOW_VALUES = {
  data: {
    name: 'Mario Gabriel',
    amount: '100.00 GBP',
    accountNo: '729019188810'
  },
  accountType: 'business',
  amount: '75.38 GBP'
};
export const NAVIGATE_PAYMENT = '/payment';
export const NAVIGATE_RECIPIENT = '/recipient-details';
export const NAVIGATE_LOGIN = '/login';
export const RECIPEINT_TYPE_VALUES_DATA = [
  {
    id: 1,
    src: Mybusiness,
    alt: 'my business logo',
    children: 'My Business'
  },
  {
    id: 2,
    src: User,
    alt: 'person logo',
    children: 'Someone else'
  },
  {
    id: 3,
    src: Business,
    alt: 'dollar logo',
    children: 'Business or Charity'
  }
];
export const NAVIGATE_TRANSFER = '/transfer-details';
export const NAVIGATE_DEBIT = 'debit-flow';
export const NAVIGATE_BANK = '/bank-flow';
export const NAVIGATE_VERIFICATION = '/verification-details';
export const VerificationCardValues = {
  heading: 'What’s the purpose for using PocketPay?',
  subText:
    'To help us keep PocketPay safe and secure, please tell us what you’re using PocketPay for',
  dropDownLabel: 'Tell us what you’re using PocketPay for',
  dropDownPlaceHolder: 'Tell us what you’re using PocketPay for',
  dropDownData: [
    'Paying rent, utilities or property charges',
    'Paying suppliers/contractors/employees',
    'Paying for goods or services abroad',
    'Paying tax on profit or property'
  ]
};
export const TRANSFER_DETAILS = {
  SEND_AMOUNT: 77.4,
  SEND_COUNTRY_CODE: 'GBP',
  RECIEPIENT_COUNTRY_CODE: 'EUR',
  RATE: 1.14,
  FEE: '00.00',
  AMOUNT: 77.74,
  NAME: 'Mario Gabriel',
  EMAIL: 'mario.gabriel@gmail.com',
  ACCOUNT_NO: '213637383919',
  ACCOUNT_TYPE: 'Checking',
  SHOULD_ARRIVE: 'April 28th'
};
export const CardTabs = ['SAVED CARD', 'NEW CARD'];
export const DEBIT_CARD_FLOW = {
  CARD_DIGITS: 4546,
  CURRENCY_TYPE: 'GBP',
  AMOUNT: 100,
  RECEIVER_CURRENCY_TYPE: 'EUR',
  EXCHANGE_RATE: 1.14,
  AMOUNT_TO_CONVERT: 77.74,
  FEE: 0
};
export const ConfirmDirectors = {
  MAINTEXT1: 'Confirm your business directors',
  MAINTEXT2: 'Confirm your business owners',
  SUBTEXT1:
    'Please confirm these details from companies house. If anyone’s missing, add them below.',
  SUBTEXT2:
    'Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.',
  DIRECTOR: 'Director',
  SHAREHOLDER: 'Shareholder',
  FIRSTNAME: 'First name',
  FIRSTNAMEERR: 'Valid First name is required (only characters)',
  LASTNAME: 'Last name',
  LASTNAMEERR: 'Valid Last name is required  (only characters)',
  DATE_OF_BIRTH: 'Date of birth',
  DROPDOWN: 'Country of residence',
  ADD_ANOTHER: 'Add another',
  Director: 'director',
  Owner: 'owner'
};
export const COUNTRY_LIST = ['Andorra', 'United Kingdom', 'Austria', 'India'];
export const accountNoHelperText = 'Account number length should be equal to 12';
export const accountNoRegex = /^\d{12}$/;
export const invalidEmail = 'Enter valid Email like abc@gmail.com';
export const reviewTransferDetails = 'Review details of your transfer';
export const emailRegex = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
export const FORM_LABLES = ['Amount', 'Fee', "Amount we'll convert", 'Guaranteed rate'];
export const FORM_VALUES = ['00.00 GBP', '77.7 GBP', '1 GBP = 1.14 EUR'];
export const FORM_NAMES = ['amount', 'fee', 'convertAmount', 'rate'];
export const PASSWORD_RULES =
  'Your password must meet the following criteria:\n' +
  '- Minimum length: 8 characters\n' +
  '- At least one uppercase letter (A-Z)\n' +
  '- At least one lowercase letter (a-z)\n' +
  '- At least one number (0-9)\n' +
  '- At least one special character (@, $, !, %, *, ?, &)\n';
export const user_id = localStorage.getItem('userID');
