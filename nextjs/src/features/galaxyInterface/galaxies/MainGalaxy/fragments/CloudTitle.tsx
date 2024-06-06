import { Text } from '@chakra-ui/react'
import { TranslationKeys } from 'locales/locales'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Position } from '@/features/shared/types/position'

interface Props {
  position: Position
  children: Pick<TranslationKeys['homepage'], keyof CloudCategory>
}

export const CloudTitle: React.FC<Props> = ({ position, children }) => (
  <Text
    position="absolute"
    style={{ ...position }}
    textStyle="headingTimesLarge.lg"
    color="blueAlpha.100"
    pointerEvents={'none'}
    fontSize={{ base: '20px', lg: '32px' }}
    lineHeight={{ base: '21px', lg: '33.6px', xl: '41.6px' }}
    filter={'blur(1.5px)'}
  >
    {children}
  </Text>
)
