import { Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import { CloudCategory } from '@/features/shared/types/categories'

import { Position } from './types'

interface Props {
  position: Position
  children: Pick<TranslationKeys['homepage'], keyof CloudCategory>
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text
    position="absolute"
    textStyle="headingTimesLarge.lg"
    filter={'blur(2px)'}
    style={{ ...position }}
  >
    {children}
  </Text>
)
