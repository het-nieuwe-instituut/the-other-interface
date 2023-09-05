import { Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import { CloudCategory } from '@/features/shared/types/categories'
import { Position } from '@/features/shared/types/position'

interface Props {
  position: Position
  children: Pick<TranslationKeys['homepage'], keyof CloudCategory>
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text
    position="absolute"
    textStyle="headingTimesLarge.lg"
    color="blueAlpha.100"
    style={{ ...position }}
  >
    {children}
  </Text>
)
