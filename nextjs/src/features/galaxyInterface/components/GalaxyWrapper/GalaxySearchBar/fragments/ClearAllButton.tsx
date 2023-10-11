import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text, Button } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const ClearAllButton: React.FC<Props> = ({ handleClick }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <Button
      bg="transparent"
      border={'none'}
      padding={'0'}
      minWidth="auto"
      borderBottom={'1px solid'}
      borderRadius={'0'}
      borderColor={'navyAlpha.100'}
      onClick={handleClick}
      color={'navyAlpha.100'}
      _hover={{ bg: 'navyAlpha.100', color: 'blueAlpha.100' }}
      transition="all 0.2s ease-in-out"
    >
      <Text textStyle="socialLarge.md"> {t('clearAll')}</Text>
    </Button>
  )
}
