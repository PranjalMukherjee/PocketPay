import React from 'react';
import ImageComponent from '../../atoms/Image';
import Typography from '../../atoms/Typography';
import { Box } from '@mui/material';
import theme from '../../../theme'

export interface MenuItemProps {
  imgSrc: string;
  imgAlt: string;
  variant?: string;
  style?: React.CSSProperties;
  text?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imgSrc, imgAlt, style, text }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    margin: theme.spacing(3.25),
    width: theme.spacing(7),
    height: theme.spacing(7),
  };

  return (
    <Box style={containerStyle} data-testid="hello">
      <ImageComponent imgSrc={imgSrc} imgAlt={imgAlt} style={iconStyle} />
      <Typography variant='body2'>{text}</Typography>
    </Box>
  );
};

export default MenuItem;
