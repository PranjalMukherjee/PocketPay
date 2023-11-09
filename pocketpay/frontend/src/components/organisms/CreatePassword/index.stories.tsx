import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CreatePassword from './index'

export default {
  title: 'Organisms/CreatePassword',
  component: CreatePassword,
} as ComponentMeta<typeof CreatePassword>

const Template: ComponentStory<typeof CreatePassword> = () => <CreatePassword handleContinuePassword={()=>{}}/>

export const Default = Template.bind({})
Default.args = {}
