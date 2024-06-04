'use client'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { sumTotalCounts } from '../helpers/sumTotalCounts'
import { useSelector } from 'react-redux'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'

export function useTotalCounterQuery() {
  const api = initApiClientService()
  const locale = useLocale()
  const { searchCategory } = useSelector((state: State) => state.shared)

  const queryFn = async () => {
    const data = await api.totalCounter({
      locale,
    })
    return sumTotalCounts(data, searchCategory)
  }

  return useQuery({
    queryKey: ['total-counter', locale, searchCategory],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
