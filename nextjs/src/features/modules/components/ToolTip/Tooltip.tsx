import { Tooltip as ChakraTooltip, PlacementWithLogical } from '@chakra-ui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
  label?: string
  placement?: PlacementWithLogical
  right?: string
  top?: string
}

export const Tooltip: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <ChakraTooltip
      fontSize="sm"
      backgroundColor={'black'}
      padding={4}
      {...rest}
      position="absolute"
    >
      {children}
    </ChakraTooltip>
  )
}
