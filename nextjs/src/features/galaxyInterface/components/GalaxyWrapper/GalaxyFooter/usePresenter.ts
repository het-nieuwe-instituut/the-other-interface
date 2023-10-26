import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { usePathname } from 'next/navigation'

export const usePresenter = () => {
  const pathname = usePathname()
  const currentZoomNumber = getCurrentZoomNumber(pathname)

  return {
    showSearchBar: currentZoomNumber === 2 || currentZoomNumber === 3,
    showPagination: currentZoomNumber === 2,
  }
}
