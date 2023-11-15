import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResultAmount } from '@/features/shared/hooks/queries/useZoom2SearchResultAmount'
import { usePagination } from '@/features/shared/hooks/usePagination'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { CLOUD_CATEGORIES_ARRAY } from '@/features/shared/utils/categories'
import { notFound } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { category, search } = useZoom2Params()

  if (!CLOUD_CATEGORIES_ARRAY.includes(category)) {
    notFound()
  }

  const { data: resultAmount, isLoading: isResultAmountLoading } = useZoom2SearchResultAmount(
    category,
    search
  )

  const searchResultAmount = Number(resultAmount?.zoomLevel2Amount?.total) || 0

  const { page, pageAmount, increasePageNumber, decreasePageNumber } = usePagination(
    searchResultAmount,
    isResultAmountLoading,
    isSearchModeActive
  )

  return {
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber: page,
    pageAmount,
    increasePageNumber,
    decreasePageNumber,
  }
}
