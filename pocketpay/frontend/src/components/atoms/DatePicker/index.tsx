import React, {useContext } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import IconComponent from '../Icon'
import CalendarActiveIcon from '../../../../public/assets/icons/CalendarActiveIcon.svg'
import CalenderInitialIcon from '../../../../public/assets/icons/CalenderInitialIcon.svg'
import { IconButton, InputAdornment, useTheme } from '@mui/material'
import { Dayjs } from 'dayjs'
import { NOT_FOUND, dayOfWeekFormatterHandler } from '../../../utils/constants'
import { TextFieldStyled, datePropsStyles } from '../../../utils/styledComponents'
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext'

interface DateProps {
  label: string
}

const DatePickerComponent = ({ label }: DateProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<Dayjs | null>(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const {  setUserBusinessDetails } = useContext(UserBusinessDetailsContext);
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
    setOpen((prevState) => !prevState)
    setUserBusinessDetails((prev)=>({
      ...prev,
      dob:newValue
    }))
  }

  const openCalendar = (event: any) => {
    setOpen((prevState) => !prevState)
    setAnchorEl(event.currentTarget)
  }

  const theme = useTheme()

  const handleRenderInput = 
    (params: any) => {
      return (
        <TextFieldStyled
          {...params}
          InputLabelProps={{
            style: {
              color: theme.palette.text.lowEmphasis,
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={openCalendar} data-testid="calendar-icon">
                  {open || value !== null ? (
                    <IconComponent src={CalendarActiveIcon} alt={NOT_FOUND} />
                  ) : (
                    <IconComponent src={CalenderInitialIcon} alt={NOT_FOUND} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      )
    }
 
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleChange}
        open={open}
        inputFormat="DD-MM-YYYY"
        renderInput={handleRenderInput}
        PopperProps={{
          anchorEl: anchorEl,
          placement: 'bottom-end',
          sx: datePropsStyles,

        }}
        dayOfWeekFormatter={dayOfWeekFormatterHandler}
        disableFuture
      />
    </LocalizationProvider>
  )
}
export default DatePickerComponent
