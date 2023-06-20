import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Modal,
  ModalProps,
  Select,
  Text,
  TextInput,
} from '@kawassaki-ui/react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {},
} as Meta<ModalProps>

export const ModalSmall: StoryObj<ModalProps> = {
  args: {},
  decorators: [
    () => {
      const [showModal, setShowModal] = useState(false)
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
          <Button onClick={() => setShowModal(true)}>Open a new modal</Button>
          <Modal
            ref={ref}
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            size="sm"
            modalTitle="Form fields"
            overlay="high"
            shouldCloseOnOutsideClick={false}
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}

export const ModalMedium: StoryObj<ModalProps> = {
  args: {},
  decorators: [
    () => {
      const [showModal, setShowModal] = useState(false)
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
          <Button onClick={() => setShowModal(true)}>Open a new modal</Button>
          <Modal
            ref={ref}
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            size="md"
            modalTitle="Form fields"
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}

export const ModalLarge: StoryObj<ModalProps> = {
  args: {},
  decorators: [
    () => {
      const [showModal, setShowModal] = useState(false)
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
          <Button onClick={() => setShowModal(true)}>Open modal</Button>
          <Modal
            ref={ref}
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            size="lg"
            modalTitle="Form Fields"
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}

export const ModalFull: StoryObj<ModalProps> = {
  args: {},
  decorators: [
    () => {
      const [showModal, setShowModal] = useState(false)
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
          <Button onClick={() => setShowModal(true)}>Open a new modal</Button>
          <Modal
            ref={ref}
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            size="full"
            modalTitle="Form fields"
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}

export const ModalForm: StoryObj<ModalProps> = {
  decorators: [
    () => {
      const [showModal, setShowModal] = useState(false)
      const ref = useRef<HTMLDivElement | null>(null)
      const { handleSubmit, register, setValue } = useForm()

      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Button onClick={() => setShowModal(true)}>Open a new modal</Button>
          <Modal
            ref={ref}
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            size="md"
            modalTitle="Form fields"
            isModalWithActions
            onSecondaryButtonClick={() => setShowModal(false)}
            primaryButtonLabel="Save"
            secondaryButtonLabel="Cancel"
            as="form"
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" {...register('field1')} />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" {...register('field2')} />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" {...register('field3')} />
              <Text>Field 4</Text>
              <TextInput placeholder="Field 4" {...register('field4')} />
              <Text>Field 5</Text>
              <TextInput placeholder="Field 5" {...register('field5')} />
              <Text>Field 6</Text>
              <TextInput placeholder="Field 6" {...register('field6')} />
              <Text>Field 7</Text>
              <TextInput placeholder="Field 7" {...register('field7')} />
              <Text>Field 8</Text>
              <Select
                options={[
                  { key: '1', value: 'Option 1', selected: false },
                  { key: '2', value: 'Option 2', selected: false },
                  { key: '3', value: 'Option 3', selected: false },
                ]}
                onSelectOption={(item) => setValue('field8', item)}
              />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}
