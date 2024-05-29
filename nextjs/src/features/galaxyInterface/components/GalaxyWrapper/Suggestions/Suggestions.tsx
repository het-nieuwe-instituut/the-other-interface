import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { Filter } from '@/features/shared/hooks/search/useFilters'

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
  return (
    <>
      {[...[CollectionHighlightsFilter], ...mockData].map(item => (
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
