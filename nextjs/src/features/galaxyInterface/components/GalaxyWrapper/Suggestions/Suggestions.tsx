import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { Filter, useFilters } from '@/features/shared/hooks/search/useFilters'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const mockData = [
  {
    field: 'Maker',
    value:
      'Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg Theo van Doesburg',
    id: '1',
  },
  {
    field: 'Subject',
    value: 'Monuments',
    id: '2',
  },
  {
    field: 'Subject',
    value: 'Architecture',
    id: '3',
  },
  {
    field: 'Material',
    value: 'Cardboard',
    id: '4',
  },
  {
    field: 'Maker',
    value: 'Jan Wils',
    id: '5',
  },
]

export const COLLECTION_HILIGHT_ID = 'collection-highlights-id'

const CollectionHighlightsFilter = {
  field: 'Subjects',
  value: 'Collection Highlights',
  id: COLLECTION_HILIGHT_ID,
}

type Props = {
  handleSelectFilter: (filters: Filter) => void
}

export const Suggestions: React.FC<Props> = ({ handleSelectFilter }) => {
  const { searchValue } = useSelector((state: State) => state.shared)
  const searchIsMatchShowingCollectionHighlight = CollectionHighlightsFilter.value
    .toLowerCase()
    .includes(searchValue.toLowerCase())

  const { selectedFilters } = useFilters()

  console.log('selectedFilters', selectedFilters)

  const items = useMemo(() => {
    const filtersWithoutCollectionHighlights = selectedFilters.filter(
      filter => filter.id !== COLLECTION_HILIGHT_ID
    )

    if (
      searchIsMatchShowingCollectionHighlight &&
      filtersWithoutCollectionHighlights.length === 0
    ) {
      return [CollectionHighlightsFilter, ...mockData]
    }

    return mockData
  }, [searchIsMatchShowingCollectionHighlight, mockData, selectedFilters])

  return (
    <>
      {items.map(item => (
        <div className="max-w-full" key={item.id}>
          <SearchFilterBox
            category={item.field}
            subCategory={item.value}
            onClick={() => handleSelectFilter(item)}
          />
        </div>
      ))}
    </>
  )
}
