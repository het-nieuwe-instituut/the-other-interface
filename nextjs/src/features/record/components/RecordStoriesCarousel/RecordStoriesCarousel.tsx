'use client'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelationForRecord } from '@/features/shared/hooks/queries/useStoriesRelationForRecord'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  Category,
} from '@/features/shared/utils/categories'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const RecordStoriesCarousel = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const type = CATEGORIES_TO_ENTITY_MAPPER[category]
  const lang = useLocale()

  const { data: recordRelatedStories, isLoading, isError } = useStoriesRelationForRecord(type, id)
  const { t: tRecord } = useTypeSafeTranslation('record')

  const stories = useMemo(
    () =>
      storiesToCarouselDataMapper(
        recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories
      ),
    [recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories]
  )

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
          <h2 className={TypographyVariants({ impact: 'lg', className: 'mb-4' })}>
            {tRecord('relatedStoriesCarousel')} ({stories.length})
          </h2>
          <ImageCarousel>
            {stories.map(item => {
              const href = addLocaleToUrl(`/detail/${CATEGORIES.stories}/${item.id}`, lang)

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
