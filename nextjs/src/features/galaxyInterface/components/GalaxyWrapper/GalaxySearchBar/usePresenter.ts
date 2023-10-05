import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

export const usePresenter = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  // TODO: refactor this, probably put category on zoom 3 to search param ?
  const getCurrentCategory = () => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)

    if (currentZoomNumber === 2) {
      return searchParams?.get('category') as Category
    }

    if (currentZoomNumber === 3) {
      return params?.category as Category
    }
  }

  const category = getCurrentCategory()

  return {
    category,
    showInitialCategory: category !== CATEGORIES.stories,
  }
}
