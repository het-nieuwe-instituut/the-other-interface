import { useRef, useState, useEffect } from 'react'
import { useResizeObserver } from 'usehooks-ts'

export function useHorizontalSnappingList({
  numberOfItems,
  itemWidth,
}: {
  numberOfItems: number
  itemWidth: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { width: observerWidth } = useResizeObserver({ ref: containerRef })
  const width = observerWidth ?? 0

  const itemsFitInWidth = Math.floor(width / itemWidth) // Assumes all items have same width
  const pages = Math.ceil(numberOfItems / itemsFitInWidth)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const checkScrollability = () => {
    const scrollLeft = scrollContainerRef.current?.scrollLeft || 0
    const scrollWidth = scrollContainerRef.current?.scrollWidth || 0
    const clientWidth = scrollContainerRef.current?.clientWidth || 0

    setCanScrollPrev(scrollLeft > 0)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth)
  }

  useEffect(() => {
    checkScrollability()
  }, [])

  useEffect(() => {
    const list = scrollContainerRef.current
    if (list) {
      list.addEventListener('scroll', checkScrollability)
      return () => {
        list.removeEventListener('scroll', checkScrollability)
      }
    }
  }, [])

  const nextPage = () => {
    const currentScroll = scrollContainerRef.current?.scrollLeft || 0
    const anticipatedNextPos = currentScroll + width
    let nextPos = anticipatedNextPos
    let i = Math.floor(currentScroll / itemWidth)

    while (i * itemWidth < anticipatedNextPos) {
      nextPos = i * itemWidth
      i++
    }

    scrollContainerRef.current?.scrollTo({
      left: nextPos,
      behavior: 'smooth',
    })
  }

  const prevPage = () => {
    const currentScroll = scrollContainerRef.current?.scrollLeft || 0
    const anticipatedPrevPos = currentScroll - width
    let prevPos = anticipatedPrevPos
    let i = Math.ceil(currentScroll / itemWidth) - 1

    while (i * itemWidth > anticipatedPrevPos && i >= 0) {
      prevPos = i * itemWidth
      i--
    }

    scrollContainerRef.current?.scrollTo({
      left: prevPos,
      behavior: 'smooth',
    })
  }

  return {
    containerRef,
    scrollContainerRef,
    pages,
    width,
    nextPage,
    prevPage,
    canScrollPrev,
    canScrollNext,
  }
}
