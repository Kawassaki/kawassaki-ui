import { styled } from '../../styles'
import { Box } from '../Box'

export const ModalContainer = styled(Box, {
  position: 'fixed',
  zIndex: 3,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  margin: '$4',
  variants: {
    showModal: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
    overlay: {
      low: {
        backgroundColor: '$grayTransparency200',
      },
      medium: {
        backgroundColor: '$grayTransparency500',
      },
      high: {
        backgroundColor: '$grayTransparency900',
      },
    },
  },
  defaultVariants: {
    showModal: 'false',
    overlay: 'medium',
  },
})

export const ModalContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '$3',
  backgroundColor: '$gray800',
  margin: 'auto',
  padding: '$4',
  borderRadius: '$sm',
  height: '100%',
  width: '100%',
  variants: {
    size: {
      sm: {
        width: 390,
        height: 554,
      },
      md: {
        width: 768,
        height: 650,
      },
      lg: {
        width: 1420,
        height: 820,
      },
      full: {
        width: '100%',
        height: '100%',
      },
    },
  },
})

export const ModalChildren = styled('div', {
  overflow: 'auto',
  width: '100%',
  height: '100%',
})

export const CloseButton = styled('button', {
  all: 'unset',
  color: '$white',
  transition: 'color 0.2s ease-out',
  margin: '$1 0',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  '&:hover': {
    color: '$gray100',
    textDecoration: 'none',
    cursor: 'pointer',

    svg: {
      color: '$gray200',
    },
  },
})

export const ModalHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '2px solid $gray600',
  paddingBottom: '$2',
})

export const ModalActions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  gap: '$4',
  width: '100%',
  paddingTop: '$2',
  borderTop: '2px solid $gray600',
  marginTop: 'auto',
})
