import { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { usePathname, useSearchParams } from 'next/navigation'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { State } from '@/features/shared/configs/store'

export const usePresenter = () => {
  const searchParams = useSearchParams()
  const search = searchParams?.get('search')
  const searchResult = searchParams?.get('searchResult')
  const isSearchResult = !!searchResult
  const pathname = usePathname()

  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(true)

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarCollapsed(collapse => !collapse)
  }, [])

  useEffect(() => {
    // Search bar shoudn't collapse even if user close it on search result page
    if (isSearchResult) {
      return
    }

    setIsSearchBarCollapsed(!isSearchModeActive)
  }, [isSearchModeActive, isSearchResult])

  useEffect(() => {
    // Search bar should be expanded on search result page
    if (isSearchResult) {
      setIsSearchBarCollapsed(false)
    }
  }, [isSearchResult])

  return {
    setIsSearchBarCollapsed,
    isSearchBarCollapsed,
    isZoom1: currentZoomNumber === 1,
    toggleSearchBar,
    isNoActiveSearch: !search,
  }
}
