import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import {
  ACCOUNT_CATEGORY,
  ACCOUNT_SUBCATEGORY,
  BUSINESS_SIZE,
  BUSINESS_SIZE_PLACEHOLDER,
  CATEGORY_PLACEHOLDER,
  CONTINUE_BTN,
  MULTI_DROPDOWN_HEADER,
  MULTI_DROPDOWN_LABEL,
  SUBCATEGORY_PLACEHOLDER
} from '../../../utils/constants';
import Dropdown from '../../molecules/DropdownWithIconAndInputfield';
import {
  BtnBox,
  ContinueBtn,
  RootBox,
  StyledBox,
  StyledDropdownBox,
  StyledGrid2,
  TypoBox
} from '../../../utils/styledComponents';
import Typography from '../../atoms/Typography';
import { IVerifyAccountProps } from '../../../utils/types';
import {
  handleBusinessSizeSelection,
  handleSelectOption,
  handleSubcategorySelection
} from '../../../utils/functions';
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext';

const VerifyAccountCard = ({ onClick }: IVerifyAccountProps) => {
  const { userBusinessDetails, setUserBusinessDetails } = useContext(UserBusinessDetailsContext);
  const theme = useTheme();
  const [selected, setSelected] = useState<string | undefined>(userBusinessDetails.category);
  const [isFormValid, setIsFormValid] = useState(false);
  const [subcategory, setSubcategory] = useState(userBusinessDetails.subCategory);
  const [businessSize, setBusinessSize] = useState(userBusinessDetails.sizeOfBusiness);

  useEffect(() => {
    setIsFormValid(subcategory !== '' && businessSize !== '' && selected !== '');
    setUserBusinessDetails((prev) => ({
      ...prev,
      category: selected,
      subCategory: subcategory,
      sizeOfBusiness: businessSize
    }));
  }, [selected, subcategory, businessSize]);

  return (
    <RootBox data-testid="multi-dropdown">
      <TypoBox>
        <StyledBox>
          <StyledGrid2>
            <Typography variant="h1" color={theme.palette.text.highEmphasis}>
              {MULTI_DROPDOWN_HEADER}
            </Typography>
            <Typography variant="body3" color={theme.palette.text.mediumEmphasis}>
              {MULTI_DROPDOWN_LABEL}
            </Typography>
          </StyledGrid2>
        </StyledBox>
      </TypoBox>
      <StyledDropdownBox>
        <Dropdown
          placeholder={CATEGORY_PLACEHOLDER}
          data={ACCOUNT_CATEGORY}
          isCurrency={false}
          label={CATEGORY_PLACEHOLDER}
          isLabelText={true}
          onChange={handleSelectOption(setSelected)}
        />
      </StyledDropdownBox>
      <StyledDropdownBox>
        <Dropdown
          placeholder={SUBCATEGORY_PLACEHOLDER}
          data={ACCOUNT_SUBCATEGORY}
          isCurrency={false}
          label={SUBCATEGORY_PLACEHOLDER}
          isLabelText={true}
          onChange={handleSubcategorySelection(setSubcategory)}
        />
      </StyledDropdownBox>
      <StyledDropdownBox>
        <Dropdown
          placeholder={BUSINESS_SIZE_PLACEHOLDER}
          data={BUSINESS_SIZE}
          isCurrency={false}
          label={BUSINESS_SIZE_PLACEHOLDER}
          isLabelText={true}
          onChange={handleBusinessSizeSelection(setBusinessSize)}
        />
      </StyledDropdownBox>
      <BtnBox sx={{ marginTop: theme.spacing(40) }}>
        <ContinueBtn
          variant="contained"
          children={CONTINUE_BTN}
          sx={{ color: theme.palette.info.contrastText }}
          onClick={onClick}
          disabled={!isFormValid}
        />
      </BtnBox>
    </RootBox>
  );
};
export default VerifyAccountCard;
