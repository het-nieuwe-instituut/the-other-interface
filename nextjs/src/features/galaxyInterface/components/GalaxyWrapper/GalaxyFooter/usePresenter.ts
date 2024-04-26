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

  const [userToggled, setUserToggled] = useState(false)
  const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(() => true)

  const toggleSearchBar = useCallback(() => {
    setUserToggled(true)
    setIsSearchBarCollapsed(prev => !prev)
  }, [])

  useEffect(() => {
    if (!userToggled) {
      setUserToggled(true)
    }

    if (isAnyUserSearchActive || isSearchResult) {
      return
    } else {
      setIsSearchBarCollapsed(!isSearchModeActive)
    }
  }, [isSearchModeActive, userToggled, isAnyUserSearchActive, isSearchResult])

  useEffect(() => {
    if (isAnyUserSearchActive && isSearchResult && !userToggled) {
      setIsSearchBarCollapsed(false)
    }
  }, [isAnyUserSearchActive, userToggled, isSearchResult])

  useEffect(() => {
    setUserToggled(false)
  }, [isSearchResult])

  return {
    setIsSearchBarCollapsed,
    isSearchBarCollapsed,
    isZoom1: currentZoomNumber === 1,
    toggleSearchBar,
    isNoActiveSearch: !search,
  }
}
