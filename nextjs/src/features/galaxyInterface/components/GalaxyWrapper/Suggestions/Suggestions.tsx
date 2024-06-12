import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { useFilterSuggestionsQuery } from '@/features/shared/hooks/queries/useFilterSuggestionsQuery'
import { Filter, useFilters } from '@/features/shared/hooks/search/useFilters'
import { SEARCH_CATEGORIES, SearchCategory } from '@/features/shared/utils/categories'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { EnumTriplyrecordType } from 'src/generated/graphql'

export const COLLECTION_HILIGHT_ID = 'collection-highlights-id'

export const CollectionHighlightsFilter = {
  field: 'Subjects',
  value: 'Collection Highlights',
  id: COLLECTION_HILIGHT_ID,
}

type Props = {
  handleSelectFilter: (filters: Filter) => void
}

export const SuggestionsContainer: React.FC<Props> = ({ handleSelectFilter }) => {
  const { searchValue, searchCategory } = useSelector((state: State) => state.shared)
  const searchCategoryToTriplyEnum = useMemo(() => {
    if (searchCategory) {
      if (searchCategory === 'archives') return EnumTriplyrecordType.Archive
      if (searchCategory === 'objects') return EnumTriplyrecordType.Object
      if (searchCategory === 'people') return EnumTriplyrecordType.People
      if (searchCategory === 'publications') return EnumTriplyrecordType.Publication
      if (searchCategory === 'stories') return EnumTriplyrecordType.Media
      if (searchCategory === 'all') return EnumTriplyrecordType.Media
    }
    return EnumTriplyrecordType.Media
  }, [searchCategory])

  const {
    data: suggestions,
    isLoading,
    isError,
  } = useFilterSuggestionsQuery({
    type: searchCategoryToTriplyEnum,
    search: searchValue,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !suggestions || !suggestions.filterSuggestions || !searchCategory) {
    return <ErrorBox />
  }

  return (
    <Suggestions
      suggestionsData={suggestions.filterSuggestions}
      handleSelectFilter={handleSelectFilter}
      category={searchCategory}
    />
  )
}

export const Suggestions = ({
  handleSelectFilter,
  suggestionsData,
  category,
}: {
  handleSelectFilter: (filters: Filter) => void
  suggestionsData: NonNullable<
    NonNullable<ReturnType<typeof useFilterSuggestionsQuery>['data']>['filterSuggestions']
  >
  category: SearchCategory
}) => {
  const { selectedFilters } = useFilters()
  const { searchValue, searchCategory } = useSelector((state: State) => state.shared)
  const searchIsMatchShowingCollectionHighlight = CollectionHighlightsFilter.value
    .toLowerCase()
    .includes(searchValue.toLowerCase())

  const items = useMemo(() => {
    const filtersWithoutCollectionHighlights = selectedFilters.filter(
      filter => filter.id !== COLLECTION_HILIGHT_ID
    )

    if (
      searchIsMatchShowingCollectionHighlight &&
      filtersWithoutCollectionHighlights.length === 0 &&
      searchCategory !== SEARCH_CATEGORIES.stories
    ) {
      return [
        { value: CollectionHighlightsFilter.value, key: CollectionHighlightsFilter.field },
        ...suggestionsData,
      ]
    }

    return suggestionsData
  }, [searchCategory, searchIsMatchShowingCollectionHighlight, selectedFilters, suggestionsData])

  return (
    <>
      {items.map(item => (
        <div className="max-w-full" key={item.value}>
          <SearchFilterBox
            category={category}
            subCategory={item.value}
            onClick={() => handleSelectFilter(item)}
          />
        </div>
      ))}
    </>
  )
}
