import { useState, useRef, useEffect } from 'react'
import { FilterArray } from '../Suggestions/Suggestions'

export const useSearchBarPosition = (selectedFilters: FilterArray) => {
  const [offset, setOffset] = useState(0)
  const [searchBarHeight, setSearchBarHeight] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  const calculateOffset = () => {
    if (wrapRef.current) {
      const defaultOffset = 51
      const height = wrapRef.current.scrollHeight
      const newOffset = height - defaultOffset
      setSearchBarHeight(height)
      if (newOffset >= 0) {
        setOffset(newOffset)
      }
    }
  }

  useEffect(() => {
    calculateOffset()
  }, [selectedFilters])

  useEffect(() => {
    const handleResize = () => {
      calculateOffset()
    }

    window.addEventListener('resize', handleResize)

    calculateOffset()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    offset,
    searchBarHeight,
    wrapRef,
  }
}
