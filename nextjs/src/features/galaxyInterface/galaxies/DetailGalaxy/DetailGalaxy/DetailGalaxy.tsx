'use client'
import { Pulse } from '@/features/galaxyInterface/components/Pulse/Pulse'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { State } from '@/features/shared/configs/store'
import { useRecordRelationsCountQuery } from '@/features/shared/hooks/queries/useRecordRelationsCountQuery'
import { GridParams } from '@/features/shared/types/position'
import { Category, CloudCategory, CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { cn } from '@/features/ui/utils/cn'
import { useIsFetching } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useCallback, useContext } from 'react'
import { useSelector } from 'react-redux'
import { GalaxyFooter } from '../../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import {
  GalaxyPaginationAnimationStateContext,
  GalaxyPaginationAnimationStateProvider,
} from '../../hooks/GalaxyPaginationAnimationStateProvider'
import { GalaxyZoomAnimationStateContext } from '../../hooks/GalaxyZoomAnimationStateProvider'
import { RelatedCategory, RelatedStories } from '../fragments'

const relatedCategories: Array<{ category: CloudCategory; grid: GridParams }> = [
  { category: CLOUD_CATEGORIES.people, grid: { gridRow: '1 / 2', gridColumn: '1 / 2' } },
  { category: CLOUD_CATEGORIES.objects, grid: { gridRow: '1 / 2', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.publications, grid: { gridRow: '2 / 3', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.archives, grid: { gridRow: '2 / 3', gridColumn: '1 / 2' } },
]

export const DetailGalaxy = () => {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')

  return (
    <GalaxyPaginationAnimationStateProvider>
      <DetailGalaxyContent key={currentPage} />
    </GalaxyPaginationAnimationStateProvider>
  )
}

const transformOriginSetup = {
  [CLOUD_CATEGORIES.people]: cn('origin-bottom-right'),
  [CLOUD_CATEGORIES.objects]: cn('origin-bottom-left'),
  [CLOUD_CATEGORIES.publications]: cn('origin-top-left'),
  [CLOUD_CATEGORIES.archives]: cn('origin-top-right'),
}

const DetailGalaxyContent: React.FC = React.memo(() => {
  const params = useParams()

  const category = params?.category as Category
  const id = params?.id as string
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { setAnimationState } = useContext(GalaxyPaginationAnimationStateContext)
  const { animationState: galaxyZoomAnimationState } = useContext(GalaxyZoomAnimationStateContext)
  const { data: countData, isLoading } = useRecordRelationsCountQuery(category, id)
  const { page, pageAmount, increasePageNumber, decreasePageNumber } = useSearchParamPagination(
    countData?.totalPages ?? 0,
    false
  )
  const isFetchingGalaxyItems = useIsFetching({
    predicate: query => {
      const key = query.queryKey.at(0) as string
      if (!key) return false

      if (key === 'record-relations-positons' && query.queryKey.at(4) === page) {
        return true
      }

      if (key === 'related-stories' && query.queryKey.at(3) === page) {
        return true
      }

      return ['record-relations-count', 'record-detail'].includes(key)
    },
  })

  useArrowNavigation({
    onLeft: decreasePageNumber,
    onRight: increasePageNumber,
    disabled: isSearchModeActive,
  })

  const handleLeftClick = useCallback(() => {
    setAnimationState('backwards')
    decreasePageNumber()
  }, [setAnimationState, decreasePageNumber])

  const handleRightClick = useCallback(() => {
    setAnimationState('forward')
    increasePageNumber()
  }, [setAnimationState, increasePageNumber])

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto h-screen w-screen max-w-[1440px] ">
        <BlurOverlay hide={!isSearchModeActive} />

        <Pulse hide={!isFetchingGalaxyItems} />

        <div
          id="detail-galaxy-grid"
          className={cn(
            'group-hover-blur relative inset-x-[2vw] top-[6%] grid h-[calc(80%-1rem-60px)] w-[96vw] max-w-[1382.4px] grid-cols-3 grid-rows-2 min-[1440px]:inset-x-[28.8px]',
            galaxyZoomAnimationState === 'backwards' &&
              'animate-[toBlurAndHide_300ms_ease-in-out_forwards]'
          )}
        >
          {relatedCategories.map(({ category: cloudCategory, grid }) => (
            <RelatedCategory
              className={transformOriginSetup[cloudCategory]}
              key={cloudCategory}
              category={cloudCategory}
              gridRow={grid.gridRow}
              gridColumn={grid.gridColumn}
              allRelationTotals={countData?.allRelationTotals}
            />
          ))}

          <RelatedStories allRelationTotals={countData?.allRelationTotals} />
        </div>

        <GalaxyFooter
          galaxyPagination={
            <GalaxyPagination
              currentPageNumber={page}
              pageAmount={Math.ceil(pageAmount / 2)}
              isResultAmountLoading={isLoading}
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
              isResultEmpty={false}
            />
          }
        />
      </div>
    </div>
  )
})
DetailGalaxyContent.displayName = 'DetailGalaxyContent'
