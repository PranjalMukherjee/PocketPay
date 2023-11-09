import { Box, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme';
import { InputField } from '../../atoms/TextField';
import MuiButton from '../../atoms/Button';
import { styled } from '@mui/system';
import MuiIcon from '../../atoms/Icon';
import {
  OTPReg,
  SUBMIT,
  VerifyOtpLabel,
  VerifyOtpPlaceHolder,
  VerifyOtpText1,
  VerifyOtpText2,
  VerifyOtpText3,
  VerifyOtpText4,
  verifyOTPOptions
} from './OTPConstants';
import { SignUpDetailsContext } from '../../../context/CountryContext';

interface VerifyOTPProps {
  phoneNumber: string;
  handleVerifySubmit?: () => void;
  handleDifferentNumber?: () => void;
}
const StyledButton = styled(MuiButton)({
  width: '135px',
  height: '56px',
  padding: '16px 30px',
  borderRadius: '56px',
  '&:disabled': {
    backgroundColor: theme.palette.primary[100]
  }
});

const VerifyOTP = (props: VerifyOTPProps) => {
  const {SignUpDetails} = useContext(SignUpDetailsContext)
  const [otp, setOtp] = useState('');
  const [otpState, setOtpState] = useState({
    buttonDisable: true,
    tryAnotherWay: true,
    textFocus: false
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredOtp = event.target.value;
    setOtp(enteredOtp);
    setOtpState((prevState) => ({
      ...prevState,
      textFocus: true,
      buttonDisable: !OTPReg.test(enteredOtp)
    }));
  };

  const handleNotReceived = () => {
    setOtpState((prevState) => ({
      ...prevState,
      tryAnotherWay: false
    }));
  };

  const handleFocus = () => {
    setOtpState((prevState) => ({
      ...prevState,
      textFocus: true
    }));
  };

  const handleBlur = () => {
    if (!otp) {
      setOtpState((prevState) => ({
        ...prevState,
        textFocus: false
      }));
    }
  };

  const { buttonDisable, tryAnotherWay, textFocus } = otpState;

  return (
    <Box maxWidth={'516px'}>
      {tryAnotherWay ? (
        <Stack
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          gap={'324px'}>
          <Stack maxWidth={'516px'} gap={'32px'}>
            <Stack gap={'8px'}>
              <TypographyComponent
                variant="h1"
                children={VerifyOtpText1}
                color={theme.palette.text.highEmphasis}
              />
              <TypographyComponent
                children={`We sent it to +44${SignUpDetails?.phoneNumber}`}
                color={theme.palette.text.mediumEmphasis}
                variant="body3"
              />
            </Stack>
            <Stack gap={'20px'}>
              <InputField
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={VerifyOtpPlaceHolder}
                label={textFocus ? VerifyOtpLabel : ''}
                onChange={handleChange}
                value={otp}
              />
              <TypographyComponent
                data-testid="notReceived"
                variant="link"
                children={VerifyOtpText2}
                color={theme.palette.primary[500]}
                style={{ textDecoration: 'underLine', cursor: 'pointer' }}
                onClick={handleNotReceived}
              />
            </Stack>
          </Stack>
          <Stack display={'flex'} alignItems={'flex-end'}>
            <StyledButton
              variant="contained"
              children={SUBMIT}
              disabled={buttonDisable}
              onClick={props.handleVerifySubmit}
            />
          </Stack>
        </Stack>
      ) : (
        <Stack gap={'56px'}>
          <Stack gap={'8px'}>
            <TypographyComponent
              variant="h1"
              children={VerifyOtpText3}
              color={theme.palette.text.highEmphasis}
            />
            <TypographyComponent
              variant="body3"
              color={theme.palette.text.mediumEmphasis}
              children={`We sent it to ${props.phoneNumber}`}
            />
          </Stack>
          <Stack gap={'42px'}>
            {verifyOTPOptions.map((option) => (
              <Stack
                key={option.text}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3.75}
                paddingLeft={'20px'}>
                <TypographyComponent variant="caption" children={option.text} />
                <MuiIcon src={option.icon} alt={'chevronRightIcon'} />
              </Stack>
            ))}
            <TypographyComponent
              children={VerifyOtpText4}
              style={{ textDecoration: 'underLine', cursor: 'pointer' }}
              variant="link"
              onClick={props.handleDifferentNumber}
              color={theme.palette.primary[500]}
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
export default VerifyOTP;
