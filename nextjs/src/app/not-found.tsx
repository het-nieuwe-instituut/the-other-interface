'use client'
import {
  StaticPageContainer,
  StaticPageLink,
} from '@/features/shared/components/StaticPage/staticPageComponents'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

export default function NotFound() {
  const { t } = createTypeSafeTranslation('navigation')
  const linkLabel = t('error404Link')

  return (
    <StaticPageContainer title="" disableBelowTheFold>
      <div className="mb-40 min-h-[40vh] content-end px-6 text-blue-100">
        <h1 className={cn(TypographyVariants({ timesDot: '2xl' }), 'mb-2')}>
          {t('error404Title')}
        </h1>
        <p className={cn(TypographyVariants({ socialLarge: 'lg' }))}>
          {t('error404Description')}
          <StaticPageLink href="/" label={linkLabel || 'homepage'} />.
        </p>
      </div>
    </StaticPageContainer>
  )
}
