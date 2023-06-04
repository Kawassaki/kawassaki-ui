import React, {
  ComponentProps,
  ElementRef,
  ReactElement,
  forwardRef,
} from 'react'
import {
  Input,
  Prefix,
  SufixIconWrapper,
  PrefixIconWrapper,
  TextInputContainer,
} from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
  prefixIconComponent?: ReactElement
  suffixIconComponent?: ReactElement
  withError?: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      prefix,
      size,
      prefixIconComponent,
      suffixIconComponent,
      withError = false,
      ...props
    },
    ref,
  ) => {
    const PrefixIcon = () => {
      if (prefixIconComponent) {
        return (
          <PrefixIconWrapper>
            {React.cloneElement(prefixIconComponent, {
              ...prefixIconComponent.props,
              size: 20,
              weight: 'bold',
            })}
          </PrefixIconWrapper>
        )
      }
      return null
    }

    const SuffixIcon = () => {
      if (suffixIconComponent) {
        return (
          <SufixIconWrapper>
            {React.cloneElement(suffixIconComponent, {
              ...suffixIconComponent.props,
              size: 20,
              weight: 'bold',
            })}
          </SufixIconWrapper>
        )
      }
      return null
    }

    return (
      <TextInputContainer size={size} withError={withError}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <PrefixIcon />
        <Input ref={ref} {...props} />
        <SuffixIcon />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
