'use client'
import { StaticPageContainer } from '@/features/shared/components/StaticPage/staticPageComponents'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

export default function Error() {
  const { t } = createTypeSafeTranslation('navigation')

  return (
    <StaticPageContainer disableBelowTheFold title="">
      <div className="mb-40 min-h-[40vh] content-end px-6 text-blue-100">
        <h1 className={cn(TypographyVariants({ timesDot: '2xl' }), 'mb-2')}>
          {t('error500Title')}
        </h1>
        <p className={cn(TypographyVariants({ socialLarge: 'lg' }))}>{t('error500Description')}</p>
      </div>
    </StaticPageContainer>
  )
}
