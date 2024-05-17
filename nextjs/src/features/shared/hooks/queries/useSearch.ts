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
import { mapCategoryToTriplyEnum } from '../../helpers/mapCategoryToTriplyEnum'

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

  // TODO: mix story search
  const queryFn = async () => {
    switch (category) {
      case SEARCH_CATEGORIES.stories:
        const storiesResponse = await api.searchByStories({
          searchTerm: text || undefined,
          locale: lang ?? 'nl',
          page,
          pageSize: ZOOM2_RECORDS_PER_PAGE,
        })
        return {
          items:
            storiesResponse?.stories?.data
              ?.filter(Boolean)
              .map(story => storyToRecordMapper(story as StoryEntity)) ?? [],
          total: storiesResponse?.stories?.meta?.pagination?.total,
        }

      case SEARCH_CATEGORIES.all:
        const searchAllResult = await api.searchAll({
          text: text ?? '',
          page,
          lang: lang ?? 'nl',
          pageSize: ZOOM2_RECORDS_PER_PAGE,
        })

        return {
          items: searchAllResult?.searchTriply?.nodes ?? [],
          total: searchAllResult?.searchTriply?.total ?? 0,
        }

      default:
        const [data, totalData] = await Promise.all([
          api.Zoom2({
            entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
            text: text || undefined,
            page,
            pageSize: ZOOM2_RECORDS_PER_PAGE,
          }),
          api.Zoom2Amount({
            entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
            text: text || undefined,
          }),
        ])

        return {
          items:
            data?.zoomLevel2?.nodes?.map(node => ({
              id: node.id,
              title: node.title,
              thumbnail: node.thumbnail,
              type: mapCategoryToTriplyEnum(category),
            })) ?? [],
          total: totalData.zoomLevel2Amount.total,
        }
    }
  }

  const queryKey = [category, text, page, lang, category]

  return useQuery(queryKey, queryFn, {
    enabled,
    refetchOnWindowFocus: false,
  })
}
