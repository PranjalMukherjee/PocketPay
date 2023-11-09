import React, { FC } from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '../Typography'

const StyledButton = styled(MuiButton)`
  text-transform: none;
  border-radius: 56px;
`
const Button: FC<ButtonProps> = ({
  children,
  color,
  variant = 'contained',
  disabled,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
     <Typography variant="body2">
        {children}
     </Typography>
    </StyledButton>
  )
}

export default Button
