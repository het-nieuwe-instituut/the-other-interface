import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'

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
      2: category ? `/landingpage?category=${category}` : null,
      3: null,
    }
  }, [category])

  return {
    currentZoomNumber,
    previousZoomLinks,
  }
}
