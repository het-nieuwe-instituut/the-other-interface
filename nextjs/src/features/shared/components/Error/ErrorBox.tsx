import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { cn } from '@/features/ui/utils/cn'

const ErrorBox = ({ className }: { className?: string }) => {
  const { t } = useTypeSafeTranslation('common')
  return (
    <p className={cn(TypographyVariants({ social: 'lg' }), className)}>
      {t('somethingWentWrongAndRetry')}
    </p>
  )
}

export default ErrorBox
