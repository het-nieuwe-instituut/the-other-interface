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

  const { nodes, lastPage, page, next, previous } = useClientPagination({
    items: stories ?? [],
    itemsInPage: 4,
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

  const title = `${tRecord('relatedStoriesCarousel')} (${stories?.length})`

  return (
    <div>
      {stories && stories.length > 0 && (
        <CarouselGrid>
          <CarouselGridTitle>{title}</CarouselGridTitle>
          <CarouselGridCardWrapper cols={4}>
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
      )}
    </div>
  )
}
