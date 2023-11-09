import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DatePickerComponent from '.'
import { DOB } from '../../../utils/constants'
import { UserBusinessDetailsContextProvider } from '../../../context/UserBusinessDetailsContext'

export default {
  title: 'Atoms/DatePicker',
  component: DatePickerComponent,
} as ComponentMeta<typeof DatePickerComponent>

const Template: ComponentStory<typeof DatePickerComponent> = (args) => (
  <UserBusinessDetailsContextProvider><DatePickerComponent {...args} /></UserBusinessDetailsContextProvider>
)

export const Default = Template.bind({})
Default.args = {
  label: DOB,
}
