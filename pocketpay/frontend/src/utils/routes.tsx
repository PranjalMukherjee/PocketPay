import SignUpDetailsPage from '../pages/SignUpDetails';
import InitiateTransactionPage from '../pages/InitiateTransactionPage';
import HomePageFlow from '../pages/HomePageFlow';
import {
  NAVIGATE_HOME,
  NAVIGATE_PAYMENT,
  NAVIGATE_SEND_MONEY,
  NAVIGATE_SIGUP,
  NAVIGATE_RECIPIENT,
  NAVIGATE_TRANSFER,
  NAVIGATE_VERIFICATION,
  NAVIGATE_BANK,
  NAVIGATE_DEBIT,
  NAVIGATE_SIGNUP_DETAILS,
  NAVIGATE_LOGIN
} from '../utils/constants';
import React from 'react';
import SignUpPage from '../pages/SignUp';
import { PaymentAmountPage } from '../pages/PaymentAmountPage';
import { RecipientDetailsPage } from '../pages/RecipientDetails';
import LoginPage from '../pages/Login';
import TransferDetailPage from '../pages/TransferDetails';
import { VerificationDetailsPage } from '../pages/VerificationDetails';
import DebitCardFlow from '../pages/DebitCardFlow';
import { BankAccountPaymentFlowPage } from '../pages/BankAccountPaymentFlowPage';
import YourBusiness from '../pages/YourBusiness';
import BusinessActivityPage from '../pages/BusinessActivityPage';
import { UserDetailsPage } from '../pages/YourDetailsPage';

export const routes = [
  { path: NAVIGATE_HOME, element: <HomePageFlow /> },
  { path: NAVIGATE_SEND_MONEY, element: <InitiateTransactionPage /> },
  { path: NAVIGATE_SIGUP, element: <SignUpPage /> },
  { path: NAVIGATE_PAYMENT, element: <PaymentAmountPage /> },
  { path: NAVIGATE_RECIPIENT, element: <RecipientDetailsPage /> },
  { path: NAVIGATE_SIGNUP_DETAILS, element: <SignUpDetailsPage /> },
  { path: NAVIGATE_LOGIN, element: <LoginPage /> },
  { path: NAVIGATE_TRANSFER, element: <TransferDetailPage /> },
  { path: NAVIGATE_VERIFICATION, element: <VerificationDetailsPage /> },
  { path: NAVIGATE_DEBIT, element: <DebitCardFlow /> },
  { path: NAVIGATE_BANK, element: <BankAccountPaymentFlowPage /> },
  { path: '/business-details', element: <YourBusiness /> },
  { path: '/business-activity', element: <BusinessActivityPage /> },
  { path: '/user-details', element: <UserDetailsPage /> }
];
