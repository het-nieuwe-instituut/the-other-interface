import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { getCurrentZoomNumber } from '../helpers/getCurrentZoomNumber'
import { CATEGORIES, Category, CLOUD_CATEGORIES } from '../utils/categories'

export const usePageCategory = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  const pageCategory = useMemo(() => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)
    let category: Category | null = null

    if (currentZoomNumber === 2) {
      category = searchParams?.get('category') as Category
    }

    if (currentZoomNumber === 3) {
      category = params?.category as Category
    }

    if (category === CATEGORIES.stories) {
      const cloudCategoriesArray = Object.values(CLOUD_CATEGORIES)
      category = cloudCategoriesArray[Math.floor(Math.random() * cloudCategoriesArray.length)]
      console.log('usePageCategory', pathname, params, searchParams)
    }

    return category
  }, [pathname])

  return {
    pageCategory,
  }
}
