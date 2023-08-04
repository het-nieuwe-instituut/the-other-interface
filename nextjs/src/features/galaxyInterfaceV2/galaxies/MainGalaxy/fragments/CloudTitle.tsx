import { Text } from '@chakra-ui/react'

type Position = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface Props {
  position: Position
  children: string
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text position="absolute" textStyle="headingTimesLarge.lg" style={{ ...position }}>
    {children}
  </Text>
)
