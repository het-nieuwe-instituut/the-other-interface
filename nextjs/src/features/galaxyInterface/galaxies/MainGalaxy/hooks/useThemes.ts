'use client'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { ThemesQuery } from 'src/generated/graphql'

export type ThemeData = NonNullable<ThemesQuery['themes']['data']>[0]
export type StoriesData = NonNullable<
  NonNullable<NonNullable<ThemeData['attributes']>['stories']>
>['data']
export type StoryData = NonNullable<StoriesData>[0]
export type StoryComponentsDynamicZone = NonNullable<
  NonNullable<StoryData['attributes']>['components']
>

export function useThemesQuery(page: number) {
  const api = initApiClientService()
  const lang = useLocale()
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const fetchHighlightedThemes = async (page: number) => {
    return await api?.highlightedHomepageThemes({
      locale: lang,
      pagination: { page, pageSize: 1 },
      publicationState: isDraftMode ? PublicationState.Preview : PublicationState.Live,
    })
  }

  const queryFn = async () => fetchHighlightedThemes(page)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['paginated-highlighted-themes', page, lang, isDraftMode],
    queryFn,
    refetchOnWindowFocus: false,
  })

  const storyTitle =
    data?.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes
      ?.name
  const stories =
    data?.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes
      ?.stories?.data || []
  const pagination = data?.highlightedHomepageThemes.meta?.pagination

  return { storyTitle, stories, pagination, isLoading, isError }
}
