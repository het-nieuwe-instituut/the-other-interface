import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { useState } from 'react'

interface Props {
  totalResults: string
}

export const GalaxySearchBar: React.FC<Props> = ({ totalResults }) => {
  const { t } = useTypeSafeTranslation('category')
  // TODO: move to use selector
  const [isOpen, setIsOpen] = useState(false)

  const { category, showInitialCategory } = usePresenter()

  return (
    <Grid
      position={'relative'}
      height="60px"
      templateColumns="auto 1fr"
      gap="5px"
      borderRadius={'5px'} // TODO: {'0 0 5px 5px'} if suggestion bar open
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
        <CategoryFilter
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          selectedOption={t(category)}
        />
      )}

      <SuggestionBar isOpen={isOpen} />
    </Grid>
  )
}
