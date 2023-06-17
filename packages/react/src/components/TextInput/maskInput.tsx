import {
  ChangeEvent,
  ComponentProps,
  ElementRef,
  forwardRef,
  useMemo,
  useState,
} from 'react'
import { Input } from './styles'

export interface MaskInputProps
  extends Omit<ComponentProps<typeof Input>, 'size' | 'value'> {
  mask: string
}

export const InputMask = forwardRef<ElementRef<typeof Input>, MaskInputProps>(
  ({ mask, onChange, ...props }, ref) => {
    const [rawValue, setRawValue] = useState('')

    const maskedValue = useMemo(() => {
      let masked = ''
      let rawIndex = 0

      for (let i = 0; i < mask.length; i++) {
        const maskChar = mask[i]
        const rawChar = rawValue[rawIndex]

        if (!rawChar) {
          break
        }

        if (maskChar === '9' && /^\d$/.test(rawChar)) {
          masked += rawChar
          rawIndex++
        } else if (maskChar === 'A' && /^[A-Za-z]$/.test(rawChar)) {
          masked += rawChar
          rawIndex++
        } else {
          masked += maskChar
        }
      }

      return masked
    }, [mask, rawValue])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value
      const cleanedValue = inputValue.replace(/[^\dA-Za-z]/g, '')
      if (inputValue.length <= mask.length) {
        setRawValue(cleanedValue)
      }
    }

    return (
      <Input
        ref={ref}
        type="text"
        value={maskedValue}
        onChange={handleChange}
        {...props}
      />
    )
  },
)

InputMask.displayName = 'InputMask'
