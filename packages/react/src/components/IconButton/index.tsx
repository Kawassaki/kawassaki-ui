import React, { ComponentProps, ElementType, ReactElement } from 'react'
import { ButtonWithIcon } from './styles'

export interface IconButtonProps extends ComponentProps<typeof ButtonWithIcon> {
  as?: ElementType
  icon: ReactElement
}

export function IconButton({ icon, variant }: IconButtonProps) {
  const Icon = () => {
    if (icon) {
      return React.cloneElement(icon, {
        ...icon.props,
        size: 20,
        weight: 'bold',
      })
    }
    return null
  }

  return (
    <ButtonWithIcon variant={variant}>
      <Icon />
    </ButtonWithIcon>
  )
}

IconButton.displayName = 'IconButton'
