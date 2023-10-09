import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { Box } from '@chakra-ui/react'

interface Props {
  isOpen?: boolean
}

export const CategorySuggestions: React.FC<Props> = ({ isOpen = false }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <>
      {Object.values(CLOUD_CATEGORIES).map(category => (
        <Box key={category}>
          <SearchFilterBox category={t('category')} subCategory={t(category)} />
        </Box>
      ))}
    </>
  )
}
