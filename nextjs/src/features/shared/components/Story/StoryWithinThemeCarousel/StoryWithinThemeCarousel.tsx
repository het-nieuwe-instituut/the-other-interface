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
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import ErrorBox from '../../Error/ErrorBox'
import { ThemedSpinner } from '../../Loading/ThemedSpinner/ThemedSpinner'

const ITEMS_IN_PAGE = 4
export const StoryWithinThemeCarousel = () => {
  const params = useParams()
  const id = params?.id as string
  const lang = useLocale()

  const { data, isLoading, isError } = useStoriesRelatedByThemeQuery(id)
  const { t: tStories } = useTypeSafeTranslation('stories')
  const stories = useMemo(
    () => storiesToCarouselDataMapper(data?.storiesRealtedWithinTheme?.stories) ?? [],
    [data?.storiesRealtedWithinTheme?.stories]
  )
  const { nodes, lastPage, page, next, previous } = useClientPagination({
    items: stories,
    itemsInPage: ITEMS_IN_PAGE,
  })

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
          <CarouselGrid>
            <CarouselGridTitle>{`${tStories('moreOnTheme')} (${
              stories.length
            })`}</CarouselGridTitle>
            <CarouselGridCardWrapper cols={ITEMS_IN_PAGE}>
              {nodes.map(item => {
                const url = addLocaleToUrl(`/detail/stories/${item.id}`, lang)
                return (
                  <CarouselGridCard
                    key={item.id}
                    title={item.title}
                    description={item?.description}
                    image={item.url}
                    href={url}
                    alt={item.title}
                  ></CarouselGridCard>
                )
              })}
            </CarouselGridCardWrapper>
            <CarouselGridFooter>
              <div />
              {stories.length > 4 && (
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
