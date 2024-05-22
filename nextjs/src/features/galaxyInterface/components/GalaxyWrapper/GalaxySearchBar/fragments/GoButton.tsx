import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text, Button } from '@chakra-ui/react'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

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
      <Text className={cn('text-pink.100', TypographyVariants({ social: 'md' }))}>{t('go')}</Text>
    </Button>
  )
}
