import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { FilterDropdown } from './fragments'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Flex, Grid, Text } from '@/features/shared/configs/chakra'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'

interface Props {
  category: CloudCategory
  total: string
}

export const GalaxyRecordsFilter: React.FC<Props> = ({ category, total }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <Grid
      height="60px"
      templateColumns="auto 1fr"
      gap="5px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 20px'}
      zIndex={FOOTER_Z_INDEX}
    >
      <Flex justifyContent={'center'} alignItems={'center'} mr={4} height="50px">
        <Text textStyle="socialLarge.lg">{t('resultsFor', { total })}</Text>
      </Flex>
      <FilterDropdown title={t('category')} selectedOption={t(category) ?? ''} />
    </Grid>
  )
}
