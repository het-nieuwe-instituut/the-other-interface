import { usePathname, useRouter, useSearchParams, notFound } from 'next/navigation'
import { DEFAULT_PAGE_NUMBER, ZOOM2_RECORDS_PER_PAGE } from '../constants/mainConstants'

export const usePagination = (searchResultAmount: number) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams
    ? Math.max(DEFAULT_PAGE_NUMBER, Number(searchParams.get('page') as string))
    : DEFAULT_PAGE_NUMBER
  const pageAmount = searchResultAmount ? Math.ceil(searchResultAmount / ZOOM2_RECORDS_PER_PAGE) : 0

  if (pageAmount && page > pageAmount) {
    notFound()
  }

  const paginate = (pageNumber: number) => {
    const updatedSearchParams = searchParams
      ? new URLSearchParams(searchParams.toString())
      : new URLSearchParams()

    updatedSearchParams.set('page', String(pageNumber))

    const url = pathname + `?${updatedSearchParams.toString()}`

    router.push(url)
  }

  const increasePageNumber = () => {
    if (page < pageAmount) {
      paginate(page + 1)
    }
  }

  const decreasePageNumber = () => {
    if (page > 1) {
      paginate(page - 1)
    }
  }

  return {
    page,
    pageAmount,
    paginate,
    increasePageNumber,
    decreasePageNumber,
  }
}
