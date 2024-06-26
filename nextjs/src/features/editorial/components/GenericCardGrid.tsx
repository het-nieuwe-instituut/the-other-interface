'use client'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { DeepPartial } from '@/features/shared/types/helpers'

import { imageBasePath } from '@/features/modules/modulesConstants'
import {
  CardGrid,
  CardGridCard,
  CardGridCardWrapper,
  CardGridFooter,
  CardGridLink,
  CardGridTitle,
} from '@/features/ui/components/card-grid/CardGrid'
import { cn } from '@/features/ui/utils/cn'
import { ComponentModulesGridModule } from 'src/generated/graphql'
import { getTriplyOrStoryHref } from './getTriplyOrStoryHref'
import { useClientPagination } from './useClientPagination'

type CardGrid = DeepPartial<ComponentModulesGridModule>

export const GenericCardGrid = ({ grid, className }: { grid: CardGrid; className?: string }) => {
  const items = grid.cards ?? []

  if (!items || items.length === 0) {
    return <ErrorBox />
  }

  return (
    <CardGrid className={cn('w-full', className)}>
      {grid.title ? <CardGridTitle>{grid.title}</CardGridTitle> : undefined}
      {items && (
        <CardGridCardWrapper>
          {items.map(item => {
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
                  story: item.story ?? undefined,
                  triply_record: item.triplyRecord ?? undefined,
                })}
                alt={item.thumbnail?.data?.attributes?.alternativeText ?? ''}
              ></CardGridCard>
            )
          })}
        </CardGridCardWrapper>
      )}

      <CardGridFooter>
        {grid.exploreCollectionButton && grid.exploreCollectionButton?.url && (
          <CardGridLink href={grid.exploreCollectionButton?.url}>
            {grid.exploreCollectionButton?.text ?? ''}
          </CardGridLink>
        )}
      </CardGridFooter>
    </CardGrid>
  )
}
