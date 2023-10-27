'use client'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { MenuPagesQuery } from 'src/generated/graphql'
import { useSearchParams } from 'next/navigation'

export function useMenuPages(): UseQueryResult<MenuPagesQuery> {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const queryFn = () => api?.menuPages({ locale: lang })

  return useQuery({
    queryKey: ['menu-pages', lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
