import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { cn } from '@/features/ui/utils/cn'

const ErrorBox = ({
  className,
  size = 'default',
}: {
  className?: string
  size?: 'default' | 'small'
}) => {
  const { t } = useTypeSafeTranslation('common')
  return (
    <p
      className={cn(
        size === 'default' && TypographyVariants({ socialLarge: 'lg', className }),
        size === 'small' && TypographyVariants({ socialLarge: 'sm', className })
      )}
    >
      {t('somethingWentWrongAndRetry')}
    </p>
  )
}

export default ErrorBox
