import { Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'

import { CollectionType, Position } from './types'

interface Props {
  position: Position
  children: Pick<TranslationKeys['homepage'], keyof CollectionType>
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text position="absolute" textStyle="headingTimesLarge.lg" style={{ ...position }}>
    {children}
  </Text>
)
