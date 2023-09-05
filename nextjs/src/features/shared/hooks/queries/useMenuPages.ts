'use client'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import useTranslation from 'next-translate/useTranslation'
import { MenuPagesQuery } from 'src/generated/graphql'

export function useMenuPages(): UseQueryResult<MenuPagesQuery> {
  const api = initApiClientService()
  const { lang } = useTranslation()
  const queryFn = () => api?.menuPages({ locale: lang })

  return useQuery({
    queryKey: ['menu-pages', lang],
    queryFn,
  })
}
