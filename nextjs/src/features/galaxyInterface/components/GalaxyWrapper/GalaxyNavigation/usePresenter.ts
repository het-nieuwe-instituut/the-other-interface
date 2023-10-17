import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

const getZoom2Link = (searchParam: string, category?: string) => {
  const search = searchParam ? `&search=${searchParam}` : ''

  if (Object.values(CLOUD_CATEGORIES).includes(category as CloudCategory)) {
    return `/landingpage?category=${category}${search}`
  }

  return null
}

export const usePresenter = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const category = params?.category

  const searchParam = searchParams?.get('search') || ''

  const currentZoomNumber = getCurrentZoomNumber(pathname)
  const previousZoomLinks = {
    1: '/',
    2: getZoom2Link(searchParam, category as string),
    3: null, // always null as it's the last zoom level
  }

  return {
    currentZoomNumber,
    previousZoomLinks,
  }
}
