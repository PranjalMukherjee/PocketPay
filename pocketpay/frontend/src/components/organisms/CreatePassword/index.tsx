import React, { useContext, useState } from 'react';
import { Grid, useTheme, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import {
  CONTINUE_BTN,
  PASSWORD_DETAIL,
  PASSWORD_LABLE,
  PASSWORD_PLACEHOLDER,
  PASSWORD_RULES
} from '../../../utils/constants';
import {
  ButtonGrid47,
  ContinueBtn,
  GridStyle47,
  ParentGrid48,
  StyledBox,
  StyledGrid2
} from '../../../utils/styledComponents';
import Typography from '../../atoms/Typography';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputField } from '../../atoms/TextField';
import { IPasswordChangeProp } from '../../../utils/types';
import { SignUpDetailsContext } from '../../../context/CountryContext';
import { passwordRegex } from '../../../utils/regex';

const CreatePassword = ({ handleContinuePassword }: IPasswordChangeProp) => {
  const { SignUpDetails, setCountry } = useContext(SignUpDetailsContext);
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState(SignUpDetails.password);
  const [disable, setDisable] = useState(true);
  const [showHelperText, setShowHelperText] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (!passwordRegex.test(event.target.value)) {
      setDisable(true);
      setShowHelperText(true);
    } else {
      setDisable(false);
      setShowHelperText(false);
    }
  };

  const handleContinueClick = () => {
    setCountry((prev) => ({
      ...prev,
      password: password
    }));
    handleContinuePassword();
  };

  return (
    <Grid container>
      <GridStyle47 data-testid="password-change">
        <StyledBox>
          <StyledGrid2>
            <Typography variant="h1" color={theme.palette.text.highEmphasis}>
              {PASSWORD_DETAIL}
            </Typography>
          </StyledGrid2>
        </StyledBox>
        <ParentGrid48>
          <InputField
            margin="normal"
            variant="outlined"
            name="password"
            placeholder={PASSWORD_PLACEHOLDER}
            label={PASSWORD_LABLE}
            type={showPassword ? 'text' : 'password'}
            sx={{ width: '516px' }}
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
          />
          {showHelperText && <FormHelperText error>{PASSWORD_RULES}</FormHelperText>}
        </ParentGrid48>
        <ButtonGrid47>
          <ContinueBtn
            variant="contained"
            children={CONTINUE_BTN}
            onClick={handleContinueClick}
            disabled={disable}
          />
        </ButtonGrid47>
      </GridStyle47>
    </Grid>
  );
};
export default CreatePassword;
