import React from 'react';
import MessageImg from '../../../../public/assets/images/email.svg';
import LinkImg from '../../../../public/assets/images/copylink.svg';
import ShareImage from '../../../../public/assets/images/sharetracking.svg';
import { Box, Dialog, Stack } from '@mui/material';
import styled from '@emotion/styled';
import IconComponent from '../../atoms/Icon';
import theme from '../../../theme/index';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import {
  SHARE_TRACKING_LINK,
  SHARE_TRACKING_LINK_VALUES,
  SHARE_LINK_ABOVE
} from '../../../utils/constants';

interface ShareTrackingProps {
  handleClick?: () => void;
  onCloseDialog?: () => void;
}

const CircularBox = styled(Box)({
  borderRadius: '50%',

  backgroundColor: 'white'
});
const IconBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const InnerBox = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledInnerStack = styled(Stack)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px'
});
const OuterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '30px',
  padding: '35px 35px',
  borderRadius: '20px'
});
const ShareTrackingModal = ({ handleClick, onCloseDialog }: ShareTrackingProps) => {
  return (
    <>
      <Dialog open={true} onClose={onCloseDialog}>
        <OuterBox>
          <InnerBox>
            <Typography
              variant="body1"
              color={`${theme.palette.text.highEmphasis}`}
              children={SHARE_TRACKING_LINK}
            />
          </InnerBox>

          <IconBox>
            <IconComponent src={ShareImage} alt="share" />
          </IconBox>

          <StyledInnerStack display="flex" flexDirection="row" justifyContent="space-between">
            {SHARE_TRACKING_LINK_VALUES.map((item) => (
              <Stack justifyContent="center" alignItems="center" key={item.id}>
                <CircularBox display="flex" justifyContent="center" alignItems="center">
                  <Button
                    variant="text"
                    onClick={handleClick}
                    children={
                      <IconComponent src={item.id === 1 ? MessageImg : LinkImg} alt={item.alt} />
                    }
                  />
                </CircularBox>
              </Stack>
            ))}
          </StyledInnerStack>
          <Typography
            variant="body3"
            color={`${theme.palette.text.mediumEmphasis}`}
            children={SHARE_LINK_ABOVE}
          />
        </OuterBox>
      </Dialog>
    </>
  );
};

export default ShareTrackingModal;
