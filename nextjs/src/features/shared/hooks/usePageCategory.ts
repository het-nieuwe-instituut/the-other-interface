import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getCurrentZoomNumber } from '../helpers/getCurrentZoomNumber'
import { CloudCategory, SEARCH_CATEGORIES } from '../utils/categories'

export const usePageCategory = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const pageCategory = useMemo(() => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)

    if (currentZoomNumber === 1) {
      return SEARCH_CATEGORIES.all
    }

    if (currentZoomNumber === 2) {
      return searchParams?.get('category') as CloudCategory
    }

    return params?.category as CloudCategory
  }, [params?.category, pathname, searchParams])

  return {
    pageCategory,
  }
}
