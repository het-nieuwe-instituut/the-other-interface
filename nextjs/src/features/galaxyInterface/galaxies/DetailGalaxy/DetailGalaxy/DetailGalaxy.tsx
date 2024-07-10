'use client'
import { Pulse } from '@/features/galaxyInterface/components/Pulse/Pulse'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { State } from '@/features/shared/configs/store'
import { useRecordRelationsCountQuery } from '@/features/shared/hooks/queries/useRecordRelationsCountQuery'
import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, Category, CloudCategory } from '@/features/shared/utils/categories'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { cn } from '@/features/ui/utils/cn'
import { useIsFetching } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useContext } from 'react'
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
  const isFetching = useIsFetching({
    predicate: query => {
      const key = query.queryKey.at(0) as string
      return key
        ? ['record-relations', 'record-relations-count', 'record-detail'].includes(key)
        : false
    },
  })

  useArrowNavigation({
    onLeft: decreasePageNumber,
    onRight: increasePageNumber,
    disabled: isSearchModeActive,
  })

  const renderMainContent = () => {
    return (
      <>
        <Pulse hide={!isFetching} />

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
              key={cloudCategory}
              category={cloudCategory}
              gridRow={grid.gridRow}
              gridColumn={grid.gridColumn}
              allRelationTotals={countData?.allRelationTotals}
            />
          ))}

          <RelatedStories allRelationTotals={countData?.allRelationTotals} />
        </div>
      </>
    )
  }

  return (
    <div className={'w-screen bg-pink-100'}>
      <div className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden">
        <BlurOverlay hide={!isSearchModeActive} />
        {renderMainContent()}

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

  function handleLeftClick() {
    setAnimationState('backwards')
    //hacky, we should actually listen for event when the animation ends
    setTimeout(() => {
      decreasePageNumber()
    }, 500)
  }

  function handleRightClick() {
    setAnimationState('forward')
    setTimeout(() => {
      //hacky, we should actually listen for event when the animation ends
      increasePageNumber()
    }, 500)
  }
})
DetailGalaxyContent.displayName = 'DetailGalaxyContent'
