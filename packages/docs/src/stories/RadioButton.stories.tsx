import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Heading,
  RadioButton,
  RadioButtonProps,
} from '@kawassaki-ui/react'

export default {
  title: 'Form/Radio Button',
  component: RadioButton,
  args: {},
  decorators: [
    () => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Heading>Weather</Heading>
          <RadioButton
            fieldName="rain"
            value="field-rain"
            name="weather"
            onChange={(e) => console.log(e.target.value)}
            disabled
          />
          <RadioButton
            fieldName="wind"
            value="field-wind"
            name="weather"
            onChange={(e) => console.log(e.target.value)}
            disabled
          />
          <RadioButton
            fieldName="sun"
            value="field-sun"
            name="weather"
            onChange={(e) => console.log(e.target.value)}
            disabled
          />
        </Box>
      )
    },
  ],
} as Meta<RadioButtonProps>

export const Primary: StoryObj<RadioButtonProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}
