'use client'
import initApiClientService from '../../utils/initApiClientService'
import { EntityNames } from 'src/generated/graphql'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from '../useLocale'

export const useStoriesRelationForRecord = (type: EntityNames, id: string) => {
  const api = initApiClientService()
  const lang = useLocale()
  const queryFn = () => api.StoriesRelationForRecord({ id, type, locale: lang })

  return useQuery({
    queryKey: ['stories-relation-for-record', id, type, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
