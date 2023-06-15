import React, { ComponentProps, ElementType, ReactElement } from 'react'
import { TableContainer, CustomTable } from './styles'

export interface TableProps extends ComponentProps<typeof CustomTable> {
  as?: ElementType
  thList?: ReactElement
  trList: ReactElement
}

export function Table({ thList, trList }: TableProps) {
  const ThList = () => {
    if (thList) {
      return React.cloneElement(thList, {
        ...thList.props,
      })
    }
    return null
  }

  const TrList = () => {
    if (trList) {
      return React.cloneElement(trList, {
        ...trList.props,
      })
    }
    return null
  }

  return (
    <TableContainer>
      <CustomTable>
        <thead>
          <ThList />
        </thead>
        <tbody>
          <TrList />
        </tbody>
      </CustomTable>
    </TableContainer>
  )
}

Table.displayName = 'MultiStep'
