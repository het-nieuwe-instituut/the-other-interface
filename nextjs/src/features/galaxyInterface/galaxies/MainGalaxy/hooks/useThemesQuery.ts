'use client'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { HighlightedHomepageThemesQuery } from 'src/generated/graphql'
import { GALAXY_QUERIES_STALE_TIME } from '../../galaxies.constants'
import { fetchHighlightedThemes } from '../helpers/fetchHighlightedThemes'

type ThemeData = NonNullable<
  NonNullable<
    NonNullable<
      HighlightedHomepageThemesQuery['highlightedHomepageThemes']['data']['attributes']
    >['highlightedThemes']
  >['data']
>[0]
export type StoriesData = NonNullable<
  NonNullable<NonNullable<ThemeData['attributes']>['stories']>
>['data']
export type StoryData = NonNullable<StoriesData>[0]
export type StoryComponentsDynamicZone = NonNullable<NonNullable<StoryData>['components']>

export function useThemesQuery({ page }: { page: number; fromCacheOnly?: boolean }) {
  const lang = useLocale()
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const publicationState = isDraftMode ? PublicationState.Preview : PublicationState.Live
  const fetchFn = fetchHighlightedThemes(lang, page, publicationState)

  const queryFn = async () => {
    const res = await fetchFn

    const data =
      res?.highlightedHomepageThemes?.data?.attributes?.highlightedThemes?.data?.[0]?.attributes

    const themeTitle = data?.name
    const highlightedStories = data?.highlightedStories?.data
    const stories = highlightedStories?.length ? highlightedStories : data?.stories?.data
    const pagination = res?.highlightedHomepageThemes.meta?.pagination

    return {
      themeTitle,
      stories,
      pagination,
    }
  }

  const query = useQuery({
    queryKey: getThemesQueryKey(page, lang, isDraftMode),
    queryFn,
    staleTime: GALAXY_QUERIES_STALE_TIME,
    refetchOnWindowFocus: false,
  })

  return {
    ...query,
    page,
  }
}

function getThemesQueryKey(
  page: number,
  lang: string,
  isDraftMode: boolean
): ['paginated-themes', number, string, boolean] {
  return ['paginated-themes', page, lang, isDraftMode]
}
