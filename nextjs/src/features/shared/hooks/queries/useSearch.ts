'use client'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { useQuery } from '@tanstack/react-query'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { mapCategoryToTriplyEnum } from '../../helpers/mapCategoryToTriplyEnum'
import { storyToRecordMapper } from '../../helpers/extractStoryData'
import initApiClientService from '../../utils/initApiClientService'
import { useLocale } from '../useLocale'

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
  const locale = useLocale()

  // TODO: mix story search
  const queryFn = async () => {
    switch (category) {
      case SEARCH_CATEGORIES.stories:
        const response = await api.searchByStories({
          searchTerm: text || undefined,
          locale,
          page,
          pageSize: ZOOM2_RECORDS_PER_PAGE,
        })
        const stories =
          response?.stories?.data?.filter(Boolean).map(story => storyToRecordMapper(story)) ?? []
        const total = response?.stories?.meta?.pagination?.total
        return { items: stories, total }
      case SEARCH_CATEGORIES.all:
        const searchAllResult = await api.searchAll({
          text: text ?? '',
          page,
          lang: locale,
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
            locale,
          }),
          api.Zoom2Amount({
            entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
            text: text || undefined,
            locale,
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

  const queryKey =
    category === SEARCH_CATEGORIES.stories
      ? ['searchByStories', category, text, page, locale]
      : ['search', category, text, page]

  return useQuery(queryKey, queryFn, {
    enabled,
    refetchOnWindowFocus: false,
  })
}
