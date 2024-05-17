import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text, Button } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
  hide?: boolean
}

export const GoButton: React.FC<Props> = ({ handleClick, hide = false }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <Button
      bg="transparent"
      padding={'0'}
      p={'6px 7px'}
      borderRadius={'3px'}
      minWidth="auto"
      onClick={handleClick}
      color={'pinkAlpha.100'}
      _hover={{ borderColor: 'transparent', bg: 'pinkAlpha.100', color: 'blueAlpha.100' }}
      transition="all 0.2s ease-in-out"
      className={'border-0'}
      visibility={hide ? 'hidden' : 'visible'}
    >
      <Text className={'font-social-large text-sm text-pink.100'}>{t('go')}</Text>
    </Button>
  )
}
