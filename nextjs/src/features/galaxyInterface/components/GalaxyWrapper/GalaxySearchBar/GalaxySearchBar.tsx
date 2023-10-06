import { Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { FilterInput, FilterCloseButton } from './fragments'

interface Props {
  totalResults: string
}

export const GalaxySearchBar: React.FC<Props> = ({ totalResults }) => {
  const {
    category,
    showInitialCategory,
    isSearchModeActive,
    handleSearchModeClose,
    handleSearchModeOpen,
    setIsSuggestsOpen,
    currentZoomNumber,
    isSuggestsOpen,
    t,
  } = usePresenter()

  return (
    <Grid
      position={'relative'}
      height="60px"
      templateColumns={currentZoomNumber === 2 ? 'auto auto 1fr auto' : 'auto 1fr auto'}
      gap="5px"
      borderRadius={isSuggestsOpen ? '0 0 5px 5px' : '5px'}
      transition={'border-radius 0.3s ease-in-out'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 20px'}
      zIndex={FOOTER_Z_INDEX}
    >
      {totalResults && (
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          mr={4}
          height="50px"
          zIndex={'inherit'}
        >
          <Text textStyle="socialLarge.lg">{t('resultsFor', { total: totalResults })}</Text>
        </Flex>
      )}

      {showInitialCategory && category && (
        <CategoryFilter
          onClick={() => setIsSuggestsOpen(!isSuggestsOpen)}
          isOpen={isSuggestsOpen}
          selectedOption={t(category)}
        />
      )}
      <SuggestionBar isOpen={isSuggestsOpen} />
      <FilterInput onFocus={handleSearchModeOpen} />
      {isSearchModeActive && <FilterCloseButton handleClick={handleSearchModeClose} />}
    </Grid>
  )
}
