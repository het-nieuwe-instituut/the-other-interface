import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { useZoom2SearchResultAmount } from '@/features/shared/hooks/queries/useZoom2SearchResultAmount'
import { usePagination } from '@/features/shared/hooks/usePagination'
import { CLOUD_CATEGORIES_ARRAY, CloudCategory } from '@/features/shared/utils/categories'
import { notFound, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory

  if (!CLOUD_CATEGORIES_ARRAY.includes(category)) {
    notFound()
  }

  const { data: resultAmount, isLoading: isResultAmountLoading } =
    useZoom2SearchResultAmount(category)

  const searchResultAmount = Number(resultAmount?.zoomLevel2Amount?.total) || 0

  const { page, pageAmount, increasePageNumber, decreasePageNumber } = usePagination(
    searchResultAmount,
    isSearchModeActive
  )

  const { data: results, isLoading: isResultLoading } = useZoom2SearchResult({
    category,
    pageAmount,
    page,
  })

  return {
    isSearchModeActive,
    isResultAmountLoading,
    isResultLoading,
    currentPageNumber: page,
    pageAmount,
    searchResult: results,
    increasePageNumber,
    decreasePageNumber,
  }
}
