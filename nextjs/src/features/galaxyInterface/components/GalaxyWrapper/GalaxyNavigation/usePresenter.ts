import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { useParams, usePathname } from 'next/navigation'

const getZoom2Link = (category?: string) => {
  if (Object.values(CLOUD_CATEGORIES).includes(category as CloudCategory)) {
    return `/landingpage?category=${category}`
  }

  return null
}

const getCurrentZoomNumber = (pathname?: string | null) => {
  if (pathname?.includes('detail')) return 3
  if (pathname?.includes('landingpage')) return 2
  return 1
}

export const usePresenter = () => {
  const pathname = usePathname()
  const params = useParams()
  const category = params?.category

  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const previousZoomLinks = {
    1: '/',
    2: getZoom2Link(category as string),
    3: null, // always null as it's the last zoom level
  }

  return {
    currentZoomNumber,
    previousZoomLinks,
  }
}
