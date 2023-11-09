import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectCountry from './index'

export default {
  title: 'Organisms/SelectCountry',
  component: SelectCountry,
} as ComponentMeta<typeof SelectCountry>

const Template: ComponentStory<typeof SelectCountry> = () => <SelectCountry handleSelectCountry={()=>{}} />

export const Default = Template.bind({})
Default.args = {}