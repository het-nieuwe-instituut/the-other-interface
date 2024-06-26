// import { GenericCardGridWithClientPagination } from '@/features/editorial/components/GenericCardGridWithClientPagination'
// import {
//   ImageCarousel,
//   ImageCarouselItem,
// } from '@/features/ui/components/image-carousel/ImageCarousel'
import { cn } from '@/features/ui/utils/cn'
import { Highlight } from '@/features/ui/components/highlight/Highlight'

import { GenericCardGridWithClientPagination } from '@/features/editorial/components/GenericCardGridWithClientPagination'
import { ComponentModulesGridModule, ComponentModulesHighlight } from 'src/generated/graphql'
import { DeepPartial } from '@/features/shared/types/helpers'

interface Props {
  grid?: DeepPartial<ComponentModulesGridModule> | null
  highlight?:
    | (Required<Pick<ComponentModulesHighlight, 'title'>> & DeepPartial<ComponentModulesHighlight>)
    | null
}

export function LandingPageComponentRenderer({ grid, highlight }: Props) {
  return (
    <div className={cn('px-6 pt-0 flex flex-col gap-[40px]', 'pt-10')}>
      {/* {imageCarousel && <ImageCarousel component={imageCarousel}/>} */}
      {/* {carousel && <CarousellModule
        component={carousel}
        />} */}
      {highlight && <Highlight component={highlight} />}
      {grid && <GenericCardGridWithClientPagination grid={grid} />}
    </div>
  )
}
