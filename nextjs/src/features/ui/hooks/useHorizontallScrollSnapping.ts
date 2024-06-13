import { useCallback, useEffect, useRef, useState } from 'react'
import { useResizeObserver } from 'usehooks-ts'

export function useHorizontalSnappingList({
  numberOfItems,
  itemWidth,
  gap,
  onDimensionsKnown,
}: {
  numberOfItems: number
  itemWidth: number
  gap?: number
  onDimensionsKnown?: () => void
}) {
  const dimensionsKnown = useRef(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { width: observerWidth } = useResizeObserver({ ref: scrollContainerRef })
  const width = observerWidth ?? 0

  const itemsFitInWidth = Math.floor(width / itemWidth) // Assumes all items have same width
  const pages = Math.ceil(numberOfItems / itemsFitInWidth)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const checkScrollability = useCallback(() => {
    if (!dimensionsKnown.current && itemWidth > 0) {
      dimensionsKnown.current = true
      onDimensionsKnown?.()
    }
    const scrollLeft = scrollContainerRef.current?.scrollLeft || 0
    const scrollWidth = scrollContainerRef.current?.scrollWidth || 0
    const clientWidth = scrollContainerRef.current?.clientWidth || 0

    setCanScrollPrev(scrollLeft > 0)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth)
  }, [itemWidth, onDimensionsKnown])

  useEffect(() => {
    checkScrollability()
  }, [checkScrollability])

  useEffect(() => {
    const list = scrollContainerRef.current
    if (list) {
      list.addEventListener('scroll', checkScrollability)
      return () => {
        list.removeEventListener('scroll', checkScrollability)
      }
    }
  }, [checkScrollability])

  const nextPage = () => {
    const currentScroll = scrollContainerRef.current?.scrollLeft || 0
    const anticipatedNextPos = currentScroll + width + (gap ?? 0)
    const itemWidthWithGap = itemWidth + (gap ?? 0)
    let nextPos = anticipatedNextPos
    let i = Math.floor(currentScroll / itemWidthWithGap)

    while (i * itemWidthWithGap < anticipatedNextPos) {
      nextPos = i * itemWidthWithGap
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
    const itemWidthWithGap = itemWidth + (gap ?? 0)
    let prevPos = anticipatedPrevPos
    let i = Math.ceil(currentScroll / itemWidthWithGap) - 1

    while (i * itemWidthWithGap > anticipatedPrevPos && i >= 0) {
      prevPos = i * itemWidthWithGap
      i--
    }

    scrollContainerRef.current?.scrollTo({
      left: prevPos,
      behavior: 'smooth',
    })
  }

  return {
    scrollContainerRef,
    pages,
    width,
    nextPage,
    prevPage,
    canScrollPrev,
    canScrollNext,
  }
}
