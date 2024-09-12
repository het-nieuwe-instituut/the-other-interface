import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { useFilterSuggestionsQuery } from '@/features/shared/hooks/queries/useFilterSuggestionsQuery'
import { Filter, useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
import { cn } from '@/features/ui/utils/cn'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { EnumTriplyrecordType } from 'src/generated/graphql'
import { useDebounceValue } from 'usehooks-ts'
import { SuggestionBar } from '../GalaxySearchBar/SuggestionBar/SuggestionBar'

export const COLLECTION_HILIGHT_ID = 'collection-highlights-id'

export const CollectionHighlightsFilter = {
  key: 'collectionHighlights',
  value: 'Collection highlgight / Uitgelichte stukken',
  id: COLLECTION_HILIGHT_ID,
}

type Props = {
  handleSelectFilter: (filters: Filter) => void
  type: EnumTriplyrecordType
  isUserInteracting: boolean
  isCategorySuggestionsOpen: boolean
  searchBarHeight: number
}

export const SuggestionsContainer: React.FC<Props> = ({
  handleSelectFilter,
  type,
  isCategorySuggestionsOpen,
  isUserInteracting,
  searchBarHeight,
}) => {
  const { t: categoryT } = useTypeSafeTranslation('category')
  const { t: commonT } = useTypeSafeTranslation('common')
  const { searchValue, searchCategory } = useSelector((state: State) => state.shared)
  const [debouncedSearchValue] = useDebounceValue(searchValue, 500)
  const selectedFilters = useSelectedFilters()
  const searchIsMatchShowingCollectionHighlight = CollectionHighlightsFilter.value
    .toLowerCase()
    .includes(searchValue.toLowerCase())

  const {
    data: suggestions,
    isLoading,
    isError,
  } = useFilterSuggestionsQuery({
    type,
    search: debouncedSearchValue,
  })

  const suggestionsData = useMemo(() => suggestions?.filterSuggestions || [], [suggestions])

  const items = useMemo(() => {
    const filteredSuggestions = suggestionsData.filter(
      s => !selectedFilters.some(f => f.key === s.key && f.value === s.value)
    )

    const filtersWithoutCollectionHighlights = selectedFilters.filter(
      f => f.id !== COLLECTION_HILIGHT_ID
    )

    if (
      searchIsMatchShowingCollectionHighlight &&
      filtersWithoutCollectionHighlights.length === 0 &&
      searchCategory !== SEARCH_CATEGORIES.stories
    ) {
      return [CollectionHighlightsFilter, ...filteredSuggestions]
    }

    return filteredSuggestions
  }, [searchCategory, searchIsMatchShowingCollectionHighlight, selectedFilters, suggestionsData])
  const isEmpty = !items || items.length === 0 || !searchCategory

  function getTranslation() {
    if (isLoading) {
      return commonT('loadingSuggestions')
    }
    if (isError) {
      return commonT('somethingWentWrongAndRetry')
    }
    if (isEmpty) {
      return commonT('noSuggestionsFound')
    }
    return categoryT('suggestions')
  }

  return (
    <SuggestionBar
      isOpen={isUserInteracting && !isCategorySuggestionsOpen}
      label={getTranslation()}
      offset={searchBarHeight}
      className={cn((isLoading || isError || isEmpty) && 'grid-cols-1 grid')}
      labelClassName={cn((isLoading || isError || isEmpty) && 'w-full')}
    >
      {!isLoading && !isError && !isEmpty ? (
        <Suggestions suggestionsData={items} handleSelectFilter={handleSelectFilter} />
      ) : null}
    </SuggestionBar>
  )
}

type SuggestionWithId = Suggestion & { id?: string }
type Suggestion = NonNullable<
  NonNullable<ReturnType<typeof useFilterSuggestionsQuery>['data']>['filterSuggestions']
>[0]

export const Suggestions = ({
  handleSelectFilter,
  suggestionsData,
}: {
  handleSelectFilter: (filterSuggestion: Filter) => void
  suggestionsData: SuggestionWithId[]
}) => {
  return (
    <>
      {suggestionsData.map((item, index, array) => {
        return (
          <div
            className="max-w-full"
            key={`${item.key}-${item.id}-${item.value}-${index}-${array.length}`}
          >
            <SearchFilterBox
              category={item.key}
              subCategory={item.value}
              onClick={() => handleSelectFilter({ id: item.id || item.value, ...item })}
            />
          </div>
        )
      })}
    </>
  )
}
