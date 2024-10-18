'use client'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useClientPagination } from '@/features/editorial/components/useClientPagination'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useStoriesRelatedByThemeQuery } from '@/features/shared/hooks/queries/useStoriesRelationWithinThemeQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { storiesToCarouselDataMapper } from '@/features/shared/mappers/storiesToCarouselDataMapper'
import {
  CarouselGrid,
  CarouselGridCard,
  CarouselGridCardWrapper,
  CarouselGridFooter,
  CarouselGridPagination,
  CarouselGridTitle,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { useMemo } from 'react'
import ErrorBox from '../../Error/ErrorBox'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'

interface StoryWithinThemeCarouselProps {
  themeIds: string[]
  id: string
}

export const StoryWithinThemeCarousel = ({ themeIds, id }: StoryWithinThemeCarouselProps) => {
  const { data, isLoading, isError } = useStoriesRelatedByThemeQuery(id, themeIds)

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

  if (!data.stories.data || !data.stories.data?.length) {
    return null
  }

  // we don't need to memoize before loading the data, so no need to call this before the early returns
  // if we are keen on sticking to hook rules, we can move the below part to a separate component
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const stories = useMemo(
    () => storiesToCarouselDataMapper(data?.stories.data) ?? [],
    [data?.stories.data]
  )

  return (
    <>
      <div className="hidden carouselDesktop:block">
        <StoryWithinThemeCarouselContent cols={4} stories={stories} />
      </div>
      <div className="hidden md:block carouselDesktop:hidden">
        <StoryWithinThemeCarouselContent cols={3} stories={stories} />
      </div>
      <div className="block md:hidden">
        <StoryWithinThemeCarouselContent cols={1} stories={stories} />
      </div>
    </>
  )
}

export const StoryWithinThemeCarouselContent = ({
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

  return (
    <div>
      {stories && stories.length > 0 && (
        <>
          <CarouselGrid>
            <CarouselGridTitle superscript={stories.length}>
              {`${tStories('moreOnTheme')}`}
            </CarouselGridTitle>
            <CarouselGridCardWrapper cols={cols}>
              {nodes.map(item => {
                const url = addLocaleToUrl(`/detail/stories/${item.id}`, lang)
                return (
                  <CarouselGridCard
                    key={item.id}
                    title={item.title}
                    description={item?.description || ''}
                    image={item.url}
                    href={url}
                    alt={item.alt ? item.alt : item.title || 'image'}
                  ></CarouselGridCard>
                )
              })}
            </CarouselGridCardWrapper>
            <CarouselGridFooter>
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
        </>
      )}
    </div>
  )
}
