import { ComponentProps, ElementRef, ElementType, forwardRef } from 'react'
import { Checkmark, Container, Input } from './styles'

export interface RadioButtonProps extends ComponentProps<typeof Input> {
  as?: ElementType
  fieldName: string
}

export const RadioButton = forwardRef<
  ElementRef<typeof Input>,
  RadioButtonProps
>(({ fieldName, disabled, ...props }, ref) => {
  return (
    <Container as="label">
      {fieldName}
      <Input ref={ref} type="radio" {...props} />
      <Checkmark />
    </Container>
  )
})

RadioButton.displayName = 'RadioButton'
