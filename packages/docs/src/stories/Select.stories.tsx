import type { Meta, StoryObj } from '@storybook/react'
import { Box, Select, SelectProps, Text } from '@kawassaki-ui/react'
import { useRef } from 'react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {},
  decorators: [
    () => {
      const ref = useRef<HTMLDivElement | null>(null)
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text>Selection Field</Text>
          <Select
            ref={ref}
            options={[
              { key: '1', value: 'Option 1', selected: false },
              { key: '2', value: 'Option 2', selected: false },
              { key: '3', value: 'Option 3', selected: false },
            ]}
          />
        </Box>
      )
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}
