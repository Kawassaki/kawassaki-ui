import { useState } from 'react'
import { TextInput } from '../TextInput'
import {
  SearchBox,
  SelectContainer,
  SelectInput,
  SelectItem,
  SelectMenu,
} from './styles'

export interface SelectProps {}

export function Select() {
  const [showMenu, setShowMenu] = useState(false)

  const handleInputClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <SelectContainer>
      <SelectInput onClick={handleInputClick}>
        <div>Select </div>
      </SelectInput>
      {showMenu ? (
        <SelectMenu>
          <SearchBox>
            <TextInput />
          </SearchBox>

          <SelectItem>SelectedItem</SelectItem>
        </SelectMenu>
      ) : null}
    </SelectContainer>
  )
}
