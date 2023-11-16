import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { FilterInput, CloseButton } from './fragments'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions'
import { GoButton } from './fragments/GoButton'
import { SearchButton } from './fragments/SearchButton'

export const GalaxySearchBar: React.FC = () => {
  const {
    category,
    isSearchModeActive,
    handleSearchModeClose,
    handleSearchModeOpen,
    isCategorySuggestionsOpen,
    setIsCategorySuggestionsOpen,
    handleGoClick,
    t,
    searchResultAmount,
    inputValue,
    handleInputChange,
    searchBarRef,
  } = usePresenter()

  return (
    <Grid
      position={'relative'}
      height="60px"
      templateColumns={`145px minmax(20px, 1fr) ${
        isSearchModeActive ? 'minmax(95px, auto)' : '23px'
      } `}
      gap="15px"
      borderRadius={isCategorySuggestionsOpen ? '0 0 5px 5px' : '5px'}
      transition={'border-radius 0.3s ease-in-out'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 15px'}
      zIndex={FOOTER_Z_INDEX}
      onClick={!isSearchModeActive ? handleSearchModeOpen : undefined}
      cursor={!isSearchModeActive ? 'pointer' : 'default'}
      ref={searchBarRef}
      color={'pinkAlpha.100'}
    >
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        height="50px"
        zIndex={'inherit'}
        whiteSpace={'nowrap'}
      >
        <Text textStyle="socialLarge.lg">{searchResultAmount}</Text>
        <Text textStyle="socialLarge.lg">{t('resultsFor')}</Text>
      </Flex>

      <Box overflow="hidden" height={'100%'}>
        <Grid
          templateColumns={'auto minmax(70px, 1fr)'}
          gap="15px"
          width="100%"
          overflowX="auto"
          paddingBottom="25px"
          marginBottom="-25px"
        >
          <CategoryFilter
            onClick={() => setIsCategorySuggestionsOpen(!isCategorySuggestionsOpen)}
            isOpen={isCategorySuggestionsOpen}
            selectedOption={category ? t(category) : ''}
          />
          <FilterInput
            onFocus={handleSearchModeOpen}
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Box>

      <Flex gap="12px" alignItems={'center'} justifyContent={'flex-end'} zIndex={'inherit'}>
        {isSearchModeActive ? (
          <>
            <GoButton handleClick={handleGoClick} />
            <CloseButton handleClick={handleSearchModeClose} />
          </>
        ) : (
          <SearchButton />
        )}
      </Flex>

      <SuggestionBar isOpen={isCategorySuggestionsOpen}>
        <CategorySuggestions />
      </SuggestionBar>
    </Grid>
  )
}
