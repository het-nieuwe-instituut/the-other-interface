import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const MAX_RECORDS_PER_PAGE = 12

export const usePagination = (searchResultAmount: number) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams ? Number(searchParams.get('page') as string) : 1
  const pageAmount = searchResultAmount ? Math.ceil(searchResultAmount / MAX_RECORDS_PER_PAGE) : 0

  const paginate = (pageNumber: number) => {
    let updatedSearchParams

    if (searchParams) {
      updatedSearchParams = new URLSearchParams(searchParams.toString())
      updatedSearchParams.set('page', String(pageNumber))
    } else {
      updatedSearchParams = new URLSearchParams()
      updatedSearchParams.set('page', String(pageNumber))
    }

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
