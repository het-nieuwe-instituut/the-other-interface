import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTypeSafeTranslation } from '../../hooks/translations'

const ErrorBox = ({ className }: { className?: string }) => {
  const { t } = useTypeSafeTranslation('common')
  return (
    <p className={TypographyVariants({ social: 'lg', className })}>
      {t('somethingWentWrongAndRetry')}
    </p>
  )
}

export default ErrorBox
