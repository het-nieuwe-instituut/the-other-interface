'use client'
import { cn } from '@/features/ui/utils/cn'
import { Highlight } from '@/features/ui/components/highlight/Highlight'

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
import { GenericCardGrid } from '@/features/editorial/components/GenericCardGrid'
import { GenericCarouselGridWithClientPagination } from '@/features/editorial/components/GenericCarouselGridWithClientPagination'

interface Props {
  grid?: DeepPartial<ComponentModulesGridModule> | null
  highlight?:
    | (Required<Pick<ComponentModulesHighlight, 'title'>> & DeepPartial<ComponentModulesHighlight>)
    | null

  carousel?: DeepPartial<ComponentModulesCarousel> | null
  imageCarousel?: DeepPartial<ComponentModulesImageCarousel> | null
}

export function LandingPageComponentRenderer({ grid, highlight, imageCarousel, carousel }: Props) {
  console.log(carousel)
  return (
    <div className={cn('pt-10 flex flex-col gap-[40px] w-full')}>
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
      {carousel && <GenericCarouselGridWithClientPagination carousel={carousel} />}
      {highlight && (
        <Highlight
          buttons={highlight.buttons}
          description={highlight.description}
          title={highlight.title}
          image={highlight.image}
          altText={highlight.image_alt_text}
        />
      )}
      {grid && <GenericCardGrid grid={grid} />}
    </div>
  )
}
