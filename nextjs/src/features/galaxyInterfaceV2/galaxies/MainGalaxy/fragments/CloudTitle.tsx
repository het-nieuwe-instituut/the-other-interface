import { Text, TextProps } from '@chakra-ui/react'

type Position = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface Props {
  children: string
  position: Position
}

export const CloudTitle: React.FC<Props> = ({ children, position }) => (
  <Text position="absolute" textStyle="headingTimesLarge.lg" style={{ ...position }}>
    {children}
  </Text>
)
