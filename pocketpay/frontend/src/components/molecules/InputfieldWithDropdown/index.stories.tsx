import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputfieldWithDropdown from './index'
import { DROPDOWN_RIGHT, DROPDOWN_RIGHT_VALUE, DROPDOWN_LEFT, DROPDOWN_LEFT_PH } from '../../../utils/constants'

export default {
  title: 'Molecules/InputfieldWithDropdown',
  component: InputfieldWithDropdown,
} as ComponentMeta<typeof InputfieldWithDropdown>

const Template: ComponentStory<typeof InputfieldWithDropdown> = (args) => (
  <InputfieldWithDropdown {...args} />
)

export const InputDropdownRight = Template.bind({})
InputDropdownRight.args = {
  isCurrency: true,
  placeholder: DROPDOWN_RIGHT,
  value: DROPDOWN_RIGHT_VALUE,
}

export const InputDropdownLeft = Template.bind({})
InputDropdownLeft.args = {
  isCurrency: false,
  placeholder: DROPDOWN_LEFT,
  mobileNumber: DROPDOWN_LEFT_PH,
}
