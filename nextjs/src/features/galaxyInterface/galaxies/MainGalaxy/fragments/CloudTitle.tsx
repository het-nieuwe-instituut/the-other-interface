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
    left={position.left ?? 'auto'}
    right={position.right ?? 'auto'}
    top={position.top ?? 'auto'}
    bottom={position.bottom ?? 'auto'}
    textStyle="headingTimesLarge.lg"
    color="blueAlpha.100"
    pointerEvents={'none'}
    fontSize={'2.5vw'}
    lineHeight={'3.2vw'}
    filter={'blur(1.5px)'}
  >
    {children}
  </Text>
)
