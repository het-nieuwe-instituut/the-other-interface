import { useMemo } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { GalaxyZoom } from '../constants'
import { CATEGORIES } from '@/features/shared/utils/categories'

export const usePresenter = (zoom: GalaxyZoom['zoom'], currentZoomNumber: number) => {
  const pathname = usePathname()

  const isStoriesDetail = useMemo(() => {
    return currentZoomNumber === 3 && !!pathname?.includes(CATEGORIES.stories)
  }, [currentZoomNumber])

  const isClickable = useMemo(() => {
    return zoom < currentZoomNumber
  }, [zoom, currentZoomNumber])

  const isCurrentZoom = useMemo(() => {
    return zoom === currentZoomNumber
  }, [zoom, currentZoomNumber])

  const isDisabled = useMemo(() => {
    console.log('isDisabled', isStoriesDetail, zoom, isStoriesDetail && zoom === 2)
    return isStoriesDetail && zoom === 2
  }, [zoom, isStoriesDetail])

  const isNextZoom = useMemo(() => {
    return Math.abs(zoom - currentZoomNumber) === 1
  }, [zoom, currentZoomNumber])

  const lineStyle = useMemo(() => {
    if (isCurrentZoom || isClickable || isDisabled) {
      return {
        backgroundColor: 'navyAlpha.100',
      }
    }

    if (isNextZoom) {
      return {
        backgroundImage: 'linear-gradient(90deg, #000D14 9.46%, rgba(0, 13, 20, 0.25) 93.12%)',
      }
    }

    return {
      backgroundColor: 'navyAlpha.25',
    }
  }, [isCurrentZoom, isClickable, isNextZoom])

  return {
    isClickable,
    isCurrentZoom,
    isNextZoom,
    lineStyle,
    isDisabled,
  }
}
