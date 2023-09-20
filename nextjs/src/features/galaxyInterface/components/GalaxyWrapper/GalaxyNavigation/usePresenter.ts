import { CATEGORIES, CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'

const getZoom2Link = (category?: string) => {
  if (category === CATEGORIES.stories) return '/'

  if (Object.values(CLOUD_CATEGORIES).includes(category as CloudCategory)) {
    return `/landingpage?category=${category}`
  }

  return null
}

export const usePresenter = () => {
  const pathname = usePathname()
  const params = useParams()

  const category = params?.category

  const currentZoomNumber = useMemo(() => {
    if (pathname?.includes('detail')) return 3
    if (pathname?.includes('landingpage')) return 2

    return 1
  }, [pathname])

  const previousZoomLinks = useMemo(() => {
    return {
      1: '/',
      2: getZoom2Link(category as string),
      3: null,
    }
  }, [category])

  return {
    currentZoomNumber,
    previousZoomLinks,
  }
}
