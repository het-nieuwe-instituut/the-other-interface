import { CloudCategory } from '@/features/shared/utils/categories'
import { useRouter, useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const usePresenter = () => {
  const pathname = usePathname()

  const currentZoomNumber = useMemo(() => {
    if (pathname?.includes('detail')) return 3
    if (pathname?.includes('landingpage')) return 2

    return 1
  }, [pathname])

  return {
    currentZoomNumber,
  }
}
