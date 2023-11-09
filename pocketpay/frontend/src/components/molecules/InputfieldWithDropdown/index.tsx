import React from 'react'
import {
  FormControl,
  InputAdornment,
  useTheme,
} from '@mui/material'
import { COUNTRYREGISTRATION } from '../../../utils/constants'
import DropDown from '../DropdownWithIconAndInputfield'
import { DropdownInputfieldProps } from '../../../utils/types'
import { StyledDivider, TextFieldStyled } from '../../../utils/styledComponents'
import { useHandleTextField } from '../../../utils/functions'

const InputfieldWithDropdown = ({
  placeholder,
  isCurrency,
  mobileNumber,
  handleChange,
  value,
  handleValue,
  defaultValue,
}: DropdownInputfieldProps) => {
  const { anchorEl, handleTextField } = useHandleTextField(); 
  const theme = useTheme()
  return (
    <FormControl fullWidth data-testid="input-with-dropdown">
      {isCurrency ? (
        <TextFieldStyled
          fullWidth
          data-testid="input-with-dropdown-currency"
          label={placeholder}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={handleTextField}
          InputProps={{
            type: 'text',
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  color: 'inherit !important',
                  minWidth: '120px',
                  marginTop: theme.spacing(2),
                  ...theme.typography.body2,
                }}
              >
                <DropDown
                  data-testid="dropdown-with-currency"
                  placeholder={value}
                  handleValue={handleValue}
                  data={[]}
                  currencyData={COUNTRYREGISTRATION}
                  isCurrency={true}
                  label={placeholder}
                  isLabelText={false}
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  defaultValue={defaultValue}
                />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextFieldStyled
          fullWidth
          data-testid="input-with-dropdown-mobile"
          label={placeholder}
          defaultValue={mobileNumber}
          onChange={handleChange}
          onClick={handleTextField}
          InputProps={{
            type: 'text',
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  marginTop: theme.spacing(2),
                  color: 'inherit !important',
                  minWidth: '68px !important',
                  ...theme.typography.body2,
                }}
              >
                <DropDown
                  placeholder={placeholder}
                  data={[]}
                  handleValue={handleValue}
                  currencyData={COUNTRYREGISTRATION}
                  isCurrency={false}
                  label={placeholder}
                  isLabelText={false}
                  defaultValue={defaultValue}
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                />
                <StyledDivider orientation="vertical" />
              </InputAdornment>
            ),
          }}
        />
      )}
    </FormControl>
  )
}
export default InputfieldWithDropdown
