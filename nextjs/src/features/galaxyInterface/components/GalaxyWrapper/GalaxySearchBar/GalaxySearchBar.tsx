import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './fragments'

interface Props {
  totalResults: string
}

export const GalaxySearchBar: React.FC<Props> = ({ totalResults }) => {
  const { t } = useTypeSafeTranslation('category')

  const { category, showInitialCategory } = usePresenter()

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
      {totalResults && (
        <Flex justifyContent={'center'} alignItems={'center'} mr={4} height="50px">
          <Text textStyle="socialLarge.lg">{t('resultsFor', { total: totalResults })}</Text>
        </Flex>
      )}

      {showInitialCategory && category && (
        <CategoryFilter title={t('category')} selectedOption={t(category)} />
      )}
    </Grid>
  )
}
