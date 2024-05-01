import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends TooltipProps {
  xAxis?: string
  yAxis?: string
}

export const Tooltip: React.FC<Props> = ({ children, xAxis, yAxis, ...rest }) => {
  return (
    <ChakraTooltip
      fontSize="sm"
      backgroundColor={'black'}
      padding={4}
      position="absolute"
      {...rest}
      right={xAxis}
      top={yAxis}
    >
      {children}
    </ChakraTooltip>
  )
}
