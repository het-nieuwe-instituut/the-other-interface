'use client'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { sumTotalCounts } from '../helpers/sumTotalCounts'

export function useTotalCounter(shouldFetch = false) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'

  const queryFn = async () => {
    if (!shouldFetch) {
      return
    }
    const data = await api.totalCounter({
      locale: lang,
    })
    return sumTotalCounts(data)
  }

  return useQuery({
    queryKey: ['total-counter', lang, shouldFetch],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
