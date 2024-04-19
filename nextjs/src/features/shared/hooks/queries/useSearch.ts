'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { storyToRecordMapper } from '../../helpers/extractStoryData'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { StoryEntity } from 'src/generated/graphql'

export function useSearch({
  category,
  text,
  page = 1,
  enabled = true,
}: {
  category: SearchCategory
  text?: string
  page?: number
  enabled?: boolean
}) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = async () => {
    if (category === SEARCH_CATEGORIES.stories) {
      const response = await api.searchByStories({
        searchTerm: text || undefined,
        locale: lang ?? 'nl',
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
      const stories =
        response?.stories?.data
          ?.filter(Boolean)
          .map(story => storyToRecordMapper(story as StoryEntity)) ?? []
      const total = response?.stories?.meta?.pagination?.total
      return { items: stories, total }
    } else {
      const dataPromise = api.Zoom2({
        entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
        text: text || undefined,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
      const countPromise = api.Zoom2Amount({
        entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
        text: text || undefined,
      })

      const [data, totalData] = await Promise.all([dataPromise, countPromise])
      const records =
        data?.zoomLevel2?.nodes?.map(node => ({
          id: node.id,
          title: node.title,
          thumbnail: node.thumbnail,
        })) ?? []
      const total = totalData.zoomLevel2Amount.total

      return { items: records, total }
    }
  }

  const queryKey =
    category === SEARCH_CATEGORIES.stories
      ? ['searchByStories', category, text, page, lang]
      : ['search', category, text, page]

  return useQuery(queryKey, queryFn, {
    enabled,
    refetchOnWindowFocus: false,
  })
}
