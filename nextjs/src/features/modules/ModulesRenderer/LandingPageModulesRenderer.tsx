// import { GenericCardGridWithClientPagination } from '@/features/editorial/components/GenericCardGridWithClientPagination'
// import {
//   ImageCarousel,
//   ImageCarouselItem,
// } from '@/features/ui/components/image-carousel/ImageCarousel'
import { cn } from '@/features/ui/utils/cn'
import { ComponentModulesGridModule, ComponentModulesHighlight, Maybe } from 'src/generated/graphql'
import { GenericCardGridWithClientPagination } from '@/features/editorial/components/GenericCardGridWithClientPagination'

interface Props {
  grid?: ComponentModulesGridModule | null
  highlight?: Maybe<ComponentModulesHighlight> | null
}

export function DynamicLandingPageComponentRenderer({ grid, highlight }: Props) {
  return (
    <div className={cn('px-6 pt-0 flex flex-col gap-[40px]', 'pt-10')}>
      {[...([grid, highlight] || [])].map((component, index, array) => {
        const typeName = component?.__typename

        if (typeName) {
          if (grid) {
            return (
              <GenericCardGridWithClientPagination
                key={keyExtractor(component.id, index, array)}
                grid={grid}
              />
            )
          }

          if (highlight) {
            console.log(highlight)
            return null
          }

          // TODO: uncomment after component is connected to collections again
          //   if (component?.__typename === 'ComponentModulesCarousel') {
          //     return (
          //       <CarouselModule
          //         key={keyExtractor(component.id, index, array)}
          //         component={component as ComponentModulesCarousel}
          //       />
          //     )
          //   }
        }
        return null
      }) ?? null}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function keyExtractor(id: string, index: number, array: any[]) {
  return `${id}-${index}-${array.length}`
}
