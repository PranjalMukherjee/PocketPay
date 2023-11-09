import React from 'react';
import { Box, Stack, styled } from '@mui/material';
import Icon, { IconComponentProps } from '../../atoms/Icon';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';

export interface OptionCardProps extends IconComponentProps {
  caption?: string;
  onclick?: () => void;
  width?: string;
  height?: string;
  iconTitle?: string;
}

const CustomBox = styled(Box)((props: OptionCardProps) => ({
  border: `1px solid ${theme.palette.Greys.stroke}`,
  borderRadius: theme.spacing(2),
  width: props.width,
  height: props.height,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
}));

const IconLabelWrapper = styled(Stack)(
  ({ captionSpacing, iconWidth }: { captionSpacing: number; iconWidth: string }) => ({
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(3.25),
    paddingBottom: theme.spacing(captionSpacing),
    width: iconWidth
  })
);

const TextWrapper = styled(Box)`
  margin-left: 3.5rem;
  margin-top: -2.875rem;
  padding-top: 0.7rem;
  padding-bottom: 1rem;
`;

const OptionCard = (props: OptionCardProps) => {
  const captionSpacing = props.caption ? 1 : 4;
  return (
      <CustomBox onClick={props.onclick} {...props} data-testid="custom-box">
      <IconLabelWrapper captionSpacing={captionSpacing} iconWidth={props.width ? props.width : 'auto'}>
          <Icon src={props.src} alt={props.alt} />
        </IconLabelWrapper>
        {props.caption && (
          <TextWrapper>
            <Typography variant="body2">{props.iconTitle}</Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.lowEmphasis }}>
              {props.caption}
            </Typography>
          </TextWrapper>
        )}
      </CustomBox>
  );
};

export default OptionCard;
