'use client'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { State } from '@/features/shared/configs/store'
import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()
  const lang = useLocale()
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const fetchThemes = async (page: number) => {
    return api?.themes({
      locale: lang,
      pagination: { page, pageSize: 1 },
      publicationState: isDraftMode ? PublicationState.Preview : PublicationState.Live,
    })
  }

  const queryFn = async () => fetchThemes(page)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['paginated-themes', page, lang, isDraftMode],
    queryFn,
    refetchOnWindowFocus: false,
  })

  const storyTitle = data?.themes.data?.[0]?.attributes?.name
  const stories = data?.themes.data?.[0]?.attributes?.stories?.data || []
  const pagination = data?.themes.meta?.pagination

  return { storyTitle, stories, pagination, isLoading, isError }
}
