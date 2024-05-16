import { FilterArray } from '@/features/shared/hooks/search/useFilters'
import { useWindowSize } from '@/features/shared/hooks/ui/useWindowSize'
import { useState, useRef, useEffect, useCallback } from 'react'

export const useSearchBarPosition = (selectedFilters: FilterArray) => {
  const [offset, setOffset] = useState(0)
  const [searchBarHeight, setSearchBarHeight] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSize()

  const calculateOffset = useCallback(() => {
    if (wrapRef.current) {
      const defaultOffset = 51
      const height = wrapRef.current.scrollHeight
      const newOffset = height - defaultOffset
      setSearchBarHeight(height)
      if (newOffset >= 0) {
        setOffset(newOffset)
      }
    }
  }, [])

  useEffect(() => {
    calculateOffset()
  }, [selectedFilters, calculateOffset, width])

  return {
    offset,
    searchBarHeight,
    wrapRef,
  }
}
