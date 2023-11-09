import React from 'react';
import Typography from '../../atoms/Typography';
import { Box } from '@mui/material';
import theme from '../../../theme';
import RadioButton from '../../atoms/RadioButton';

export interface AddressCardProps {
  style?: React.CSSProperties;
  head?: string;
  text?: string;
}

const AddressCard: React.FC<AddressCardProps> = ({ head, style, text }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    transition: 'background-color 0.3s ease',
    width: theme.spacing(129),
    ...style
  };

  return (
    <Box
      style={containerStyle}
      data-testid="address-card"
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.structuralColors.hoverColor
        }
      }}>
      <RadioButton value={''} label={''} />
      <Box flexDirection="row">
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.mediumEmphasis,
            marginTop: theme.spacing(3)
          }}>
          {head}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: theme.spacing(104),
            height: theme.spacing(18),
            top: theme.spacing(12),
            left: theme.spacing(19),
            marginTop: theme.spacing(3)
          }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default AddressCard;
