import React from 'react'
import { Grid, styled, useTheme } from '@mui/material'
import { IDropdownDetails } from '../../../utils/types'
import IconComponent from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface DropdownDataProps {
  icon: IDropdownDetails
}
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
}))

const ValueGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledTypographyComponent = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(6),
}))

const DropdownData = ({ icon }: DropdownDataProps) => {
  const theme = useTheme()
  return (
    <StyledGrid container data-testid="dropdown-data">
      <>
        <StyledGrid key={icon.name}>
          {icon.image && (
            <IconComponent src={icon.image} alt={icon.name} />
          )}

          <ValueGrid>
            <StyledTypographyComponent
              variant="body2"
              color={theme.palette.text.highEmphasis}
            >
              {icon.name}
            </StyledTypographyComponent>

            {icon.value && (
              <StyledTypographyComponent
                variant="caption"
                color={theme.palette.text.lowEmphasis}
              >
                {icon.value}
              </StyledTypographyComponent>
            )}
          </ValueGrid>
        </StyledGrid>

        <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
          {icon.currency}
        </Typography>
      </>
    </StyledGrid>
  )
}

export default DropdownData
