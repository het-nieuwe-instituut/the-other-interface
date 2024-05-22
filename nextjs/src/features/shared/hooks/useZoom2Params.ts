import { useSearchParams } from 'next/navigation'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useLocale } from './useLocale'

export const useZoom2Params = () => {
  const searchParams = useSearchParams()

  const category = searchParams?.get('category') as CloudCategory
  const search = searchParams?.get('search')
  const lang = useLocale()

  return {
    category,
    search: search || undefined,
    lang,
  }
}
