'use client'
import { COLLECTION_HILIGHT_ID } from '@/features/galaxyInterface/components/GalaxyWrapper/Suggestions/suggestions.constants'
import { searchCategoryToTriplyCategory } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/mappers/searchCategoryToTriplyMapper'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import {
  InputMaybe,
  Locale,
  SearchAllQuery,
  SearchByStoriesQuery,
  SelectedFilterSuggestion,
  StringFilterInput,
  TriplyRecordFiltersInput,
} from 'src/generated/graphql'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { storyToRecordMapper } from '../../helpers/extractStoryData'
import { mapCategoryToTriplyEnum } from '../../helpers/mapCategoryToTriplyEnum'
import mapSelectedHighlightToSearch from '../../mappers/mapSelectedHighlightToSearch'
import { sharedActions } from '../../stores/shared.store'
import initApiClientService from '../../utils/initApiClientService'
import { Filter, useDecodedSearchFilters, useSelectedFilters } from '../search/useFilters'
import { useLocale } from '../useLocale'

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
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const { decodedFilters } = useDecodedSearchFilters()
  const selectedFilters = useSelectedFilters()

  async function queryFn() {
    const selectedFiltersToInput = selectedFilters.map(f => ({ key: f.key, value: f.value }))
    const collectionHighlightsActive =
      decodedFilters.some(f => f.id === COLLECTION_HILIGHT_ID) ||
      selectedFilters.some(f => f.id === COLLECTION_HILIGHT_ID)
    if (collectionHighlightsActive) {
      const type = searchCategoryToTriplyCategory(category)
      const labelFilter: StringFilterInput = { containsi: text || undefined }

      const queryFilters: TriplyRecordFiltersInput = {
        and: [{ label: labelFilter, subject_collectionHighlights: { eq: true } }],
      }

      if (type) {
        const typeFilter: StringFilterInput = { eq: type }
        queryFilters.and?.push({ type: typeFilter })
      }

      const { isArchive, isObject, isPerson, isPublication } = getQueryOptions(category)
      const response = await api.searchBySelectedHighlights({
        filters: queryFilters,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
        isArchive: !!isArchive,
        isObject: !!isObject,
        isPerson: !!isPerson,
        isPublication: !!isPublication,
        locale,
      })

      if (!response?.triplyRecords?.data?.length && fallback) {
        // we cannot find any highlights, so we will search by category without highlights
        const sanitizedFilters = selectedFilters.filter(
          filter => filter.id !== COLLECTION_HILIGHT_ID
        )

        // doing this sideeffect here because other places would be too complicated
        dispatch(sharedActions.setFilters({ selectedFilters: sanitizedFilters }))
        const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))
        current.delete('filters')
        router.replace(`${pathname}?${current.toString()}`)

        return searchByCategory(api, locale, decodedFilters, {
          category,
          text,
          page,
          selectedFilters: sanitizedFilters,
        })
      }

      return {
        items:
          response?.triplyRecords?.data?.map(record => mapSelectedHighlightToSearch(record)) ?? [],
        total: response?.triplyRecords?.meta?.pagination?.total ?? 0,
      }
    }

    return searchByCategory(api, locale, decodedFilters, {
      category,
      text,
      page,
      selectedFilters: selectedFiltersToInput,
    })
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

function getQueryOptions(category: SearchCategory) {
  switch (category) {
    case SEARCH_CATEGORIES.all:
      return { isArchive: true, isObject: true, isPerson: true, isPublication: true }
    case SEARCH_CATEGORIES.archives:
      return { isArchive: true }
    case SEARCH_CATEGORIES.objects:
      return { isObject: true }
    case SEARCH_CATEGORIES.people:
      return { isPerson: true }
    case SEARCH_CATEGORIES.publications:
      return { isPublication: true }
    default:
      return {}
  }
}

async function searchByCategory(
  api: ReturnType<typeof initApiClientService>,
  locale: Locale,
  decodedFilters: Filter[],
  { category, text, page = 1, selectedFilters }: SearchArgs
) {
  switch (category) {
    case SEARCH_CATEGORIES.stories:
      return searchStories(api, { text, page, locale, decodedFilters })
    case SEARCH_CATEGORIES.all:
      return searchAll(api, page, locale, text)
    default:
      return searchCategory(api, locale, { category, text, page, selectedFilters })
  }
}

interface SearchStoriesArgs {
  text?: string
  page: number
  locale: Locale
  decodedFilters: Filter[]
}

async function searchStories(
  api: ReturnType<typeof initApiClientService>,
  args: SearchStoriesArgs
) {
  const { text, page, locale, decodedFilters } = args
  const { key: filterKey, id: filterId } = decodedFilters?.[0] || {}

  const response = await api.searchByStories({
    searchTerm: text || undefined,
    locationsFilterTerm: filterKey === 'location' ? filterId : undefined,
    themesFilterTerm: filterKey === 'theme' ? filterId : undefined,
    authorFilterTerm: filterKey === 'author' ? filterId : undefined,
    page,
    pageSize: ZOOM2_RECORDS_PER_PAGE,
    locale,
  })
  const stories =
    response?.stories?.data?.filter(Boolean).map(story => storyToRecordMapper(story)) ?? []
  const total = response?.stories?.meta?.pagination?.total

  return { items: stories, total }
}

