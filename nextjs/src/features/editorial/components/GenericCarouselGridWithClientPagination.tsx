import { DeepPartial } from '@/features/shared/types/helpers'
import {
  CarouselGrid,
  CarouselGridCard,
  CarouselGridCardWrapper,
  CarouselGridDescription,
  CarouselGridFooter,
  CarouselGridLink,
  CarouselGridPagination,
  CarouselGridTitle,
} from '@/features/ui/components/carousel-grid/CarouselGrid'
import { cn } from '@/features/ui/utils/cn'
import { useMemo } from 'react'
import {
  ComponentModulesCarousel,
  EnumComponentmodulescarouselVariant,
} from 'src/generated/graphql'
import { useClientPagination } from './useClientPagination'
import { getTriplyOrStoryHref } from './getTriplyOrStoryHref'

export type CarouselGrid = DeepPartial<ComponentModulesCarousel>

export const GenericCarouselGridWithClientPagination = ({
  carousel,
}: {
  carousel: CarouselGrid
}) => {
  return (
    <>
      <div className="hidden w-full carouselDesktop:block">
        <Grid carousel={carousel} cols={4} />
      </div>
      <div className="hidden w-full md:block carouselDesktop:hidden">
        <Grid carousel={carousel} cols={3} />
      </div>
      <div className="block w-full md:hidden">
        <Grid carousel={carousel} cols={1} />
      </div>
    </>
  )
}

const Grid = ({
  carousel,
  cols: forcedCols,
  className,
}: {
  carousel: CarouselGrid
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
  const { nodes, page, lastPage, next, previous } = useClientPagination({
    items,
    itemsInPage: cols,
  })

  if (!items || items.length === 0) {
    return null
  }

  return (
    <CarouselGrid className={cn('w-full', className)}>
      {carousel.title ? <CarouselGridTitle>{carousel.title}</CarouselGridTitle> : undefined}
      {carousel.description ? (
        <CarouselGridDescription>{carousel.description ?? ''}</CarouselGridDescription>
      ) : undefined}
      {nodes && (
        <CarouselGridCardWrapper cols={cols}>
          {nodes.map(item => {
            if (!item) {
              return null
            }
            return (
              <CarouselGridCard
                key={item.id}
                title={item.title ?? undefined}
                description={item.description ?? undefined}
                image={item.image?.data?.attributes?.url ?? undefined}
                href={getTriplyOrStoryHref({
                  story: item.story ?? undefined,
                  triply_record: item.triply_record ?? undefined,
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

        {items.length > cols && items.length > 1 && (
          <CarouselGridPagination
            className="ml-auto"
            onNext={next}
            onPrevious={previous}
            hidePrevious={page === 1}
            hideNext={page === lastPage || lastPage === 1}
          />
        )}
      </CarouselGridFooter>
    </CarouselGrid>
  )
}
