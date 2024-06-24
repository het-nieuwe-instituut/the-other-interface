import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { SEARCH_CATEGORIES_ARRAY, SearchCategory } from '@/features/shared/utils/categories'
import { usePresenter } from './usePresenter'
import { useFilterActions } from '@/features/shared/hooks/search/useFilters'

export const CategorySuggestions: React.FC = () => {
  const { t, searchCategory, setSearchCategory, isCategorySuggestionsOpen } = usePresenter()
  const { clearFilters } = useFilterActions()

  const handleClick = (category: SearchCategory) => {
    setSearchCategory(category)
    clearFilters()
  }

  if (!isCategorySuggestionsOpen) return null

  return (
    <>
      {SEARCH_CATEGORIES_ARRAY.filter(category => category !== searchCategory).map(category => (
        <SearchFilterBox
          key={category}
          category={t('category')}
          subCategory={t(category)}
          onClick={() => handleClick(category)}
        />
      ))}
    </>
  )
}
