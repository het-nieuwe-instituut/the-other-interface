import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import { Flex, Box, Grid } from '@chakra-ui/react'

interface Props {
  isOpen?: boolean
}

export const SuggestionBar: React.FC<Props> = ({ isOpen = false }) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <Grid
      position={'absolute'}
      bottom={'60px'}
      height="75px"
      width={'100%'}
      gap="20px"
      borderRadius={'5px 5px 0 0'}
      backgroundColor={'blueAlpha.80'}
      padding={'5px 20px'}
      zIndex={FOOTER_Z_INDEX - 1}
      transform={isOpen ? 'translateY(0)' : 'translateY(100%)'}
      transition={
        'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
      }
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
      border="1px solid red"
      templateColumns={'146px 1fr'}
    >
      <Box width="146px" border="1px solid red"></Box>
      <Box overflow="hidden" width="100%">
        <Flex gap="5px" width={'100%'} overflowX="auto" paddingBottom="20px" marginBottom="-20px">
          {[...Object.values(CLOUD_CATEGORIES), ...Object.values(CLOUD_CATEGORIES)].map(
            category => (
              <Box key={category}>
                <SearchFilterBox category={t('category')} subCategory={t(category)} />
              </Box>
            )
          )}
        </Flex>
      </Box>
    </Grid>
  )
}
