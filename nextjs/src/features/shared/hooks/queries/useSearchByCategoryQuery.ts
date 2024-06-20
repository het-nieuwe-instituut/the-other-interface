'use client'
import { COLLECTION_HILIGHT_ID } from '@/features/galaxyInterface/components/GalaxyWrapper/Suggestions/Suggestions'
import { searchCategoryToTriplyCategory } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/mappers/searchCategoryToTriplyMapper'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { useQuery } from '@tanstack/react-query'
import {
  InputMaybe,
  SelectedFilterSuggestion,
  StringFilterInput,
  TriplyRecordFiltersInput,
} from 'src/generated/graphql'
import { STORIES_PER_PAGE, ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { storyToRecordMapper } from '../../helpers/extractStoryData'
import { mapCategoryToTriplyEnum } from '../../helpers/mapCategoryToTriplyEnum'
import initApiClientService from '../../utils/initApiClientService'
import { Filter, useDecodedSearchFilters, useSelectedFilters } from '../search/useFilters'
import { useLocale } from '../useLocale'
import mapSelectedHighlightToSearch from '../../mappers/mapSelectedHighlightToSearch'

type SearchArgs = {
  category: SearchCategory
  text?: string
  page?: number
  enabled?: boolean
  filters?: Filter[]
  fallback?: boolean
  selectedFilters: InputMaybe<Array<SelectedFilterSuggestion> | SelectedFilterSuggestion>
}

export function useSearchByCategoryQuery({
  category,
  text,
  page = 1,
  enabled = true,
  fallback = false,
}: SearchArgs) {
  const api = initApiClientService()
  const locale = useLocale()
  const { decodedFilters } = useDecodedSearchFilters()
  const selectedFilters = useSelectedFilters()
  const selectedFiltersToInput = selectedFilters.map(filter => ({
    key: filter.key,
    value: filter.value,
  }))

  // TODO: mix story search
  const queryFn = async () => {
    if (decodedFilters?.find(filter => filter.id === COLLECTION_HILIGHT_ID)) {
      const type = searchCategoryToTriplyCategory(category)

      const labelFilter: StringFilterInput = { containsi: text || undefined }

      const queryFilters: TriplyRecordFiltersInput = {
        and: [{ label: labelFilter }],
      }

      if (type) {
        const typeFilter: StringFilterInput = { eq: type }
        queryFilters.and?.push({ type: typeFilter })
      }

      const isArchive =
        category === SEARCH_CATEGORIES.archives || category === SEARCH_CATEGORIES.all
      const isObject = category === SEARCH_CATEGORIES.objects || category === SEARCH_CATEGORIES.all
      const isPerson = category === SEARCH_CATEGORIES.people || category === SEARCH_CATEGORIES.all
      const isPublication =
        category === SEARCH_CATEGORIES.publications || category === SEARCH_CATEGORIES.all

      const response = await api.searchBySelectedHighlights({
        filters: queryFilters,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
        isArchive,
        isObject,
        isPerson,
        isPublication,
        locale,
      })

      if (
        (response?.triplyRecords?.data?.length === 0 || !response?.triplyRecords?.data) &&
        fallback
      ) {
        return await searchByCategory({
          category,
          text,
          page,
          selectedFilters: selectedFiltersToInput,
        })
      }

      return {
        items:
          response?.triplyRecords?.data?.map(record => mapSelectedHighlightToSearch(record)) ?? [],
        total: response?.triplyRecords?.meta?.pagination?.total ?? 0,
      }
    }
    return await searchByCategory({ category, text, page, selectedFilters: selectedFiltersToInput })
  }

  async function searchByCategory({ category, text, page = 1 }: SearchArgs) {
    switch (category) {
      case SEARCH_CATEGORIES.stories:
        const response = await api.searchByStories({
          searchTerm: text || undefined,
          locationsFilterTerm:
            decodedFilters.length !== 0 && decodedFilters[0].key === 'location'
              ? decodedFilters[0].id
              : undefined,
          themesFilterTerm:
            decodedFilters.length !== 0 && decodedFilters[0].key === 'theme'
              ? decodedFilters[0].id
              : undefined,

          authorFilterTerm:
            decodedFilters.length !== 0 && decodedFilters[0].key === 'author'
              ? decodedFilters[0].id
              : undefined,
          page,
          pageSize: ZOOM2_RECORDS_PER_PAGE,
          locale,
        })
        const stories =
          response?.stories?.data?.filter(Boolean).map(story => storyToRecordMapper(story)) ?? []
        const total = response?.stories?.meta?.pagination?.total

        return { items: stories, total }
      case SEARCH_CATEGORIES.all:
        const storiesData = await api.searchByStories({
          searchTerm: text ?? '',
          page,
          pageSize: 1,
          locale,
        })

        const storiesTotal = storiesData?.stories?.meta?.pagination?.total ?? 0
        const storyPagesAmount = Math.ceil(storiesTotal / STORIES_PER_PAGE)

        const storiesSearchResponse = await api.searchByStories({
          searchTerm: text ?? '',
          page: page > storyPagesAmount ? storyPagesAmount : page,
          pageSize: STORIES_PER_PAGE,
          locale,
        })

        const searchStories =
          storiesSearchResponse?.stories?.data?.map(story => storyToRecordMapper(story)) ?? []

        const searchAllResult = await api.searchAll({
          text: text ?? '',
          page: page,
          lang: locale,
          pageSize: ZOOM2_RECORDS_PER_PAGE - STORIES_PER_PAGE,
        })

        return {
          items: [...searchStories, ...(searchAllResult?.searchTriply?.nodes ?? [])],
          total: storiesTotal + (+searchAllResult.searchTriply?.total || 0),
        }

      default:
        const [data, totalData] = await Promise.all([
          api.Zoom2({
            entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
            text: text || undefined,
            page,
            pageSize: ZOOM2_RECORDS_PER_PAGE,
            locale,
            selectedFilterSuggestions: selectedFiltersToInput,
          }),
          api.Zoom2Amount({
            entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
            text: text || undefined,
            locale,
            selectedFilterSuggestions: selectedFiltersToInput,
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
      ? ['searchByStories', category, text, page, locale, decodedFilters]
      : ['search', category, text, page, decodedFilters]

  return useQuery(queryKey, queryFn, {
    enabled,
    refetchOnWindowFocus: false,
  })
}
