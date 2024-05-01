import { useSearchParams } from 'next/navigation'
import { SearchCategory } from '@/features/shared/utils/categories'

export const useZoom2Params = () => {
  const searchParams = useSearchParams()

  const category = searchParams?.get('category') as SearchCategory
  const search = searchParams?.get('search')
  const lang = searchParams?.get('lang')
  const isSearchResult = searchParams?.get('searchResult')

  return {
    category,
    search: search || undefined,
    lang,
    isSearchResult: !!isSearchResult,
  }
}
