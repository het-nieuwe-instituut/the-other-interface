'use client'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { State } from '@/features/shared/configs/store'
import { ZOOM2_RECORDS_PER_PAGE } from '@/features/shared/constants/mainConstants'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { isSearchCategory } from '@/features/shared/utils/categories'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { notFound, usePathname, useSearchParams } from 'next/navigation'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { Records } from './fragments'
import { useRemoveFallbackSearchParam } from './useRemoveFallbackSearchParam'
import { Pulse } from '../../components/Pulse/Pulse'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { PositioningTemplate, positioningTemplates } from './fragments/Records/positioningTemplates'

export const CategoryGalaxyAnimationContext = React.createContext<{
  animationState?: Animations
  conditions?: 'previousAnimationWasBackwards' | 'previousAnimationWasForward' | 'firstRender'
  setAnimationState: React.Dispatch<React.SetStateAction<Animations | undefined>>
  previousTemplate?: PositioningTemplate
  currentTemplate?: PositioningTemplate
  nextTemplate?: PositioningTemplate
}>({
  animationState: undefined,
  conditions: undefined,
  setAnimationState: () => undefined,
  previousTemplate: undefined,
  currentTemplate: undefined,
  nextTemplate: undefined,
})
type Animations = 'forward' | 'backwards' | undefined
type Conditions =
  | 'previousAnimationWasBackwards'
  | 'previousAnimationWasForward'
  | 'firstRender'
  | undefined
export const CategoryGalaxy = () => {
  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate, previousTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )
  const prevPathName = useRef<string | null>()
  const [conditions, setConditions] = useState<Conditions>('firstRender')
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')
  const [animationState, setAnimationState] = useState<Animations>()
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (animationState === 'forward') setConditions('previousAnimationWasForward')
    if (animationState === 'backwards') setConditions('previousAnimationWasBackwards')
  }, [animationState])

  useLayoutEffect(() => {
    if (pathname !== prevPathName.current) {
      setAnimationState(undefined)
    }
  }, [currentPage, pathname])

  function handleAnimationState(animationState: Animations) {
    setAnimationState(animationState)
  }

  return (
    <CategoryGalaxyAnimationContext.Provider
      value={{
        animationState,
        setAnimationState,
        conditions,
        nextTemplate,
        currentTemplate,
        previousTemplate,
      }}
    >
      <CategoryGalaxyContent key={currentPage} onSetAnimationState={handleAnimationState} />
    </CategoryGalaxyAnimationContext.Provider>
  )
}

export const CategoryGalaxyContent = React.memo(
  ({ onSetAnimationState }: { onSetAnimationState: (animationState: Animations) => void }) => {
    const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
    const { category, search, fallback } = useZoom2Params()
    const { pageNumber } = usePageNumber()
    const selectedFilters = useSelectedFilters()

    if (!isSearchCategory(category)) {
      notFound()
    }

    const { data: prevData } = useSearchByCategoryQuery({
      category,
      text: search,
      page: pageNumber - 1,
      fallback,
      selectedFilters,
    })
    const {
      data: mainData,
      isLoading: isMainLoading,
      isError,
    } = useSearchByCategoryQuery({
      category,
      text: search,
      page: pageNumber,
      fallback,
      selectedFilters,
    })

    const { total: resultAmount } = mainData || { total: 0 }
    const searchResultAmount = Number(resultAmount)
    const searchPageAmount = searchResultAmount
      ? Math.ceil(searchResultAmount / ZOOM2_RECORDS_PER_PAGE)
      : 1
    const records = mainData?.items || []

    const { page, pageAmount, increasePageNumber, decreasePageNumber } = useSearchParamPagination(
      searchPageAmount,
      isMainLoading
    )
    useArrowNavigation({
      onLeft: handleLeftClick,
      onRight: handleRightClick,
      disabled: isSearchModeActive,
    })

    useRemoveFallbackSearchParam({
      fallback,
      isResultAmountLoading: isMainLoading,
      isError,
      searchResultAmount,
    })

    const { t } = useTypeSafeTranslation('category')
    const isResultEmpty = searchResultAmount === 0 && !isMainLoading && !isError

    const renderMainContent = () => {
      if (isError) {
        return (
          <div className="flex h-full items-center justify-center">
            <p className={TypographyVariants({ times: 'md' })}>{t('errorLoadingCategoryItems')}</p>
          </div>
        )
      }

      if (isMainLoading && prevData) {
        return (
          <>
            <div className="absolute mx-auto flex h-full w-screen items-center justify-center ">
              <Pulse className="absolute mx-auto bg-red-100" />
            </div>
            <Records pageAmount={pageAmount} records={records} />
          </>
        )
      }

      if (isMainLoading) {
        return (
          <div className="flex h-full  items-center justify-center">
            <ThemedSpinner />
          </div>
        )
      }

      if (isResultEmpty) {
        return (
          <div className="w-full">
            <p
              className={TypographyVariants({
                times: 'lg',
                className: 'text-blue-100 text-[74px] leading-normal justify-start mb-[12vh]',
              })}
            >
              {t('noResultsFound')}.
            </p>
          </div>
        )
      }

      return <Records pageAmount={pageAmount} records={records} />
    }

    return (
      <div className={'w-screen bg-pink-100'}>
        <div className="relative mx-auto flex h-screen w-full max-w-[1440px] items-center justify-center px-[25px]">
          {/* {isSearchModeActive && <BlurOverlay />} */}
          {renderMainContent()}

          <GalaxyFooter
            galaxyPagination={
              <GalaxyPagination
                currentPageNumber={page}
                pageAmount={pageAmount}
                isResultAmountLoading={isMainLoading}
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
                isResultEmpty={isResultEmpty}
                isResultError={isError}
              />
            }
          />
        </div>
      </div>
    )

    function handleLeftClick() {
      onSetAnimationState('backwards')
      //hacky, we should actually listen for event when the animation ends
      setTimeout(() => {
        decreasePageNumber()
      }, 500)
    }

    function handleRightClick() {
      onSetAnimationState('forward')
      setTimeout(() => {
        //hacky, we should actually listen for event when the animation ends
        increasePageNumber()
      }, 500)
    }
  }
)
CategoryGalaxyContent.displayName = 'CategoryGalaxyContent'
