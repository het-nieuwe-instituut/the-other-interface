'use client'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function useThemes(isEnabled: boolean) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = useLocale()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')

  const fetchThemes = async (page: number) => {
    return api?.themes({
      locale: lang,
      pagination: { page, pageSize: 1 },
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    })
  }

  const queryFn = async () => {
    const [themes, nextThemes] = await Promise.all([
      fetchThemes(currentPage),
      fetchThemes(currentPage + 1),
    ])
    return [themes, nextThemes]
  }

  return useQuery({
    queryKey: ['paginated-themes', currentPage, lang, isEnabled],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
