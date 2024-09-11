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
import { getTriplyOrStoryHref } from '@/features/editorial/components/getTriplyOrStoryHref'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { imageBasePath } from '../modulesConstants'

interface Props {
  grid?: DeepPartial<ComponentModulesGridModule> | null
  highlight?:
    | (Required<Pick<ComponentModulesHighlight, 'title'>> & DeepPartial<ComponentModulesHighlight>)
    | null

  carousel?: DeepPartial<ComponentModulesCarousel> | null
  imageCarousel?: DeepPartial<ComponentModulesImageCarousel> | null
}

export function LandingPageComponentRenderer({ grid, highlight, imageCarousel, carousel }: Props) {
  const lang = useLocale()

  return (
    <div className={cn('pt-10 flex flex-col gap-[40px] w-full')}>
      {imageCarousel && (
        <ImageCarousel>
          {imageCarousel.items?.map(item => {
            const attributes = item?.image?.data?.attributes
            const href = getTriplyOrStoryHref({
              story: item?.story,
              triply_record: item?.triply_record,
            })
            const hrefWithLang = href ? addLocaleToUrl(href, lang) : undefined

            const url = attributes?.url ? imageBasePath(attributes?.url.toString()) : undefined
            if (!attributes || !attributes.height || !attributes.width || !attributes.url || !url) {
              return null
            }
            return (
              <ImageCarouselItem
                href={hrefWithLang}
                key={item.id}
                src={url}
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
