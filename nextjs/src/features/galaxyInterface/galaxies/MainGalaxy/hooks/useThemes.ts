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

export function useThemesQuery() {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = useLocale()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const fetchThemes = async (page: number) => {
    return api?.themes({
      locale: lang,
      pagination: { page, pageSize: 1 },
      publicationState: isDraftMode ? PublicationState.Preview : PublicationState.Live,
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
    queryKey: ['paginated-themes', currentPage, lang, isDraftMode],
    queryFn,
    refetchOnWindowFocus: false,
  })

  const [themes, nextThemes] = data ?? []

  const storyTitle = themes?.themes.data?.[0]?.attributes?.name
  const stories = themes?.themes.data?.[0]?.attributes?.stories?.data || []
  const nextStories = nextThemes?.themes.data?.[0]?.attributes?.stories?.data || []
  const pagination = themes?.themes.meta?.pagination

  return { storyTitle, stories, nextStories, pagination, isLoading, isError }
}
