import { Button } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const ClearButton: React.FC<Props> = ({ handleClick }) => {
  const { t } = useTypeSafeTranslation('category')
  return (
    <Button
      bg="transparent"
      border={'none'}
      minWidth="auto"
      onClick={handleClick}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      _focus={{ bg: 'transparent' }}
      transition="transform 0.2s ease-in-out"
      h={8}
      px={2}
      pt={1}
      pb={'2px'}
      textStyle={'socialLarge.lg'}
      textDecoration={'underline'}
    >
      <Text color={'pinkAlpha.100'}>{t('clear')}</Text>
    </Button>
  )
}
