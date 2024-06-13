'use client'
import { useQuery } from '@tanstack/react-query'
import { EnumTriplyrecordType } from 'src/generated/graphql'
import initApiClientService from '../../utils/initApiClientService'
import { useLocale } from '../useLocale'

export function useFilterSuggestionsQuery({
  type,
  search,
}: {
  type: EnumTriplyrecordType
  search: string
}) {
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = () => {
    return api.filterSuggestions({ type, search: search, locale: lang })
  }

  return useQuery({
    queryKey: ['filter-suggestions-query', type, search],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
