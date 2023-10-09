import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { Box } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'

export const CategorySuggestions: React.FC = () => {
  const { t, searchCategory, setSearchCategory } = usePresenter()

  return (
    <>
      {Object.values(CLOUD_CATEGORIES).map(category => (
        <>
          {category !== searchCategory && (
            <Box key={category}>
              <SearchFilterBox
                category={t('category')}
                subCategory={t(category)}
                isClickable
                onClick={() => setSearchCategory(category)}
              />
            </Box>
          )}
        </>
      ))}
    </>
  )
}
