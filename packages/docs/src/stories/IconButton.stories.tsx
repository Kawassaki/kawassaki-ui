import type { Meta, StoryObj } from '@storybook/react'
import { Box, IconButton, IconButtonProps } from '@kawassaki-ui/react'
import { SignOut } from 'phosphor-react'

export default {
  title: 'Form/Icon Button',
  component: IconButton,
  args: {
    icon: <SignOut />,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {
  args: {},
}
export const Secondary: StoryObj<IconButtonProps> = {
  args: { variant: 'secondary' },
}
export const Tertiary: StoryObj<IconButtonProps> = {
  args: { variant: 'tertiary' },
}
