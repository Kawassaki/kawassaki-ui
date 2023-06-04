import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  fontFamily: '$default',
  textAlign: 'left',
  position: 'relative',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  svg: {
    cursor: 'pointer',
  },
})

export const SelectInput = styled('div', {
  padding: '$2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
  color: '$gray900',
  borderRadius: '$sm',
  svg: {
    transition: 'all 0.4s ease',
    color: '$gray100',
  },
  p: {
    color: '$gray200',
  },

  variants: {
    isOpen: {
      true: {
        border: '2px solid $ignite300',
        svg: {
          transform: 'rotateZ(180deg)',
        },
      },
      false: {
        border: '2px solid $gray900',
        svg: {
          transform: 'rotateZ(360deg)',
        },
      },
    },
  },
})

export const SelectMenu = styled('div', {
  position: 'absolute',
  transform: 'translateY(4px)',
  width: '-webkit-fill-available',
  borderRadius: '$sm',
  overflow: 'auto',
  maxHeight: '150px',
  backgroundColor: '$gray900',
  zIndex: '99',
  padding: 0,
})

export const SelectItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  color: '$gray400',

  '&:hover': {
    backgroundColor: '$gray600',
  },
  variants: {
    variant: {
      selected: {
        backgroundColor: '$gray600',
        color: '$gray100',
      },
      unselected: {
        backgroundColor: 'transparent',
        color: '$gray100',
      },
    },
  },
  defaultVariants: {
    variant: 'unselected',
  },
})

export const SelectTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
})

export const SelectTagItem = styled('div', {
  backgroundColor: '$gray600',
  padding: '$1 $2',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
})

export const SelectTagClose = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const SearchBox = styled('div', {})
export const SelectItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0,
})
