import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
type Props = {
  href: string
  hide?: boolean
  disabled?: boolean
}

export const GoButton: React.FC<Props> = ({ hide = false, disabled }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <button
      form="search-form"
      type="submit"
      value={'Submit'}
      disabled={disabled}
      className={cn(
        'inline-block rounded-[3px] px-[7px] py-[6px] text-pink-100 transition-colors duration-200 ',
        !disabled && 'hover:bg-pink-100 hover:text-blue-100',
        'disabled:cursor-not-allowed disabled:opacity-60',
        hide ? 'hidden' : 'visible'
      )}
    >
      <span className={cn('text-pink.100', TypographyVariants({ socialLarge: 'md' }))}>
        {t('go')}
      </span>
    </button>
  )
}
