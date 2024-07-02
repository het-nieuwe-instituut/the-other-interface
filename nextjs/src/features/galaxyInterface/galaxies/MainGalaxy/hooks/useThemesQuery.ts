'use client'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery, useQueryClient } from '@tanstack/react-query'
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

export function getThemesQueryKey(
  page: number,
  lang: string,
  isDraftMode: boolean
): ['paginated-themes', number, string, boolean] {
  return ['paginated-themes', page, lang, isDraftMode]
}
export function useThemesQuery({ page }: { page: number; fromCacheOnly?: boolean }) {
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

  const queryFn = async () => {
    const res = await fetchHighlightedThemes(page)
    const storyTitle =
      res.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes
        ?.name
    const stories =
      res.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes
        ?.stories?.data || []
    const highlightedStories =
      res.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes
        ?.highlightedStories?.data

    const pagination = res?.highlightedHomepageThemes.meta?.pagination

    return {
      storyTitle,
      stories: highlightedStories && highlightedStories?.length > 0 ? highlightedStories : stories,
      pagination,
    }
  }

  const query = useQuery({
    queryKey: getThemesQueryKey(page, lang, isDraftMode),
    queryFn,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  return {
    ...query,
    page,
  }
}
