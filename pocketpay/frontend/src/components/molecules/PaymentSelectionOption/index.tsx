import React from 'react'
import { Box, styled, Stack } from '@mui/material'
import IconComponent from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import RadioButton from '../../atoms/RadioButton'
import theme from '../../../theme/index'

export interface PaymentCardProps {
  icon?: string
  cardHeader?: string
  cardDescription?: string
  arrivalDescription?: string
  width?: string
  height?: string
  isSelected?: boolean
  value?: string
  label?: string
  onChange?: () => void
}

const StyledContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0px',
})

const PaymentCard: React.FC<PaymentCardProps> = ({
  icon,
  cardHeader,
  cardDescription,
  arrivalDescription,
  width,
  height,
  isSelected,
  onChange,
  value,
  label
}) => {
  return (
    <div data-testid="payment-card">
      <Box
        bgcolor={theme.palette.structuralColors.white}
        display="flex"
        alignItems="center"
        width={width}
        height={height}
        data-testid="box-id"
        justifyContent={'space-between'}
        sx={{ flexDirection: "row" }}
      >
        <StyledContent>
          {icon && (
            <Box sx={{ margin: '0px 30px' }}>
              <IconComponent
                data-testid="icon"
                src={icon}
                alt="icon"
                padding='4px'
              />
            </Box>
          )}
          <Stack direction="column">
            <Typography
              data-testid="card-content"
              variant='body1'
            >
              {cardHeader}
            </Typography>
            <Typography
              data-testid="detail-content1"
              variant='caption'
              color={theme.palette.text.mediumEmphasis}
            >
              {cardDescription}
            </Typography>
            <Typography
              data-testid="detail-content2"
              variant='caption'
              color={theme.palette.text.mediumEmphasis}
            >
              {arrivalDescription}
            </Typography>
          </Stack>
        </StyledContent>
        <Box>
          <RadioButton
            checked={isSelected}
            data-testid="radio-button"
            onChange={onChange} 
            value={value} 
            label={label}   
          />
        </Box>
      </Box>
    </div>
  )
}

export default PaymentCard
