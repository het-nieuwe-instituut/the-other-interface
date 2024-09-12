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
  SelectedFilterSuggestion,
  StringFilterInput,
  TriplyRecordFiltersInput,
} from 'src/generated/graphql'
import { STORIES_PER_PAGE, ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
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
