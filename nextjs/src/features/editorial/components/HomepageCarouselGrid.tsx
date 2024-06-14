import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import {
  CarouselGrid,
  CarouselGridTitle,
  CarouselGridCardWrapper,
  CarouselGridCard,
  CarouselGridFooter,
  CarouselGridLink,
  CarouselGridPagination,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { cn } from '@/features/ui/utils/cn'
import { useMemo, useState } from 'react'
import { HomepageQuery, EnumComponentmodulescarouselVariant } from 'src/generated/graphql'

type Carousel = NonNullable<
  NonNullable<HomepageQuery['homepage']['data']['attributes']>['carousel']
>
export const HomepageCarouselGrid = ({
  carousel,
  cols: forcedCols,
  className,
}: {
  carousel: Carousel
  cols?: 1 | 2 | 3 | 4
  className?: string
}) => {
  const items = carousel.images ?? []
  const cols: 1 | 2 | 3 | 4 = useMemo(() => {
    if (forcedCols) {
      return forcedCols
    }
    if (carousel.variant === EnumComponentmodulescarouselVariant.FourUp) {
      return 4
    }
    if (carousel.variant === EnumComponentmodulescarouselVariant.ThreeUp) {
      return 3
    }
    if (carousel.variant === EnumComponentmodulescarouselVariant.TwoUp) {
      return 2
    }
    return 4
  }, [carousel.variant, forcedCols])

  const lastPage = Math.ceil(items.length / cols) || 1
  const limitedData = items.slice(0, cols)
  const [page, setPage] = useState(1)
  const [nodes, setNodes] = useState(limitedData)

  if (!items || items.length === 0) {
    return <ErrorBox />
  }

  return (
    <CarouselGrid className={cn('w-full', className)}>
      {carousel.title ? <CarouselGridTitle>{carousel.title}</CarouselGridTitle> : undefined}
      {nodes && (
        <CarouselGridCardWrapper cols={cols}>
          {nodes.map(item => {
            return (
              <CarouselGridCard
                key={item.id}
                title={item.title ?? undefined}
                description={item.description ?? undefined}
                image={item.image?.data?.attributes?.url ?? undefined}
                href={getTriplyOrStoryHref({
                  story: item.story,
                  triply_record: item.triply_record,
                })}
                alt={item.alt_text ?? ''}
              ></CarouselGridCard>
            )
          })}
        </CarouselGridCardWrapper>
      )}

      <CarouselGridFooter>
        {carousel.explore_collection_button && carousel.explore_collection_button.url && (
          <CarouselGridLink href={carousel.explore_collection_button.url}>
            {carousel.explore_collection_button.text ?? ''}
          </CarouselGridLink>
        )}

        {items.length > cols && (
          <CarouselGridPagination
            className="ml-auto"
            onNext={() => {
              const newPage = page + 1
              if (newPage > lastPage) {
                return
              }
              const newNodes = items.slice((newPage - 1) * cols, newPage * cols)
              console.log('newNodes', newPage)
              setPage(newPage)
              setNodes(newNodes)
            }}
            onPrevious={() => {
              const newPage = page - 1
              if (newPage < 1) {
                return
              }
              const newNodes = items.slice((newPage - 1) * cols, newPage * cols)
              setPage(newPage)
              setNodes(newNodes)
            }}
            hidePrevious={page === 1}
            hideNext={page === lastPage || lastPage === 1}
          />
        )}
      </CarouselGridFooter>
    </CarouselGrid>
  )
}

function getTriplyOrStoryHref({
  story,
  triply_record,
}: {
  story?: NonNullable<Carousel['images']>[number]['story']
  triply_record?: NonNullable<Carousel['images']>[number]['triply_record']
}) {
  if (triply_record && triply_record.data) {
    return `details/${triply_record.data.attributes.type}/${triply_record.data.attributes.recordId}`
  }
  if (story && story.data) {
    return `details/stories/${story.data.id}`
  }
  return undefined
}
