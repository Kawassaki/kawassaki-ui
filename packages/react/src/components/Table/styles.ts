import { styled } from '../../styles'

export const TableContainer = styled('div', {
  overflow: 'auto',
})

export const CustomTable = styled('table', {
  width: '100%',
  borderSpacing: '0 $2',
  backgroundColor: '$gray700',
  fontFamily: '$default',
  borderRadius: '$sm',
  thead: {
    fontWeight: '$bold',
  },

  tbody: {
    fontWeight: '$regular',
  },

  th: {
    color: '$gray200',
    padding: '$4 $6',
    textAlign: 'left',
    lineHeight: '$base',
    borderBottom: '2px solid $gray400',
  },

  td: {
    color: '$gray200',
    padding: '$4 $6',
    borderRadius: '$1',
    borderBottom: '1px solid $gray500',
  },
})
