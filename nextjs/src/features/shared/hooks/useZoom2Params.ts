import { useSearchParams } from 'next/navigation'
import { SearchCategory } from '@/features/shared/utils/categories'
import { useLocale } from './useLocale'

export const useZoom2Params = () => {
  const searchParams = useSearchParams()

  const category = searchParams?.get('category') as SearchCategory
  const search = searchParams?.get('search')
  const isSearchResult = searchParams?.get('searchResult')
  const filters = searchParams?.get('filters')
  const lang = useLocale()

  return {
    category,
    search: search || undefined,
    lang,
    isSearchResult: !!isSearchResult,
    filters,
  }
}
