import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled(Text, {
  display: 'block',
  position: 'relative',
  cursor: 'pointer',
  '--webkit-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  userSelect: 'none',
  paddingLeft: '$6',
})

export const Input = styled('input', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',

  '&:checked ~ span': {
    backgroundColor: '$kawassakiMid',
    '&:after': {
      display: 'block',
      top: '5px',
      left: '5px',
      width: '8px',
      height: '8px',
      borderRadius: '$full',
      backgroundColor: '$white',
    },
  },
})

export const Checkmark = styled('span', {
  position: 'absolute',
  top: '3px',
  left: 0,
  height: '18px',
  width: '18px',
  backgroundColor: '$gray600',
  borderRadius: '$full',

  '&:after': {
    content: '',
    position: 'absolute',
    display: 'none',
  },
})
// appearance: none;
// background-color: #fff;
// margin: 0;
// font: inherit;
// color: currentColor;
// width: 1.15em;
// height: 1.15em;
// border: 0.15em solid currentColor;
// border-radius: 50%;
// transform: translateY(-0.075em);
