'use client'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import { CATEGORIES } from '@/features/shared/utils/categories'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'
import useTranslation from 'next-translate/useTranslation'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const RelatedStoriesCarousel = () => {
  const params = useParams()
  const id = params?.id as string
  const lang = useLocale()
  const { t: tStories } = useTranslation('stories')

  const { data, isLoading } = useStoryMetaByIdQuery({ id, options: { fetchOnWindowFocus: false } })

  const story = data?.storyMetaByLocale?.data

  const relatedStories = useMemo(
    () => [
      // childs if story has childs
      ...(story?.attributes?.child_stories?.data ?? []),

      // parent if story has parent
      ...(story?.attributes?.parent_story?.data ? [story.attributes.parent_story.data] : []),

      // siblings if story has siblings
      ...(story?.attributes?.siblings ?? []),
    ],
    [
      story?.attributes?.child_stories?.data,
      story?.attributes?.parent_story?.data,
      story?.attributes?.siblings,
    ]
  )

  const stories = useMemo(() => storiesToCarouselDataMapper(relatedStories), [relatedStories])

  return (
    <div>
      {stories && stories.length > 0 && (
        <>
          <h1 className="mb-4">
            {tStories('relatedStories')} ({stories.length})
          </h1>
          <ImageCarousel>
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
