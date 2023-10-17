import { Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { FilterInput, CloseButton } from './fragments'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions'
import { GoButton } from './fragments/GoButton'

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
  } = usePresenter()

  return (
    <Grid
      position={'relative'}
      height="60px"
      templateColumns={isSearchModeActive ? 'auto auto 1fr auto' : 'auto auto 1fr'}
      gap="15px"
      borderRadius={isCategorySuggestionsOpen ? '0 0 5px 5px' : '5px'}
      transition={'border-radius 0.3s ease-in-out'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 20px'}
      zIndex={FOOTER_Z_INDEX}
      onClick={!isSearchModeActive ? handleSearchModeOpen : undefined}
      cursor={!isSearchModeActive ? 'pointer' : 'default'}
    >
      <Flex justifyContent={'center'} alignItems={'center'} height="50px" zIndex={'inherit'}>
        <Text textStyle="socialLarge.lg">{t('resultsFor', { total: searchResultAmount })}</Text>
      </Flex>

      <CategoryFilter
        onClick={() => setIsCategorySuggestionsOpen(!isCategorySuggestionsOpen)}
        isOpen={isCategorySuggestionsOpen}
        selectedOption={category ? t(category) : ''}
      />

      <SuggestionBar isOpen={isCategorySuggestionsOpen}>
        <CategorySuggestions />
      </SuggestionBar>
      <FilterInput onFocus={handleSearchModeOpen} value={inputValue} onChange={handleInputChange} />

      {isSearchModeActive && (
        <Flex gap="12px" alignItems={'center'}>
          <GoButton handleClick={handleGoClick} />
          <CloseButton handleClick={handleSearchModeClose} />
        </Flex>
      )}
    </Grid>
  )
}
