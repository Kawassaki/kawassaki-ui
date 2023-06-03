import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  textAlign: 'left',
  border: '1px solid $pink100',
  position: 'relative',
  borderRadius: '$xs',
})

export const SelectInput = styled('div', {
  padding: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
})

export const SelectMenu = styled('div', {
  position: 'absolute',
  transform: 'translateY(4px)',
  width: '100%',
  border: '1px solid $pink100',
  borderRadius: '$xs',
  overflow: 'auto',
  maxHeight: '150px',
  backgroundColor: '$white',
  zIndex: '99',
})

export const SelectItem = styled('div', {
  padding: '$2',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$pink100',
  },
  '&.selected': {
    backgroundColor: '$pink500',
    color: '$white',
  },
})

export const SelectTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
})

export const SelectTagItem = styled('div', {
  backgroundColor: '$pink200',
  padding: '$1 $2',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
})

export const SelectTagClose = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const SearchBox = styled('div', {
  padding: '$2',
  backgroundColor: '$pink100',
})

// input inside it
