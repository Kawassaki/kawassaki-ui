import { styled } from '../../styles'
import { Button } from '../Button'

export const ButtonWithIcon = styled(Button, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  borderRadius: '$sm',
  cursor: 'pointer',

  svg: {
    color: '$white',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    size: {
      sm: {
        height: '$8',
        width: '$8',
      },
      md: {
        height: '$10',
        width: '$10',
      },
      lg: {
        height: '$12',
        width: '$12',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
