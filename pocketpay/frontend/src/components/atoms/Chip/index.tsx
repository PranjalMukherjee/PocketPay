import React from 'react'
import { Chip, ChipProps } from '@mui/material'

export interface TextChipProps extends ChipProps {
  label?: string
  style?: React.CSSProperties
}
export const TextChip = ({ label, style, ...props }: TextChipProps) => {
  return (
    <>
      <Chip sx={style} {...props} label={label} ></Chip>
    </>
  )
}