import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory

  const { data, isLoading } = useZoom2SearchResult(category, currentPageNumber)

  useEffect(() => {
    setCurrentPageNumber(1)
  }, [category])

  const recordsPerPage = 12

  const searchResultAmount = Number(data?.zoomLevel2?.total) || 0
  const pagesAmount = searchResultAmount
    ? Math.ceil(Number(data?.zoomLevel2?.total) / recordsPerPage)
    : 0

  const increasePageNumber = () => {
    if (currentPageNumber < pagesAmount) {
      setCurrentPageNumber(currentPageNumber + 1)
    }
  }

  const decreasePageNumber = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1)
    }
  }

  return {
    isSearchModeActive,
    isLoading: false,
    currentPageNumber,
    pagesAmount: searchResultAmount ? Math.ceil(searchResultAmount / recordsPerPage) : 0,
    searchResult: data,
    increasePageNumber,
    decreasePageNumber,
  }
}
