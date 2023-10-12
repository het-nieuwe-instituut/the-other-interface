import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getCurrentZoomNumber } from '../helpers/getCurrentZoomNumber'
import { CATEGORIES, CloudCategory, CLOUD_CATEGORIES } from '../utils/categories'

export const usePageCategory = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const pageCategory = useMemo(() => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)
    let category = null

    if (currentZoomNumber === 2) {
      return searchParams?.get('category') as CloudCategory
    }

    if (params?.category === CATEGORIES.stories) {
      const cloudCategoriesArray = Object.values(CLOUD_CATEGORIES)
      category = cloudCategoriesArray[Math.floor(Math.random() * cloudCategoriesArray.length)]
    } else {
      category = params?.category as CloudCategory
    }

    return category
  }, [pathname, searchParams])

  return {
    pageCategory,
  }
}
