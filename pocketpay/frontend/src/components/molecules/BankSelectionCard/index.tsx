import React from 'react';
import { Box, Button, styled } from '@mui/material';
import theme from '../../../theme/index';
import IconComponent from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import RIGHTARROW from '../../../../public/assets/icons/RightArrow.svg';
import { RIGHT_ARROW_ALT } from '../../../utils/constants';

export interface BankCardProps {
  icon: string;
  alt: string;
  bankName: string;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledContent = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '0px',
  backgroundColor: theme?.palette?.structuralColors?.white,
  '&:hover': {
    backgroundColor: theme.palette.structuralColors.hoverColor,
  },
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform:'none',
}));

const BankSelectionCard: React.FC<BankCardProps> = ({
  icon,
  alt,
  bankName,
  disabled,
  onClick,
}) => {
  return (
      <StyledContent
        data-testid="bank-selection-card"
        variant="text"
        onClick={onClick}
        disabled={disabled}
        disableRipple
        disableElevation
      >
        <Box display="flex" alignItems="center">
          <IconComponent data-testid="bank-icon" src={icon} alt={alt} />
          <Typography
            data-testid="avatar-typography-content"
            style={{ marginLeft: theme.spacing(2) }}
            variant="caption"
            color={theme.palette.text.highEmphasis}
          >
            {bankName}
          </Typography>
        </Box>
        <IconComponent src={RIGHTARROW} alt={RIGHT_ARROW_ALT} />
      </StyledContent>
  );
};

export default BankSelectionCard;