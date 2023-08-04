import { Text } from '@chakra-ui/react'

import { CollectionType, Position } from './types'

interface Props {
  position: Position
  children: CollectionType
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text position="absolute" textStyle="headingTimesLarge.lg" style={{ ...position }}>
    {children}
  </Text>
)
