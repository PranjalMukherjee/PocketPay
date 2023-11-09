import React from 'react'
import { Grid, Typography } from '@mui/material'
import { AccountTypeCardProps  } from '../../../utils/types'
import { 
  ChildGrid11, 
  IconBox11, 
  ParentGrid11, 
  StyledBox, 
  StyledBox11, 
  StyledGrid2, 
  StyledTypo11, 
  TypoBox11 
} from '../../../utils/styledComponents'
import theme from '../../../theme'
import IconComponent from '../../atoms/Icon'

const AccountTypeCard = ({
  title,
  subtitle,
  data,
  handleSendMoney,
  handleAccountSetup,
}: AccountTypeCardProps) => {
  return (
    <Grid data-testid="category-selection">
        <StyledBox>
          <StyledGrid2>
                <Typography variant="h1" color={theme.palette.text.highEmphasis}>
                    {title}
                </Typography>
                <Typography variant="body3" color={theme.palette.text.mediumEmphasis}>
                    {subtitle}
                </Typography>
            </StyledGrid2>
        </StyledBox>
      <ParentGrid11>
        {data.map((details) => (
          <ChildGrid11
            key={details.name}
            onClick={
              details.name === data[0].name
                ? handleSendMoney
                : handleAccountSetup
            }
          >
            <StyledBox11
              data-testid="icon-with-typo"
              sx={{alignItems: 'center' }}
            >
                <IconBox11>
                    <IconComponent src={details.icon} alt="icon" />
                </IconBox11>
                <TypoBox11>
                   <StyledTypo11 variant="body2" color={theme.palette.text.highEmphasis}>
                        {details.name}
                   </StyledTypo11>
                   <Typography
                    variant="caption"
                    color={theme.palette.text.lowEmphasis}
                    >
                        {details.value}
                    </Typography>
                </TypoBox11>
             </StyledBox11>
          </ChildGrid11>
        ))}
      </ParentGrid11>
    </Grid>
  )
}

export default AccountTypeCard
