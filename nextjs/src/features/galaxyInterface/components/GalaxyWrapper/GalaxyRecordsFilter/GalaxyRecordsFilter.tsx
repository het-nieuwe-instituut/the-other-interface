import { Grid } from '@chakra-ui/react'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { FilterDropdown } from './fragments'
import { CloudCategory } from '@/features/shared/types/categories'

interface Props {
  category: CloudCategory
}

export const GalaxyRecordsFilter: React.FC<Props> = ({ category }) => {
  const { t } = useTypeSafeTranslation('landingpage')

  return (
    <Grid
      height="60px"
      templateColumns="auto 1fr"
      gap="5px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 20px'}
    >
      <FilterDropdown title={t('category') ?? ''} selectedOption={t(category) ?? ''} />
    </Grid>
  )
}
