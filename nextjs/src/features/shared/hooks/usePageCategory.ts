import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getCurrentZoomNumber } from '../helpers/getCurrentZoomNumber'
import {
  CloudCategory,
  CLOUD_CATEGORIES_ARRAY,
  isStoryCategory,
  SEARCH_CATEGORIES,
} from '../utils/categories'

export const usePageCategory = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const pageCategory = useMemo(() => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)
    let category = null

    if (currentZoomNumber === 1) {
      return SEARCH_CATEGORIES.all
    }

    if (currentZoomNumber === 2) {
      return searchParams?.get('category') as CloudCategory
    }

    if (isStoryCategory(params?.category as string)) {
      category = CLOUD_CATEGORIES_ARRAY[Math.floor(Math.random() * CLOUD_CATEGORIES_ARRAY.length)]
    } else {
      category = params?.category as CloudCategory
    }

    return category
  }, [pathname, searchParams])

  return {
    pageCategory,
  }
}
