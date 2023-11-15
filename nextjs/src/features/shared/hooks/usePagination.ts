import { usePathname, useRouter, useSearchParams, notFound } from 'next/navigation'
import { ZOOM2_RECORDS_PER_PAGE } from '../constants/mainConstants'
import { useCallback, useEffect } from 'react'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'

export const usePagination = (
  searchResultAmount: number,
  isResultAmountLoading = false,
  isKeyPressDisabled = true
) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { pageNumber: page } = usePageNumber()

  const pageAmount = searchResultAmount ? Math.ceil(searchResultAmount / ZOOM2_RECORDS_PER_PAGE) : 1

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

      router.push(url)
    },
    [pathname, router, searchParams]
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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isKeyPressDisabled) return

      if (e.key === 'ArrowRight') {
        increasePageNumber()
      } else if (e.key === 'ArrowLeft') {
        decreasePageNumber()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [increasePageNumber, decreasePageNumber, isKeyPressDisabled])

  return {
    page,
    pageAmount,
    paginate,
    increasePageNumber,
    decreasePageNumber,
  }
}
