import { State } from '@/features/shared/configs/store'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const pathname = usePathname()
  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  const [isSearchBarCollapsed, setIsSearchBarCollapsed] = useState(true)

  const toggleSearchBar = () => {
    setIsSearchBarCollapsed(!isSearchBarCollapsed)
  }

  useEffect(() => {
    setIsSearchBarCollapsed(!isSearchModeActive)
  }, [isSearchModeActive])

  return {
    setIsSearchBarCollapsed,
    isSearchBarCollapsed: currentZoomNumber === 1 ? isSearchBarCollapsed : false,
    isCollapsable: currentZoomNumber === 1,
    isZoom1: currentZoomNumber === 1,
    toggleSearchBar,
  }
}
