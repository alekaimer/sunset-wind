import { Meta, StoryObj } from '@storybook/react'
import { InputText, InputTextProps } from '@sunset-wind/react'

export default {
  title: 'Forms/InputText',
  component: InputText,
  args: {
    placeholder: 'your placeholder text here',
  },
} as Meta<InputTextProps>

export const Default: StoryObj<InputTextProps> = {
  argTypes: {},
}

export const WithPrefix: StoryObj<InputTextProps> = {
  args: {
    prefix: 'https://',
    placeholder: 'enterWithYourSiteHere.io',
  },
}
