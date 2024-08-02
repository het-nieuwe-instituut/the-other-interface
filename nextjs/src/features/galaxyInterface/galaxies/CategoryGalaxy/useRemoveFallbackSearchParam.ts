import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useRemoveFallbackSearchParam = ({
  fallback,
  isResultAmountLoading,
  isError,
  searchResultAmount,
}: {
  fallback: boolean
  isResultAmountLoading: boolean
  isError: boolean
  searchResultAmount: number
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    if (fallback && !isResultAmountLoading && !isError && searchResultAmount > 0) {
      const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))
      current.delete('fallback')
      const search = current.toString()
      const query = search ? `?${search}` : ''
      router.replace(`${pathname}${query}`)
    }
  }, [fallback, isError, isResultAmountLoading, searchResultAmount, router, pathname, searchParams])
}
