import React, { useContext, useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import Theme from '../../../theme';
import Search from './SearchBar';
import { SearchBussiness, Trade, Options } from '../../../utils/constants';
import { StyledInnerBox, StyledOuterBox } from '../../../utils/styledComponents';
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext';
interface BusinessSearchProps {
  handleDropdownClick : (value: string) => void
}
const BusinessSearch = (props:BusinessSearchProps) => {
  const [newValue, setNewValue] = useState('');
  const {setUserBusinessDetails} = useContext(UserBusinessDetailsContext);
  const handleSearchChange = (value: string) => {
    setNewValue(value);
    
    setUserBusinessDetails((prev)=>({
      ...prev,
      businessName: value
    }));

  };

  return (
    <>
      <StyledOuterBox>
        <TypographyComponent variant="h1" children={SearchBussiness} />
        <TypographyComponent
          color={Theme.palette.text.mediumEmphasis}
          variant="body3"
          children={Trade}
        />
        <StyledInnerBox>
          <Search
            options={Options}
            placeholder={'Select your Business'}
            onChange={handleSearchChange}
            value={newValue}
            onValueClick={props.handleDropdownClick}
          />
        </StyledInnerBox>
      </StyledOuterBox>
    </>
  );
};

export default BusinessSearch;
