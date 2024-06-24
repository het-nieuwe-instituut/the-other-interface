import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { DeepPartial } from '@/features/shared/types/helpers'

import { cn } from '@/features/ui/utils/cn'
import { ComponentModulesGridModule } from 'src/generated/graphql'
import { useClientPagination } from './useClientPagination'
import {
  CardGrid,
  CardGridCard,
  CardGridCardWrapper,
  CardGridDescription,
  CardGridFooter,
  CardGridLink,
  CardGridPagination,
  CardGridTitle,
} from '@/features/ui/components/card-grid/CardGrid'
import { imageBasePath } from '@/features/modules/modulesConstants'

type CardGrid = DeepPartial<ComponentModulesGridModule>

export const GenericCardGridWithClientPagination = ({
  grid,
  className,
}: {
  grid: CardGrid
  className?: string
}) => {
  const items = grid.fields ?? []
  const itemsInPage = grid.pageSize || 6
  const { nodes, page, lastPage, next, previous } = useClientPagination({
    items,
    itemsInPage: itemsInPage,
  })

  if (!items || items.length === 0) {
    return <ErrorBox />
  }

  return (
    <CardGrid className={cn('w-full', className)}>
      {grid.title ? <CardGridTitle>{grid.title}</CardGridTitle> : undefined}
      {grid.description ? <CardGridDescription>{grid.description}</CardGridDescription> : undefined}
      {nodes && (
        <CardGridCardWrapper>
          {nodes.map(item => {
            const imageSrc = imageBasePath(item?.thumbnail?.data?.attributes?.url)
            if (!item) {
              return null
            }
            return (
              <CardGridCard
                key={item.id}
                title={item.title ?? undefined}
                description={item.subtitle ?? undefined}
                image={imageSrc}
                href={getTriplyOrStoryHref({
                  story: item.story,
                  triply_record: item.triplyRecord,
                })}
                alt={item.thumbnail?.data?.attributes?.alternativeText ?? ''}
              ></CardGridCard>
            )
          })}
        </CardGridCardWrapper>
      )}

      <CardGridFooter>
        {grid.showMoreButtonTitle && (
          <CardGridLink href={'#'}>{grid.showMoreButtonTitle ?? ''}</CardGridLink>
        )}

        {items.length > itemsInPage && (
          <CardGridPagination
            className="ml-auto"
            onNext={next}
            onPrevious={previous}
            hidePrevious={page === 1}
            hideNext={page === lastPage || lastPage === 1}
          />
        )}
      </CardGridFooter>
    </CardGrid>
  )
}

function getTriplyOrStoryHref({
  story,
  triply_record,
}: {
  story?: NonNullable<NonNullable<CardGrid['fields']>[number]>['story']
  triply_record?: NonNullable<NonNullable<CardGrid['fields']>[number]>['triplyRecord']
}) {
  if (triply_record && triply_record.data?.attributes) {
    return `details/${triply_record.data.attributes.type}/${triply_record.data.attributes.recordId}`
  }
  if (story && story.data) {
    return `details/stories/${story.data.id}`
  }
  return undefined
}
