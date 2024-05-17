'use client'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { ThemesQuery } from 'src/generated/graphql'

export type ThemeData = NonNullable<ThemesQuery['themes']['data']>[0]
export type StoriesData = NonNullable<NonNullable<NonNullable<ThemeData['attributes']>['stories']>>

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['paginated-themes', currentPage, lang, isEnabled],
    queryFn,
    enabled: isEnabled, // Ensure the query only runs when isEnabled is true
    refetchOnWindowFocus: false,
  })

  const [themes, nextThemes] = data ?? []

  const storyTitle = themes?.themes.data?.[0]?.attributes?.name
  const stories = themes?.themes.data?.[0]?.attributes?.stories?.data || []
  const nextStories = nextThemes?.themes.data?.[0]?.attributes?.stories?.data || []
  const pagination = themes?.themes.meta?.pagination

  return { storyTitle, stories, nextStories, pagination, isLoading, isError }
}
