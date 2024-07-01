import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  onClick: () => void
  hide?: boolean
}

export const GoButton: React.FC<Props> = ({ onClick, hide = false }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <button
      className={cn(
        'rounded-[3px] px-[7px] py-[6px] text-pink-100 transition-colors duration-200 hover:bg-pink-100 hover:text-blue-100',
        hide ? 'hidden' : 'visible'
      )}
      onClick={onClick}
    >
      <span className={cn('text-pink.100', TypographyVariants({ socialLarge: 'md' }))}>
        {t('go')}
      </span>
    </button>
  )
}
