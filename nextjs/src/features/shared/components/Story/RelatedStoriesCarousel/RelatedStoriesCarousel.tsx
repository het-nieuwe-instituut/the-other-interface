'use client'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import { CATEGORIES } from '@/features/shared/utils/categories'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import ErrorBox from '../../Error/ErrorBox'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

export const RelatedStoriesCarousel = () => {
  const params = useParams()
  const id = params?.id as string
  const lang = useLocale()
  const { t: tStories } = useTypeSafeTranslation('stories')

  const { data, isLoading, isError } = useStoryMetaByIdQuery({
    id,
    options: { fetchOnWindowFocus: false },
  })

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
          <h2 className={TypographyVariants({ responsive: 'title', className: 'mb-4' })}>
            {tStories('relatedStories')} ({stories.length})
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
