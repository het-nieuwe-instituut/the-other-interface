import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTypeSafeTranslation } from '../../hooks/translations'

const ErrorBox = () => {
  const { t } = useTypeSafeTranslation('common')
  return <p className={TypographyVariants({ social: 'lg' })}>{t('somethingWentWrongAndRetry')}</p>
}

export default ErrorBox
