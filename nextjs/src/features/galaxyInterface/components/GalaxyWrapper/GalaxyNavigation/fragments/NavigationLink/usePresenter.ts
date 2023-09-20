import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'

const getLineStyle = (isCurrentZoom: boolean, isClickable: boolean, isNextZoom: boolean) => {
  if (isCurrentZoom || isClickable) {
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
}

export const usePresenter = (zoom: number, currentZoomNumber: number) => {
  const pathname = usePathname()

  const isStoriesDetail = currentZoomNumber === 3 && !!pathname?.includes(CATEGORIES.stories)
  const isClickable = zoom < currentZoomNumber
  const isCurrentZoom = zoom === currentZoomNumber
  const isDisabled = isStoriesDetail && zoom === 2
  const isNextZoom = Math.abs(zoom - currentZoomNumber) === 1

  const lineStyle = getLineStyle(isCurrentZoom, isClickable, isNextZoom)

  return {
    isClickable,
    isCurrentZoom,
    isNextZoom,
    lineStyle,
    isDisabled,
  }
}
