import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { usePresenter } from './usePresenter'

export const CategorySuggestions: React.FC = () => {
  const { t, searchCategory, setSearchCategory, isCategorySuggestionsOpen } = usePresenter()

  if (!isCategorySuggestionsOpen) return null

  return (
    <>
      {Object.values(CLOUD_CATEGORIES)
        .filter(category => category !== searchCategory)
        .map(category => (
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
