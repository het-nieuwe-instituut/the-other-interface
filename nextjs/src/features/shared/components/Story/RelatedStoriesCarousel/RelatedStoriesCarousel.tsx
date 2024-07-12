'use client'
import { useClientPagination } from '@/features/editorial/components/useClientPagination'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoryMetaByIdQuery } from '@/features/shared/hooks/queries/useStoryMetaByIdQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import { CATEGORIES } from '@/features/shared/utils/categories'
import {
  CarouselGrid,
  CarouselGridCard,
  CarouselGridCardWrapper,
  CarouselGridFooter,
  CarouselGridPagination,
  CarouselGridTitle,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import ErrorBox from '../../Error/ErrorBox'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'

export const RelatedStoriesCarousel = () => {
  const params = useParams()
  const id = params?.id as string

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
  const stories = useMemo(() => storiesToCarouselDataMapper(relatedStories) ?? [], [relatedStories])

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
    <>
      <div className="hidden lg:block">
        <RelatedStoriesCarouselContent cols={4} stories={stories} />
      </div>
      <div className="block lg:hidden">
        <RelatedStoriesCarouselContent cols={1} stories={stories} />
      </div>
    </>
  )
}

export const RelatedStoriesCarouselContent = ({
  cols,
  stories,
}: {
  cols: 1 | 2 | 3 | 4
  stories: NonNullable<ReturnType<typeof storiesToCarouselDataMapper>>
}) => {
  const lang = useLocale()
  const { t: tStories } = useTypeSafeTranslation('stories')

  const { nodes, lastPage, page, next, previous } = useClientPagination({
    items: stories,
    itemsInPage: cols,
  })

  return stories && stories.length > 0 ? (
    <CarouselGrid>
      <CarouselGridTitle>{`${tStories('relatedStories')} (${stories.length})`}</CarouselGridTitle>
      <CarouselGridCardWrapper cols={cols}>
        {nodes.map(item => {
          const url = addLocaleToUrl(`/detail/${CATEGORIES.stories}/${item.id}`, lang)
          return (
            <CarouselGridCard
              key={item.id}
              title={item.title}
              description={item?.description ?? ''}
              image={item.url}
              href={url}
              alt={item.title ?? 'image'}
            ></CarouselGridCard>
          )
        })}
      </CarouselGridCardWrapper>
      <CarouselGridFooter>
        <div />
        {stories.length > cols && (
          <CarouselGridPagination
            onNext={next}
            onPrevious={previous}
            hidePrevious={page === 1}
            hideNext={page === lastPage || lastPage === 1}
          />
        )}
      </CarouselGridFooter>
    </CarouselGrid>
  ) : null
}
