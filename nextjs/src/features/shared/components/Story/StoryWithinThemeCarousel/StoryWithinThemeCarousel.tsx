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

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useParams } from 'next/navigation'
import ErrorBox from '../../Error/ErrorBox'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'

export const StoryWithinThemeCarousel = () => {
  const params = useParams()
  const id = params?.id as string
  const lang = useLocale()

  const { data, isLoading, isError } = useStoriesRelatedByTheme(id)
  const { t: tStories } = useTypeSafeTranslation('stories')

  const stories = storiesToCarouselDataMapper(data?.storiesRealtedWithinTheme?.stories)

  if (isError) {
    return <ErrorBox />
  }

  if (isLoading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <ThemedSpinner />
      </div>
    )
  }

  return (
    <div>
      {stories && stories.length > 0 && (
        <>
          <h1 className={TypographyVariants({ impact: 'lg', className: 'mb-4' })}>
            {tStories('moreOnTheme')} ({stories.length})
          </h1>

          <ImageCarousel>
            {stories.map(item => {
              const href = addLocaleToUrl(`/detail/${CATEGORIES.stories}/${id}`, lang)

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
