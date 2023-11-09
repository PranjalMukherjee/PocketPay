import chevronRight from '../../../../public/assets/icons/chevronright.svg';
export const OTPReg = /^\d{6}$/;
export const SUBMIT = 'Submit';
export const VerifyOtpLabel = '6-digit code';
export const VerifyOtpText1 = 'Enter the 6-digit code';
export const VerifyOtpText2 = 'I didn’t recieve a code';
export const VerifyOtpText3 = 'Approve another way';
export const VerifyOtpText4 = 'Use a different phone number';
export const VerifyOtpPlaceHolder = 'Enter code here';
export const verifyOTPOptions = [
  { text: 'Resend code by SMS', icon: chevronRight },
  { text: 'Send code by voice call', icon: chevronRight }
];
