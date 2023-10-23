import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text, Button } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const GoButton: React.FC<Props> = ({ handleClick }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <Button
      bg="transparent"
      border={'1px solid'}
      borderColor={'pinkAlpha.100'}
      padding={'0'}
      p={'6px 7px'}
      borderRadius={'3px'}
      minWidth="auto"
      onClick={handleClick}
      color={'pinkAlpha.100'}
      _hover={{ borderColor: 'transparent', bg: 'pinkAlpha.100', color: 'blueAlpha.100' }}
      transition="all 0.2s ease-in-out"
    >
      <Text textStyle="socialLarge.md">{t('go')}</Text>
    </Button>
  )
}
