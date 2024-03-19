'use client'
import { useSearchParams } from 'next/navigation'
import initApiClientService from '../../utils/initApiClientService'
import { EntityNames } from 'src/generated/graphql'
import { useQuery } from '@tanstack/react-query'

export const useStoriesRelationForRecord = (type: EntityNames, id: string) => {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const queryFn = () => api.StoriesRelationForRecord({ id, type, lang: lang ?? 'nl' })

  return useQuery({
    queryKey: ['stories-relation-for-record', id, type, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
