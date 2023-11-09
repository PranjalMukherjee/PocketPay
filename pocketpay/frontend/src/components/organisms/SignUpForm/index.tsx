import React, { useContext, useState } from 'react';
import {
  ALREADY_HAVE_AN_ACCOUNT,
  BY_REGISTERING,
  CREATE_ACCOUNT,
  ENTER_EMAIL,
  Email_REGEX,
  LOGIN,
  NEXT,
  POLICY,
  SIGNUPFORM_LOGIN_WITH,
  TERM,
  invalidEmail
} from '../../../utils/constants';
import CustomButton from '../../atoms/Button';
import Icon from '../../atoms/IconButton';
import GoogleIcon from '../../../../public/assets/icons/Google.svg';
import FacebookIcon from '../../../../public/assets/icons/Facebook.svg';
import AppleIcon from '../../../../public/assets/icons/Apple.svg';
import { InputField } from '../../atoms/TextField';
import Typography from '../../atoms/Typography';
import styled from '@emotion/styled';
import { Box, Divider, Stack } from '@mui/material';
import theme from '../../../theme';
import { SignUpDetailsContext } from "../../../context/CountryContext";

export interface SignUpWrapperProps {
  style?: React.CSSProperties;
  onClickSignUp?: () => void;
  onClickGoogleSignUp?: () => void;
  onClickLogin?: () => void;
}

const StyledButton = styled(CustomButton)({
  borderRadius: theme.spacing(14),
  height: "3.625rem",
  textTransform: "none",
  width: "32.25rem",
  fontSize: "body2",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary[500],
  },
  "&:disabled": {
    backgroundColor: theme.palette.primary[100],
  },
});

const SignUpFromWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: theme.spacing(10),
  width: 'auto'
});

const IconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(23.25)
});

const InnerWrapper = styled(Stack)({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(8),
  maxWidth: theme.spacing(140),
  width: '100%'
});

const TextWrapper = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: theme.spacing(10)
});

const SignUpForm = (props: SignUpWrapperProps) => {
  const { SignUpDetails,setCountry }  = useContext(SignUpDetailsContext);
  const defaultSignUpDetails = { email: '' };
  const [email, setEmail] = useState(SignUpDetails ? SignUpDetails.email : defaultSignUpDetails.email);
  const [disabled, setDisabled] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setEmail(e.target.value.trim())
    const regex = new RegExp(Email_REGEX);
    setDisabled(value === '' || !regex.test(value));
    if (!regex.test(value)) {
      setEmailError(invalidEmail);
    } else {
      setEmailError('');
    }
  };

  const handleContinueClick = () => {
    setCountry((prev) => ({ 
      ...prev,
      email:email
     })); 
     props.onClickSignUp?.();
  };

  return (
      <SignUpFromWrapper style={props.style} data-testid="SignUpForm">
        <InnerWrapper>
          <Typography variant="h1" sx={{ color: theme.palette.text.highEmphasis }}>
            {CREATE_ACCOUNT}
          </Typography>

          <InputField
            type="text"
            variant="outlined"
            placeholder={ENTER_EMAIL}
            style={{ width:"32.25rem" }}
            label={ENTER_EMAIL}
            onChange={handleChange}
            data-testid="email-input"
            error={Boolean(emailError)}
            helperText={emailError}
          />

          <StyledButton
            variant="contained"
            disabled={disabled}
            data-testid="signUpButton"
            onClick={handleContinueClick}>
            {NEXT}
          </StyledButton>
        </InnerWrapper>

        <Typography variant="caption" sx={{ color: theme.palette.text.mediumEmphasis }}>
          {SIGNUPFORM_LOGIN_WITH}
        </Typography>

        <IconBox>
          <Icon alt="Google Icon" icon={GoogleIcon} data-testid="google-icon" onClick={props.onClickGoogleSignUp} />
          <Icon icon={FacebookIcon} data-testid="facebook-icon" />
          <Icon icon={AppleIcon} data-testid="apple-icon" />
        </IconBox>

        <TextWrapper>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(1) }}>
            <Typography variant="caption" sx={{ color: theme.palette.text.mediumEmphasis }}>
              {BY_REGISTERING}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}>
              {TERM}
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.mediumEmphasis }}>
              and
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}>
              {POLICY}
            </Typography>
          </Box>
        </TextWrapper>
        <Divider variant="middle" sx={{ width: theme.spacing(129) }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(1) }}>
          <Typography variant="caption" sx={{ color: theme.palette.text.mediumEmphasis }}>
            {`${ALREADY_HAVE_AN_ACCOUNT} `}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.primary.main,
              textDecoration: 'underline',
              cursor: 'pointer'
            }} data-testid="login"
            onClick={props.onClickLogin}>
            {LOGIN}
          </Typography>
        </Box>
      </SignUpFromWrapper>
  );
};

export default SignUpForm;
