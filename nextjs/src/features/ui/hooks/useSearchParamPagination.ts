import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { notFound, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { useDelayedNextRoutePush } from '../components/DelayedNextLink/DelayedNextLink'

export const useSearchParamPagination = (pageAmount: number, isResultAmountLoading = false) => {
  const delayedPush = useDelayedNextRoutePush(500)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { pageNumber: page } = usePageNumber()

  if (!isResultAmountLoading && pageAmount && page > pageAmount) {
    notFound()
  }

  const paginate = useCallback(
    (pageNumber: number) => {
      const updatedSearchParams = searchParams
        ? new URLSearchParams(searchParams.toString())
        : new URLSearchParams()

      updatedSearchParams.set('page', String(pageNumber))

      const url = pathname + `?${updatedSearchParams.toString()}`

      delayedPush(url)
    },
    [delayedPush, pathname, searchParams]
  )

  const increasePageNumber = useCallback(() => {
    if (page < pageAmount) {
      paginate(page + 1)
    }
  }, [page, pageAmount, paginate])

  const decreasePageNumber = useCallback(() => {
    if (page > 1) {
      paginate(page - 1)
    }
  }, [page, paginate])

  return {
    page,
    pageAmount,
    paginate,
    increasePageNumber,
    decreasePageNumber,
  }
}
