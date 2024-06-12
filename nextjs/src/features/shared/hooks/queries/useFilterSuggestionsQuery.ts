'use client'
import { useQuery } from '@tanstack/react-query'
import { EnumTriplyrecordType } from 'src/generated/graphql'
import initApiClientService from '../../utils/initApiClientService'
import { useLocale } from '../useLocale'
import { debounce } from 'lodash'

export function useFilterSuggestionsQuery({
  type,
  search,
}: {
  type: EnumTriplyrecordType
  search: string
}) {
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = debounce(() => {
    return api.filterSuggestions({ type, search, locale: lang })
  }, 1000)

  return useQuery({
    queryKey: ['filter-suggestions-query', search],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
