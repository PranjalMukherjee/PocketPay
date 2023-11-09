import { Avatar as AvatarComponent, AvatarProps } from '@mui/material'
import React from 'react'
import theme from '../../../theme/index'

interface MyAvatarProps extends AvatarProps {
  width?: string
  height?: string
}

const Avatar = ({
  height = theme.spacing(8.5),
  width = theme.spacing(8.5),
  ...props
}: MyAvatarProps) => {
  const avatarStyle = {
    height,
    width,
  };

  return <AvatarComponent style={avatarStyle} {...props} />;
}

export default Avatar;
