'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../utils/categories'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useRecordDetail(type: Category, id: string) {
  const api = initApiClientService()
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const urlSearchParams = new URLSearchParams(window.location.search)
  const lang2 = urlSearchParams.get('lang')
  const queryClient = useQueryClient()
  const [cacheWasCleanedFor, setCacheWasCleanedFor] = useState<string | null | undefined>(undefined)

  const queryFn = () => getZoom3RecordTask(type, { id, locale: lang ?? 'nl' }, api)

  console.log(lang, 'lang1')
  console.log(lang2, 'lang2')

  // useEffect(() => {
  //   if (lang !== cacheWasCleanedFor) {
  //     console.log('ivalidate cache')
  //     queryClient.invalidateQueries(['record-detail', id, lang])
  //     setCacheWasCleanedFor(lang)
  //   }
  // }, [lang])

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
