import { InlineThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { useFilterSuggestionsQuery } from '@/features/shared/hooks/queries/useFilterSuggestionsQuery'
import { Filter, useSelectedFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { EnumTriplyrecordType } from 'src/generated/graphql'
import { useDebounceValue } from 'usehooks-ts'

export const COLLECTION_HILIGHT_ID = 'collection-highlights-id'

export const CollectionHighlightsFilter = {
  key: 'Subjects',
  value: 'Collection Highlights',
  id: COLLECTION_HILIGHT_ID,
}

type Props = {
  handleSelectFilter: (filters: Filter) => void
  type: EnumTriplyrecordType
}

export const SuggestionsContainer: React.FC<Props> = ({ handleSelectFilter, type }) => {
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

  if (isLoading) {
    return (
      <div className="my-4">
        <InlineThemedSpinner />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="my-4">
        <p
          className={TypographyVariants({
            socialLarge: 'md',
          })}
        >
          {commonT('somethingWentWrongAndRetry')}
        </p>
      </div>
    )
  }

  if (!items || items.length === 0 || !searchCategory) {
    return (
      <div className="my-4">
        <p className={cn('text-pink.100', TypographyVariants({ socialLarge: 'textfield' }))}>
          {commonT('noSuggestionsFound')}
        </p>
      </div>
    )
  }

  return <Suggestions suggestionsData={items} handleSelectFilter={handleSelectFilter} />
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
      {suggestionsData.map(item => {
        return (
          <div className="max-w-full" key={item.value}>
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
