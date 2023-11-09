import React, { useCallback, useState } from 'react'
import {
  Autocomplete,
  Box,
  Grid,
  Menu,
  MenuItem,
  styled,
  useTheme,
} from '@mui/material'
import { IDropdownDetails, IDropdownProps } from '../../../utils/types'
import ImageComponent from '../../atoms/Image'
import IconComponent from '../../atoms/Icon'
import chevronDown from '../../../../public/assets/icons/chevron-down.svg'
import { countryCurrency } from '../../../utils/constants'
import DropdownData from '../DropdownData'
import { CustomTextField48, FormControlStyled } from '../../../utils/styledComponents'


const StyledGrid = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(4),
}))

const ParentGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const DropdownWithIconAndInputfield = (props: IDropdownProps) => {
  const theme = useTheme()

  const {
    placeholder,
    data,
    currencyData,
    isCurrency,
    label,
    isLabelText,
    handleValue,
    anchorOrigin,
    anchorEl,
    defaultValue,
    onChange,
    isCard,
  } = props

  const [labelValue, setLabelValue] = React.useState(placeholder)
  const [item, setItem] = React.useState<boolean>(false)
  const [val, setVal] = React.useState(
    defaultValue !== undefined ? defaultValue : 0
  )

  const handleselect = useCallback(() => {
    setItem(true)
  }, [])

  const handleChange = useCallback(
    (key: number) => {
      setVal(key)
      setItem(false)
      if (handleValue) {
        handleValue(key);
      }
      countryCurrency.value = val
    },
    [handleValue]
  )

  const handleFocus = useCallback(() => {
    setLabelValue(label)
  }, [label])

  const handleRender = useCallback(
    (props: any, option: IDropdownDetails) => {
      return (
        <Box component="li" {...props}>
           <DropdownData
            icon={{
              image: option.image,
              name: option.name,
              value: option.value,
            }}
          />
        </Box>
      )
    },
    []
  )

  const [listboxActive, setListboxActive] = useState(false);
  
  const handleRenderInput = useCallback(
    (params: any) => {
      const check = [0, undefined, null]
      return (
        <CustomTextField48
          {...params}
          label={labelValue}
          InputProps={{
            ...params.InputProps,
            endAdornment: !listboxActive && (
              <React.Fragment>
                <span style={{ marginRight: theme.spacing(9) }}>
                  {check.includes(val) || isNaN(val) || !isCard
                    ? ''
                    : `xxxx xxxx ${val}`}
                </span>
                <IconComponent src={chevronDown} alt="chevron-down" />
              </React.Fragment>
            ),
          }}
          open={listboxActive}
        />
      )
    },
    [isCard, labelValue, theme, val, listboxActive]
  )

  const handleCardChange = useCallback((_event: any, index: any) => {
    const tepVal =
      index !== undefined ? parseInt(index?.value?.split(' ')[2]) : 0
    setVal(tepVal)
  }, [])

  const handleOnChange = useCallback(
    (event: any, index: any) => {
      if (onChange) {
        onChange(index);
      }
    },
    [onChange]
  )

  const handleOption = useCallback((option: IDropdownDetails) => {
    return option.name
  }, [])

  return (
    <Grid>
      {isLabelText ? (
        < FormControlStyled  fullWidth data-testid="dropdown-text">
          <Autocomplete
            data-testid="dropdown-id"
            id="dropdown-data-text-id"
            options={data}
            defaultValue={defaultValue}
            getOptionLabel={handleOption}
            renderOption={handleRender}
            renderInput={handleRenderInput}
            onFocus={handleFocus}
            ListboxProps={{
              style: {
                maxHeight: '230px',
                overflowY: 'auto'
              }
            }}
            onChange={isCard ? handleCardChange : handleOnChange}
            onOpen={() => setListboxActive(true)}
            onClose={() => setListboxActive(false)}
          
          />
        </ FormControlStyled >
      ) : (
        < FormControlStyled  fullWidth data-testid="dropdown-icon">
           {currencyData && (
            <Grid container data-testid="click-data" onClick={handleselect}>
                <Grid item paddingRight={0.5}>
                  <ImageComponent
                    imgSrc={currencyData[val]?.image!}
                    imgAlt={currencyData[val]?.name}
                  />
                </Grid>
                {isCurrency && (
                  <StyledGrid item>{currencyData[val]?.currency}</StyledGrid>
                )}
                <ParentGrid>
                  <IconComponent src={chevronDown} alt="chevron-down" />
                </ParentGrid>
            </Grid>
           )}
          {item && (
              <Menu
                id="dropdown-id"
                open={item}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                sx={{
                  width: '100%',
                  '& .MuiMenu-paper': {
                    width: '100%',
                    marginTop: '-0.5%',
                    maxWidth: '32.375rem',
                  },
                }}
              >
                <MenuItem disabled>{placeholder}</MenuItem>
                {currencyData?.map((name, key) => (
                  <MenuItem
                    value={key}
                    key={name.name}
                    onClick={() => handleChange(key)}
                  >
                     <DropdownData icon={name} />
                  </MenuItem>
                ))}
              </Menu>
          )}
        </ FormControlStyled >
      )}
    </Grid>
  )
}

export default DropdownWithIconAndInputfield
