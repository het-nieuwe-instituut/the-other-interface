import { SearchCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { useLocale } from './useLocale'

export const useZoom2Params = () => {
  const searchParams = useSearchParams()
  const lang = useLocale()

  const { category, search, isSearchResult, filters } = useMemo(() => {
    return {
      category: searchParams?.get('category') as SearchCategory,
      search: searchParams?.get('search'),
      isSearchResult: searchParams?.get('searchResult'),
      filters: searchParams?.get('filters'),
    }
  }, [searchParams])

  return {
    category,
    search: search || undefined,
    lang,
    isSearchResult: !!isSearchResult,
    filters: filters || undefined,
  }
}
