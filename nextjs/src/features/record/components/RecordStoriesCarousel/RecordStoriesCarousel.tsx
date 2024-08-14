'use client'
import { useClientPagination } from '@/features/editorial/components/useClientPagination'
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
  CarouselGrid,
  CarouselGridCard,
  CarouselGridCardWrapper,
  CarouselGridFooter,
  CarouselGridPagination,
  CarouselGridTitle,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const RecordStoriesCarousel = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const type = CATEGORIES_TO_ENTITY_MAPPER[category]

  const { data: recordRelatedStories, isLoading, isError } = useStoriesRelationForRecord(type, id)

  const stories = useMemo(
    () =>
      storiesToCarouselDataMapper(
        recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories
      ),
    [recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories]
  )

  if (isLoading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <ThemedSpinner />
      </div>
    )
  }

  if (isError) {
    return <ErrorBox />
  }

  return (
    <>
      <div className="block md:hidden">
        <RecordStoriesCarouselContent stories={stories ?? []} cols={1} />
      </div>
      <div className="hidden md:block carouselDesktop:hidden">
        <RecordStoriesCarouselContent stories={stories ?? []} cols={3} />
      </div>
      <div className="hidden carouselDesktop:block">
        <RecordStoriesCarouselContent stories={stories ?? []} cols={4} />
      </div>
    </>
  )
}

const RecordStoriesCarouselContent = ({
  stories,
  cols,
}: {
  stories: NonNullable<ReturnType<typeof storiesToCarouselDataMapper>>
  cols: 1 | 2 | 3 | 4
}) => {
  const lang = useLocale()

  const { nodes, lastPage, page, next, previous } = useClientPagination({
    items: stories ?? [],
    itemsInPage: cols,
  })

  const { t: tRecord } = useTypeSafeTranslation('record')

  const title = `${tRecord('relatedStoriesCarousel')}`

  return (
    <div>
      {stories && stories.length > 0 && (
        <CarouselGrid>
          <CarouselGridTitle superscript={stories.length}>{title}</CarouselGridTitle>
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
      )}
    </div>
  )
}