async function searchAll(
  api: ReturnType<typeof initApiClientService>,
  page: number,
  locale: Locale,
  text?: string
) {
  const storyParams = { searchTerm: text ?? '', locale }
  const recordParams = { text: text ?? '', lang: locale }
  const noItemPagination = { start: 0, limit: 0 }

  const [storiesTotalRes, recordsTotalRes] = await Promise.all([
    api.searchByStories({ ...storyParams, ...noItemPagination }),
    api.searchAll({ ...recordParams, ...noItemPagination }),
  ])

  // total of 12 records per page
  // if there are 6 of each type, split them evenly
  // otherwise, if a type has less than 6, fill the rest with the other type
  // make sure to take the previous page into account
  const storiesTotal = storiesTotalRes.stories.meta?.pagination.total || 0
  const recordsTotal = recordsTotalRes.searchTriply.total || 0
  const total = storiesTotal + recordsTotal

  const paginationParams = getSearchAllPaginationParams(storiesTotal, recordsTotal, page)

  let storiesResult: SearchByStoriesQuery | undefined = undefined
  if (paginationParams.stories) {
    storiesResult = await api.searchByStories({
      searchTerm: text ?? '',
      limit: paginationParams.stories.limit,
      start: paginationParams.stories.start,
      locale,
    })
  }

  const searchStories = storiesResult?.stories?.data?.map(story => storyToRecordMapper(story)) ?? []

  let recordsResult: SearchAllQuery | undefined = undefined
  if (paginationParams.records) {
    recordsResult = await api.searchAll({
      text: text ?? '',
      lang: locale,
      limit: paginationParams.records.limit,
      start: paginationParams.records.start,
    })
  }

  return {
    items: [...searchStories, ...(recordsResult?.searchTriply?.nodes ?? [])],
    total,
  }
}

async function searchCategory(
  api: ReturnType<typeof initApiClientService>,
  locale: Locale,
  { category, text, page = 1, selectedFilters }: SearchArgs
) {
  const [data, totalData] = await Promise.all([
    api.Zoom2({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
      text: text || undefined,
      page,
      pageSize: ZOOM2_RECORDS_PER_PAGE,
      locale,
      selectedFilterSuggestions: selectedFilters,
    }),
    api.Zoom2Amount({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
      text: text || undefined,
      locale,
      selectedFilterSuggestions: selectedFilters,
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

/**
 * - max 12 items per page,
 * - 6 items per type when there are sufficient items of each type,
 * - otherwise, fill the rest with the other type
 */
function getSearchAllPaginationParams(storiesTotal: number, recordsTotal: number, page: number) {
  const halfPerPage = ZOOM2_RECORDS_PER_PAGE / 2
  const itemsPerPage = 12

  const fullStoryPages = Math.floor(storiesTotal / halfPerPage)
  const fullRecordPages = Math.floor(recordsTotal / halfPerPage)
  const remainingStoryItems = storiesTotal % halfPerPage
  const remainingRecordItems = recordsTotal % halfPerPage

  const lastFullPage = Math.min(fullRecordPages, fullStoryPages)

  if (page <= lastFullPage || fullRecordPages === fullStoryPages) {
    const start = (page - 1) * halfPerPage

    return {
      stories: { start, limit: halfPerPage },
      records: { start, limit: halfPerPage },
    }
  }

  if (page === lastFullPage + 1) {
    const start = (page - 1) * halfPerPage

    if (fullStoryPages > fullRecordPages) {
      return {
        stories: { start, limit: itemsPerPage - remainingRecordItems },
        records: { start, limit: remainingRecordItems },
      }
    }

    return {
      stories: { start, limit: remainingStoryItems },
      records: { start, limit: itemsPerPage - remainingStoryItems },
    }
  }

  const normalPageOffset = lastFullPage * halfPerPage
  const pageWithSingleTypeOnlyOffset = (page - lastFullPage - 2) * itemsPerPage

  if (fullStoryPages > fullRecordPages) {
    const partialStoryPageOffset = itemsPerPage - remainingRecordItems
    const start = partialStoryPageOffset + pageWithSingleTypeOnlyOffset + normalPageOffset

    return {
      stories: { start, limit: itemsPerPage },
      records: null,
    }
  }

  const partialRecordPageOffset = itemsPerPage - remainingStoryItems
  const start = partialRecordPageOffset + pageWithSingleTypeOnlyOffset + normalPageOffset

  return {
    stories: null,
    records: { start, limit: itemsPerPage },
  }
}
