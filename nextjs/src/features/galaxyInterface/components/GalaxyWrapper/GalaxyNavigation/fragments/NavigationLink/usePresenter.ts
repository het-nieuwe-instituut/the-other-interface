import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/features/shared/utils/categories'

const getLineStyle = (isCurrentZoom: boolean, isClickable: boolean, isNextZoom: boolean) => {
  if (isCurrentZoom || isClickable) {
    return {
      backgroundColor: 'pinkAlpha.100',
    }
  }
  if (isNextZoom) {
    return {
      backgroundImage: 'linear-gradient(90deg, #FFE6DD 9.46%, rgba(255, 230, 221, 0.4) 93.12%)',
    }
  }
  return {
    backgroundColor: 'pinkAlpha.40',
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
