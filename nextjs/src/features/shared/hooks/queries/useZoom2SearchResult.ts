'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { useSearchParams } from 'next/navigation'
import { storyToRecordMapper } from '../../helpers/extractStoryData'
import { StoryEntity } from 'src/generated/graphql'

export function useZoom2SearchResult({
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
  const entityName = CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory]

  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = async () => {
    if (category === SEARCH_CATEGORIES.stories) {
      const data = await api.searchByStories({
        searchTerm: text || undefined,
        locale: lang ?? 'nl',
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
      const stories = data?.stories?.data?.map(story => storyToRecordMapper(story as StoryEntity)) ?? []
      return  stories 
    } else {
      const data = await api.Zoom2({
        entityName,
        text: text || undefined,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
      const records = data?.zoomLevel2?.nodes?.map(node => ({
        id: node.id,
        title: node.title,
        thumbnail: node.thumbnail,
      })) ?? []

      return records
    }
  }

  const queryKey =
    category === SEARCH_CATEGORIES.stories
      ? ['searchByStories', category, text, page, lang]
      : ['Zoom2', entityName, text, page]

  return useQuery(queryKey, queryFn, {
    enabled,
    refetchOnWindowFocus: false,
  })
}
