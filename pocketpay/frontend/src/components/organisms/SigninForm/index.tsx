import * as React from 'react';
import { useState } from 'react';
import CustomButton from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import { InputField } from '../../atoms/TextField';
import { Stack, Link, Box, InputAdornment, IconButton, Divider } from '@mui/material';
import Icon from '../../atoms/IconButton';
import styled from '@emotion/styled';
import { Email_REGEX, WELCOME_BACK, SIGN_IN, TROUBLE_LOGIN, PASSWORD_RULES, invalidEmail } from '../../../utils/constants';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '../../../../public/assets/icons/Google.svg';
import FacebookIcon from '../../../../public/assets/icons/Facebook.svg';
import AppleIcon from '../../../../public/assets/icons/Apple.svg';

const StyledButtom = styled(CustomButton)`
  color: ${theme.palette.structuralColors.white};
  background-color: ${theme.palette.primary.main};
  border-radius: ${theme.spacing(14)};
  padding: ${theme.spacing(4)} ${theme.spacing(7)};
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};
  &:disabled {
    color: ${theme.palette.structuralColors.white};
    background-color: ${theme.palette.primary.main};
    opacity: 0.5;
  }
`;

export interface SignInProps {
  handleLogIn?: any;
  handleLogInWithGoogle?: () => void;
}

export default function SignIn({ ...props }: Readonly<SignInProps>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    const regex = new RegExp(Email_REGEX);

    if (!regex.test(value)) {
      setEmailError(invalidEmail);
    } else {
      setEmailError('');
    }
  };

  const handleLogInButton = React.useCallback(() => {
    props.handleLogIn(email, password);
  }, [email, password]);
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError(PASSWORD_RULES);
    } else {
      setPasswordError('');
    }
  };

  return (
    <Box sx={{ marginTop: '5rem', marginLeft: '12rem', marginRight: '10rem' }}>
      <Stack>
        <Typography variant="h1">{WELCOME_BACK}</Typography>
        <InputField
          margin="normal"
          variant="outlined"
          label="Email Address"
          placeholder="Enter your email address"
          name="email"
          sx={{ width: 'auto', borderRadius: theme.spacing(2), mt: '2rem' }}
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <InputField
          margin="normal"
          variant="outlined"
          name="password"
          placeholder="Enter your password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          sx={{ width: 'auto' }}
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          } 
          error={Boolean(passwordError)}
          helperText={passwordError}
        />
        <StyledButtom
          variant="contained"
          fullWidth
          disabled={!email || !password || Boolean(emailError) || Boolean(passwordError)}
          data-testid="loginButton"
          onClick={handleLogInButton}>
          {SIGN_IN}
        </StyledButtom>
        <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
          <Checkbox label="Remember me" checked={true} />
          <Link href="#" variant="caption" marginTop={theme.spacing(2.5)}>
            {TROUBLE_LOGIN}
          </Link>
        </Stack>
      </Stack>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5)
        }}>
        <Typography variant="caption">Or, Log in with</Typography>
      </Box>
      <Stack direction={'row'} justifyContent="space-around">
        <Icon
          data-testid="google"
          icon={GoogleIcon}
          alt="Google Icon"
          height={theme.spacing(7)}
          width={theme.spacing(7)}
          onClick={props.handleLogInWithGoogle}></Icon>
        <Icon height={theme.spacing(7)} icon={FacebookIcon} width={theme.spacing(7)} />
        <Icon height={theme.spacing(7)} icon={AppleIcon} width={theme.spacing(7)} />
      </Stack>
      <Divider sx={{ mt: '2rem' }} />
    </Box>
  );
}
