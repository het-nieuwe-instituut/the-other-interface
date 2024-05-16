import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { usePresenter } from './usePresenter'
import { Box } from '@chakra-ui/react'
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

type Props = {
  handleSelectFilter: (filters: Filter) => void
}

export const Suggestions: React.FC<Props> = ({ handleSelectFilter }) => {
  const { isCategorySuggestionsOpen } = usePresenter()

  if (!isCategorySuggestionsOpen) return null

  return (
    <>
      {mockData.map(item => (
        <Box key={item.id} onClick={() => handleSelectFilter(item)} maxWidth={'100%'}>
          <SearchFilterBox category={item.field} subCategory={item.value} />
        </Box>
      ))}
    </>
  )
}
