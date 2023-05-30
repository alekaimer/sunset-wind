import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@sunset-wind/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    tagName: {
      control: {
        type: 'select',
        options: ['p', 'span'],
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom wind text witg span tag.',
    tagName: 'span',
  },
}
