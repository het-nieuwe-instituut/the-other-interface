'use client'
import { useQuery } from '@tanstack/react-query'
import { EnumTriplyrecordType } from 'src/generated/graphql'
import { useDebounceValue } from 'usehooks-ts'
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
  const [debouncedSearch] = useDebounceValue(search, 1000)

  const queryFn = () => {
    return api.filterSuggestions({ type, search: debouncedSearch, locale: lang })
  }

  return useQuery({
    queryKey: ['filter-suggestions-query', type, debouncedSearch],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
