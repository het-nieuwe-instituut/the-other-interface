import { Text } from '@chakra-ui/react'

import { Position } from './type'

interface Props {
  position: Position
  children: string
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text position="absolute" textStyle="headingTimesLarge.lg" style={{ ...position }}>
    {children}
  </Text>
)
