'use client'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { sumTotalCounts } from '../helpers/sumTotalCounts'
import { useSelector } from 'react-redux'
import { State } from '@/features/shared/configs/store'

export function useTotalCounter(shouldFetch = false) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'
  const { searchCategory } = useSelector((state: State) => state.shared)

  const queryFn = async () => {
    if (!shouldFetch) {
      return
    }
    const data = await api.totalCounter({
      locale: lang,
    })
    return sumTotalCounts(data, searchCategory)
  }

  return useQuery({
    queryKey: ['total-counter', lang, shouldFetch, searchCategory],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
