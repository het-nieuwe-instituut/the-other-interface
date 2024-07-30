import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { useFilterActions } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { SEARCH_CATEGORIES_ARRAY, SearchCategory } from '@/features/shared/utils/categories'
import { useDispatch, useSelector } from 'react-redux'

export const CategorySuggestions: React.FC = () => {
  const dispatch = useDispatch()

  const { searchCategory, isCategorySuggestionsOpen } = useSelector((state: State) => state.shared)

  const { t } = useTypeSafeTranslation('category')

  const { clearFilters } = useFilterActions()

  const handleClick = (category: SearchCategory) => {
    setSearchCategory(category)
    clearFilters()
  }

  function setSearchCategory(category: SearchCategory) {
    dispatch(sharedActions.searchCategory({ searchCategory: category }))
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
