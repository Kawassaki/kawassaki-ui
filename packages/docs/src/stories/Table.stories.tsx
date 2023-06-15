import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, Table, TableProps } from '@kawassaki-ui/react'

export default {
  title: 'Data Display/Table',
  component: Table,
  args: {
    thList: (
      <tr>
        <th>Title</th>
        <th>Value</th>
        <th>Category</th>
        <th>Date</th>
      </tr>
    ),
    trList: (
      <>
        <tr>
          <td>Title Test 1</td>
          <td>Value Test 1</td>
          <td>Category Test 1</td>
          <td>Date Test 1</td>
        </tr>
        <tr>
          <td>Title Test 2</td>
          <td>Value Test 2</td>
          <td>Category Test 2</td>
          <td>Date Test 2</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
        <tr>
          <td>Title Test 3</td>
          <td>Value Test 3</td>
          <td>Category Test 3</td>
          <td>Date Test 3</td>
        </tr>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Heading>Table Example</Heading>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TableProps>

export const Primary: StoryObj<TableProps> = {
  args: {},
}
