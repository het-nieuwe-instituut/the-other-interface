import { cn } from '@/features/ui/utils/cn'
import { Highlight } from '@/features/ui/components/highlight/Highlight'

import { GenericCardGridWithClientPagination } from '@/features/editorial/components/GenericCardGridWithClientPagination'
import {
  ComponentModulesCarousel,
  ComponentModulesGridModule,
  ComponentModulesHighlight,
  ComponentModulesImageCarousel,
} from 'src/generated/graphql'
import { DeepPartial } from '@/features/shared/types/helpers'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'

interface Props {
  grid?: DeepPartial<ComponentModulesGridModule> | null
  highlight?:
    | (Required<Pick<ComponentModulesHighlight, 'title'>> & DeepPartial<ComponentModulesHighlight>)
    | null

  carousel?: DeepPartial<ComponentModulesCarousel> | null
  imageCarousel?: DeepPartial<ComponentModulesImageCarousel> | null
}

export function LandingPageComponentRenderer({ grid, highlight, imageCarousel, carousel }: Props) {
  console.log('here', carousel)
  return (
    <div className={cn('px-6 pt-0 flex flex-col gap-[40px]', 'pt-10')}>
      {imageCarousel && (
        <ImageCarousel>
          {imageCarousel.images?.data?.map(item => {
            const attributes = item?.attributes

            if (!attributes || !attributes.height || !attributes.width || !attributes.url) {
              return null
            }
            return (
              <ImageCarouselItem
                key={item.id}
                src={attributes.url}
                // TODO: add alt text instead of caption
                alt={attributes.caption ?? ''}
                caption={attributes.caption ?? undefined}
              />
            )
          }) ?? []}
        </ImageCarousel>
      )}
      {/* {carousel &&
        <CarouselModule
          component={component as ComponentModulesCarousel}
        />
      } */}
      {highlight && <Highlight component={highlight} />}
      {grid && <GenericCardGridWithClientPagination grid={grid} />}
    </div>
  )
}
