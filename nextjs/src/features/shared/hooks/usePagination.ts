import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ZOOM2_RECORDS_PER_PAGE } from '../constants/mainConstants'

export const usePagination = (searchResultAmount: number) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams ? Number(searchParams.get('page') as string) : 1
  const pageAmount = searchResultAmount ? Math.ceil(searchResultAmount / ZOOM2_RECORDS_PER_PAGE) : 0

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
    pageAmount,
    paginate,
    increasePageNumber,
    decreasePageNumber,
  }
}
