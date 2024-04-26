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
  const isAnyUserSearchActive = search && search !== ''

  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(true)

  const toggleSearchBar = useCallback(() => {
    setIsSearchBarCollapsed(collapse => !collapse)
  }, [])

  useEffect(() => {
    // Search bar is always open on search result page
    if (isAnyUserSearchActive || isSearchResult) {
      return
    }

    setIsSearchBarCollapsed(!isSearchModeActive)
  }, [isSearchModeActive, isAnyUserSearchActive, isSearchResult])

  useEffect(() => {
    // Set up correct initial state depends on page and search state
    if (isAnyUserSearchActive && isSearchResult) {
      setIsSearchBarCollapsed(false)
    }
  }, [isAnyUserSearchActive, isSearchResult])

  return {
    setIsSearchBarCollapsed,
    isSearchBarCollapsed,
    isZoom1: currentZoomNumber === 1,
    toggleSearchBar,
    isNoActiveSearch: !search,
  }
}
