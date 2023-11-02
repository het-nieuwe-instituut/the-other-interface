import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { CLOUD_CATEGORIES_ARRAY } from '@/features/shared/utils/categories'
import { usePresenter } from './usePresenter'

export const CategorySuggestions: React.FC = () => {
  const { t, searchCategory, setSearchCategory, isCategorySuggestionsOpen } = usePresenter()

  if (!isCategorySuggestionsOpen) return null

  return (
    <>
      {CLOUD_CATEGORIES_ARRAY.filter(category => category !== searchCategory).map(category => (
        <SearchFilterBox
          key={category}
          category={t('category')}
          subCategory={t(category)}
          onClick={() => setSearchCategory(category)}
        />
      ))}
    </>
  )
}
