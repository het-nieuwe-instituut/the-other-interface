'use client'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { State } from '@/features/shared/configs/store'
import { ZOOM2_RECORDS_PER_PAGE } from '@/features/shared/constants/mainConstants'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { useSearchParamCategory, useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { isSearchCategory } from '@/features/shared/utils/categories'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { useSearchParams } from 'next/navigation'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { Pulse } from '../../components/Pulse/Pulse'
import {
  GalaxyPaginationAnimationStateContext,
  GalaxyPaginationAnimationStateProvider,
} from '../hooks/GalaxyPaginationAnimationStateProvider'
import { Records } from './fragments'
import { PositioningTemplate, positioningTemplates } from './fragments/Records/positioningTemplates'
import { useRemoveFallbackSearchParam } from './useRemoveFallbackSearchParam'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'

export const CategoryGalaxyTemplateContext = React.createContext<{
  previousTemplate?: PositioningTemplate
  currentTemplate?: PositioningTemplate
  nextTemplate?: PositioningTemplate
}>({
  previousTemplate: undefined,
  currentTemplate: undefined,
  nextTemplate: undefined,
})

export const CategoryGalaxy = () => {
  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate } = usePositioningTemplates(
    positioningTemplates,
    pageNumber
  )
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')
  const category = useSearchParamCategory()

  if (!isSearchCategory(category)) {
    return <ErrorBox />
  }

  return (
    <GalaxyPaginationAnimationStateProvider>
      <CategoryGalaxyTemplateContext.Provider
        value={{
          nextTemplate,
          currentTemplate,
        }}
      >
        <CategoryGalaxyContent key={currentPage} />
      </CategoryGalaxyTemplateContext.Provider>
    </GalaxyPaginationAnimationStateProvider>
  )
}

export const CategoryGalaxyContent = React.memo(() => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { category, search, fallback } = useZoom2Params()
  const { pageNumber } = usePageNumber()
  const selectedFilters = useSelectedFilters()
  const { setAnimationState } = useContext(GalaxyPaginationAnimationStateContext)

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
            <Pulse />
          </div>
          <Records pageAmount={pageAmount} records={records} />
        </>
      )
    }

    if (isMainLoading) {
      return (
        <div className="absolute mx-auto flex h-full w-screen items-center justify-center ">
          <Pulse />
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
        <BlurOverlay hide={!isSearchModeActive} />
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
CategoryGalaxyContent.displayName = 'CategoryGalaxyContent'
