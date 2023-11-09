import React, { useContext, useState } from 'react'
import { Grid, useTheme } from '@mui/material';
import {
  CONTINUE_BTN,
  COUNTRYREGISTRATION,
  SELECT_COUNTRY_DATA,
} from '../../../utils/constants'
import { 
  ButtonGrid47, 
  ContinueBtn, 
  GridStyle47, 
  ParentGrid48, 
  StyledBox, 
  StyledGrid2 
} from '../../../utils/styledComponents'
import Typography from '../../atoms/Typography'
import { ISelectCountryProp } from '../../../utils/types';
import DropdownWithIconAndInputfield from '../../molecules/DropdownWithIconAndInputfield';
import { handleCountrySelection } from '../../../utils/functions';
import { SignUpDetailsContext } from "../../../context/CountryContext";

const SelectCountry = (props: ISelectCountryProp) => {
  const { SignUpDetails,setCountry }  = useContext(SignUpDetailsContext);
  const theme = useTheme()
  const [selectedCountry, setSelectedCountry] = useState<string>(SignUpDetails.selectedCountry);
  const [disable, setDisable] = useState(!selectedCountry);

  const handleSelection = (selectedValue: string) => {
    handleCountrySelection(selectedValue, setSelectedCountry, setDisable);
  };

  const handleContinueClick = () => {
    setCountry((prev) => ({ 
      ...prev,
      selectedCountry: selectedCountry
     })); 
     props.handleSelectCountry();
  };
  
  return (
    <Grid container>
      <GridStyle47 data-testid="select-country">
        <StyledBox>
            <StyledGrid2>
                <Typography variant="h1" color={theme.palette.text.highEmphasis}>
                    {SELECT_COUNTRY_DATA[0]}
                </Typography>
            </StyledGrid2>
        </StyledBox>
        <ParentGrid48>
            <DropdownWithIconAndInputfield
              data-testid="select-country-dropdown"
              placeholder={SELECT_COUNTRY_DATA[1]}
              data={COUNTRYREGISTRATION}
              isCurrency={false}
              label={SELECT_COUNTRY_DATA[2]}
              isLabelText={true}
              defaultValue={selectedCountry || null}
              onChange={(selectedValue) => handleSelection(selectedValue)}
            />     
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
  )
}
export default SelectCountry