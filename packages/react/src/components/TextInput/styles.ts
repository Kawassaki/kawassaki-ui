import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
    withError: {
      true: {
        border: '2px solid $dangerBase',
        span: {
          svg: {
            color: '$dangerBase',
          },
        },
      },
      false: {
        border: '2px solid $gray900',
        span: {
          svg: {
            color: '$gray400',
          },
        },
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$kawassakiMid',
    span: {
      svg: {
        color: '$kawassakiMid',
      },
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const PrefixIconWrapper = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: 'regular',
  marginRight: '$1',
})

export const SufixIconWrapper = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: 'regular',
  marginRight: '$1',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
