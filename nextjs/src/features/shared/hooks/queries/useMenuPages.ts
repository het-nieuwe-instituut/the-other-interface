'use client'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { MenuPagesQuery } from 'src/generated/graphql'
import { useLocale } from '../useLocale'

export function useMenuPages(): UseQueryResult<MenuPagesQuery> {
  const api = initApiClientService()
  const lang = useLocale()
  const queryFn = () => api?.menuPages({ locale: lang })

  return useQuery({
    queryKey: ['menu-pages', lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
