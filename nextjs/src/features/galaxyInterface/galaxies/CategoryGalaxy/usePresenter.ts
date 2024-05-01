import { State } from '@/features/shared/configs/store'
import { ZOOM2_RECORDS_PER_PAGE } from '@/features/shared/constants/mainConstants'
import { useSearch } from '@/features/shared/hooks/queries/useSearch'
import { usePagination } from '@/features/shared/hooks/usePagination'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { isSearchCategory } from '@/features/shared/utils/categories'
import { notFound } from 'next/navigation'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { category, search } = useZoom2Params()

  if (!isSearchCategory(category)) {
    notFound()
  }

  const { data, isLoading: isResultAmountLoading } = useSearch({
    category,
    text: search,
  })

  const { total: resultAmount } = data || { total: 0 }

  const searchResultAmount = Number(resultAmount)
  const searchPageAmount = searchResultAmount
    ? Math.ceil(searchResultAmount / ZOOM2_RECORDS_PER_PAGE)
    : 1

  const { page, pageAmount, increasePageNumber, decreasePageNumber } = usePagination(
    searchPageAmount,
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
    isResultEmpty: searchResultAmount === 0,
  }
}
