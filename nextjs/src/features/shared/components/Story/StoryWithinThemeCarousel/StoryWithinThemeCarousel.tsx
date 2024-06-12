'use client'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelatedByTheme } from '@/features/shared/hooks/queries/useStoriesRelationWithinTheme'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import { CATEGORIES } from '@/features/shared/utils/categories'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'

import { TypographyVariants } from '@/features/ui/components/typography/variants'
import useTranslation from 'next-translate/useTranslation'
import { useParams } from 'next/navigation'

export const StoryWithinThemeCarousel = () => {
  const params = useParams()
  const id = params?.id as string
  const lang = useLocale()

  const { data } = useStoriesRelatedByTheme(id)
  const { t: tStories } = useTranslation('stories')

  const stories = storiesToCarouselDataMapper(data?.storiesRealtedWithinTheme?.stories)
  return (
    <div>
      {stories && stories.length > 0 && (
        <>
          <h1 className={TypographyVariants({ impact: 'lg', className: 'mb-4' })}>
            {tStories('moreOnTheme')} ({stories.length})
          </h1>

          <ImageCarousel>
            {stories.map(item => {
              let href = `/detail/${CATEGORIES.stories}/${id}`
              href = addLocaleToUrl(href, lang)

              if (!item || !item.height || !item.width || !item.url) {
                return null
              }
              return (
                <ImageCarouselItem
                  href={href}
                  key={item.id}
                  src={item.url}
                  alt={item.description ?? ''}
                  caption={item.description ?? undefined}
                />
              )
            }) ?? []}
          </ImageCarousel>
        </>
      )}
    </div>
  )
}
