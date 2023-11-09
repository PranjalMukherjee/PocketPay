import React from 'react';
import { Box } from '@mui/material';
import Typography from '../../../components/atoms/Typography';
import MenuItem from '../../../components/molecules/MenuItem';
import Mybusiness from '../../../../public/assets/icons/MyBusiness.svg';
import Business from '../../../../public/assets/icons/Business-charity.svg';
import User from '../../../../public/assets/icons/User-Money.svg';
import theme from '../../../theme';
import { SENDING_MONEY_CARD_HEAD } from '../../../utils/constants';

export interface SendingMoneyCardProps {
  style?: React.CSSProperties;
}

const SendingMoneyCard = () => {
  const menuItems = [
    { imgSrc: Mybusiness, imgAlt: 'my-business', text: 'My business' },
    { imgSrc: User, imgAlt: 'someone-else', text: 'Someone else' },
    { imgSrc: Business, imgAlt: 'business-charity', text: 'Business or Charity' }
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '25vh' }}>
      <Box>
        <Typography variant="h1">{SENDING_MONEY_CARD_HEAD}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          width="20rem"
          gap={7}
          mt={3}
          sx={{
            borderColor: theme.palette.Greys.stroke,
            width: theme.spacing(129),
            height: theme.spacing(15),
            cursor: 'pointer',
            mt: theme.spacing(8)
          }}>
          {menuItems.map((menuItem, index) => (
            <Box
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.structuralColors.hoverColor,
                  borderRadius: theme.spacing(2)
                }
              }}>
              <MenuItem
                key={index}
                imgSrc={menuItem.imgSrc}
                imgAlt={menuItem.imgAlt}
                text={menuItem.text}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SendingMoneyCard;
