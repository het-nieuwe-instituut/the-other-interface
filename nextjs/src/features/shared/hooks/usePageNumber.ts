import { useSearchParams } from 'next/navigation'
import { DEFAULT_PAGE_NUMBER } from '../constants/mainConstants'

export const usePageNumber = () => {
  const searchParams = useSearchParams()

  const page = searchParams
    ? Math.max(DEFAULT_PAGE_NUMBER, Number(searchParams.get('page') as string))
    : DEFAULT_PAGE_NUMBER

  return {
    pageNumber: page,
  }
}
