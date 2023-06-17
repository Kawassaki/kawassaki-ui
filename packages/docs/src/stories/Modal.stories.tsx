import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Modal,
  ModalProps,
  Text,
  TextInput,
} from '@kawassaki-ui/react'
import { useRef, useState } from 'react'
// import { useRef } from 'react'

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

export const ModalWithActions: StoryObj<ModalProps> = {
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
            isModalWithActions
            onPrimaryButtonClick={() => setShowModal(false)}
            onSecondaryButtonClick={() => setShowModal(false)}
          >
            <Box>
              <Text>Field 1</Text>
              <TextInput placeholder="Field 1" />
              <Text>Field 2</Text>
              <TextInput placeholder="Field 2" />
              <Text>Field 3</Text>
              <TextInput placeholder="Field 3" />
              <Text>Field 4</Text>
              <TextInput placeholder="Field 4" />
              <Text>Field 5</Text>
              <TextInput placeholder="Field 5" />
              <Text>Field 6</Text>
              <TextInput placeholder="Field 6" />
              <Text>Field 7</Text>
              <TextInput placeholder="Field 7" />
            </Box>
          </Modal>
        </Box>
      )
    },
  ],
}
