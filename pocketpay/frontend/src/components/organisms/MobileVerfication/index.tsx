import React, { useCallback, useContext, useState } from 'react';
import { Grid, Typography, styled, useTheme } from '@mui/material';
import { CONTINUE_BTN, MOBILENUMBER_SELECTION } from '../../../utils/constants';
import { VALID_MOBILENUMBER } from '../../../utils/regex';
import {
  ButtonGrid47,
  ContinueBtn,
  GridStyle47,
  ParentGrid47,
  StyledBox,
  StyledGrid2,
  StyledGrid47
} from '../../../utils/styledComponents';
import { IMobileVerficationProps } from '../../../utils/types';
import InputfieldWithDropdown from '../../molecules/InputfieldWithDropdown';
import { SignUpDetailsContext } from '../../../context/CountryContext';

export const StyledInputfieldWithDropdown47 = styled(InputfieldWithDropdown)({
  '& .MuiPopover-root': {
    mariginTop: '11%'
  }
});

const MobileVerification = ({ handleChange }: IMobileVerficationProps) => {
  const { SignUpDetails, setCountry } = useContext(SignUpDetailsContext);
  const [mobileNumber, setMobileNumber] = useState<string>(SignUpDetails?.phoneNumber);
  const [disable, setDisable] = useState<boolean>(mobileNumber?.length !== 12);

  const handleValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedMobileNumber = event.target.value.replace(/\D/g, '');
    setMobileNumber(cleanedMobileNumber);
    setDisable(
      cleanedMobileNumber.length !== 12 ||
        !VALID_MOBILENUMBER.test(event.target.value.replace(/\s/g, ''))
    );
  }, []);
  const handleContinueClick = () => {
    setCountry((prev) => ({
      ...prev,
      phoneNumber: mobileNumber
    }));
    handleChange();
  };
  const theme = useTheme();

  return (
    <Grid data-testid="mobile-verification">
      <GridStyle47>
        <StyledGrid47 container>
          <Grid item>
            <StyledBox>
              <StyledGrid2>
                <Typography variant="h1" color={theme.palette.text.highEmphasis}>
                  {MOBILENUMBER_SELECTION[0]}
                </Typography>
                <Typography variant="body3" color={theme.palette.text.mediumEmphasis}>
                  {MOBILENUMBER_SELECTION[1]}
                </Typography>
              </StyledGrid2>
            </StyledBox>
          </Grid>
          <ParentGrid47 item>
            <StyledInputfieldWithDropdown47
              placeholder={MOBILENUMBER_SELECTION[2]}
              isCurrency={false}
              value={MOBILENUMBER_SELECTION[2]}
              handleChange={handleValue}
              mobileNumber={`+44 ${mobileNumber}`}
            />
          </ParentGrid47>
        </StyledGrid47>
        <ButtonGrid47>
          <ContinueBtn
            variant="contained"
            disabled={disable}
            children={CONTINUE_BTN}
            onClick={handleContinueClick}
          />
        </ButtonGrid47>
      </GridStyle47>
    </Grid>
  );
};

export default MobileVerification;
