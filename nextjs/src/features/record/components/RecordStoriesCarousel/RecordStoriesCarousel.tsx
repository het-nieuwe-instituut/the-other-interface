'use client'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelationForRecord } from '@/features/shared/hooks/queries/useStoriesRelationForRecord'
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
import { imageCarouselDefaultSlidesMapper } from '@/features/ui/components/image-carousel/mappers'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import useTranslation from 'next-translate/useTranslation'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const RecordStoriesCarousel = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const type = CATEGORIES_TO_ENTITY_MAPPER[category]
  const lang = useLocale()

  const { data: recordRelatedStories, isLoading } = useStoriesRelationForRecord(type, id)
  const { t: tRecord } = useTranslation('record')

  const stories = useMemo(
    () =>
      storiesToCarouselDataMapper(
        recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories
      ),
    []
  )

  return (
    <div>
      {stories && stories.length > 0 && (
        <>
          <h2 className={TypographyVariants({ impact: 'lg', className: 'mb-4' })}>
            {tRecord('relatedStoriesCarousel')} ({stories.length})
          </h2>
          <ImageCarousel
            getSlidesConfiguration={max =>
              !stories
                ? []
                : imageCarouselDefaultSlidesMapper(stories, {
                    maxSlideWidth: max,
                    getHeight: story => story.height ?? 0,
                    getWidth: story => story.width ?? 0,
                    getCaption: story => story.description ?? undefined,
                  })
            }
          >
            {stories.map(item => {
              let href = `/detail/${CATEGORIES.stories}/${item.id}`
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
                  width={item.width}
                  height={item.height}
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
