import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
type Props = {
  href: string
  hide?: boolean
  onClick?: () => void
}

export const GoButton: React.FC<Props> = ({ hide = false, href, onClick }) => {
  const { t } = useTypeSafeTranslation('common')

  return (
    <DelayedNextLinkWithZoomAnimationsContext
      delay={600}
      animation="forward"
      href={href}
      onClick={onClick}
      className={cn(
        'rounded-[3px] px-[7px] py-[6px] text-pink-100 transition-colors duration-200 hover:bg-pink-100 hover:text-blue-100',
        hide ? 'hidden' : 'visible'
      )}
    >
      <span className={cn('text-pink.100', TypographyVariants({ socialLarge: 'md' }))}>
        {t('go')}
      </span>
    </DelayedNextLinkWithZoomAnimationsContext>
  )
}
