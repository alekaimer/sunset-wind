import type { Meta, StoryObj } from '@storybook/react'
import { TextWind, TextWindProps } from '@sunset-wind/react'

export default {
  title: 'Typography/TextWind',
  component: TextWind,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
} as Meta<TextWindProps>

export const Primary: StoryObj<TextWindProps> = {}

export const CustomTag: StoryObj<TextWindProps> = {
  args: {
    children: 'Custom wind text',
  },
}
