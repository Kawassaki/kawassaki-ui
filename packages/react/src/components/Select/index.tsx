import { Ref, forwardRef, useCallback, useEffect, useState } from 'react'
import { SelectContainer, SelectInput, SelectItem, SelectMenu } from './styles'
import { ArrowDown, Check } from 'phosphor-react'
import { Text } from '../Text'

interface OptionItem {
  key: string
  value: string
  selected: boolean
}
export interface SelectProps {
  options: OptionItem[]
  defaultOption?: string
}

export const Select = forwardRef(
  ({ options }: SelectProps, ref: Ref<HTMLDivElement>) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedOption, setSelectedOption] = useState<OptionItem | null>()

    const handleInputClick = () => {
      setShowMenu(!showMenu)
    }

    function handleSelectOption(item: OptionItem) {
      if (selectedOption && selectedOption.key === item.key) {
        setSelectedOption(null)
      } else {
        setSelectedOption(item)
      }
    }

    const handleClickOutside = useCallback(
      ({ target }: MouseEvent) => {
        if (ref) {
          if (!(ref as any).current.contains(target as Node)) {
            setShowMenu(false)
          }
        }
      },
      [ref],
    )

    const handleOnPressEscapeKey = (event: Event | KeyboardEvent) => {
      event = event || window.event
      let isEscape = false
      if ('key' in event) {
        isEscape = event.key === 'Escape' || event.key === 'Esc'
      } else {
        isEscape = (event as KeyboardEvent).code === '27'
      }
      if (isEscape) {
        setShowMenu(false)
      }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      document.onkeydown = handleOnPressEscapeKey

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.onkeydown = null
      }
    }, [handleClickOutside, ref])

    return (
      <SelectContainer ref={ref}>
        <SelectInput onClick={handleInputClick} isOpen={showMenu}>
          <Text> {!selectedOption ? 'Selecione' : selectedOption.value} </Text>
          <ArrowDown />
        </SelectInput>
        {showMenu ? (
          <SelectMenu>
            {options.map((item) => (
              <SelectItem
                key={item.key}
                variant={item.selected ? 'selected' : 'unselected'}
                onClick={() => handleSelectOption(item)}
              >
                {item.value}
                {selectedOption?.key === item.key ? <Check /> : null}
              </SelectItem>
            ))}
          </SelectMenu>
        ) : null}
      </SelectContainer>
    )
  },
)

Select.displayName = 'Select'
