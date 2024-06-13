import { InlineThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { useFilterSuggestionsQuery } from '@/features/shared/hooks/queries/useFilterSuggestionsQuery'
import { Filter, useFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { SEARCH_CATEGORIES, SearchCategory } from '@/features/shared/utils/categories'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
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
  const { t: commonT } = useTypeSafeTranslation('common')
  const { searchValue, searchCategory } = useSelector((state: State) => state.shared)
  const searchCategoryToTriplyEnum = useMemo(() => {
    if (searchCategory) {
      if (searchCategory === 'archives') return EnumTriplyrecordType.Archive
      if (searchCategory === 'objects') return EnumTriplyrecordType.Object
      if (searchCategory === 'people') return EnumTriplyrecordType.People
      if (searchCategory === 'publications') return EnumTriplyrecordType.Publication
      if (searchCategory === 'stories') return EnumTriplyrecordType.Media
    }
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
    return <InlineThemedSpinner />
  }

  if (isError) {
    return (
      <p
        className={TypographyVariants({
          socialLarge: 'md',
          className: 'pt-4',
        })}
      >
        {commonT('somethingWentWrongAndRetry')}
      </p>
    )
  }

  if (!suggestions || !suggestions.filterSuggestions || !searchCategory) {
    return <div>{commonT('noSuggestionsFound')}</div>
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
      {items.map(item => {
        return (
          <div className="max-w-full" key={item.value}>
            <SearchFilterBox
              category={category}
              subCategory={item.value}
              onClick={() =>
                handleSelectFilter({ field: category, value: item.value, id: item.value })
              }
            />
          </div>
        )
      })}
    </>
  )
}
