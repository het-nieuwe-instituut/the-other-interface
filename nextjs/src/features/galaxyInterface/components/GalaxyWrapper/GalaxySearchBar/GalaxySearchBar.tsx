import { Flex, Grid, Text } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { FilterInput, CloseButton } from './fragments'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions'
import { GoButton } from './fragments/GoButton'
import { SearchButton } from './fragments/SearchButton'
import { Suggestions } from '../Suggestions/Suggestions'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { useSearchBarPosition } from './useSearchBarPosition'
import CloseIconSmall from '@/icons/close-icon-small.svg'

type Props = {
  total?: number
  isNoActiveSearch?: boolean
}

export const GalaxySearchBar: React.FC<Props> = ({ total, isNoActiveSearch }) => {
  const {
    category,
    isSearchModeActive,
    handleSearchModeOpen,
    isCategorySuggestionsOpen,
    setIsCategorySuggestionsOpen,
    handleGoClick,
    t,
    searchResultAmount,
    inputValue,
    handleInputChange,
    searchBarRef,
    filterInputRef,
    handleClearAll,
    isUserTyping,
    handleSelectFilter,
    selectedFilters,
  } = usePresenter(isNoActiveSearch)

  const { offset, searchBarHeight, wrapRef } = useSearchBarPosition(selectedFilters)

  return (
    <Grid
      position="relative"
      height={'auto'}
      templateColumns="145px minmax(20px, 1fr) minmax(95px, auto)"
      gap="15px"
      borderRadius={isCategorySuggestionsOpen ? '0 0 5px 5px' : '5px'}
      backgroundColor="blueAlpha.100"
      p="5px 15px"
      zIndex={FOOTER_Z_INDEX}
      onClick={!isSearchModeActive ? handleSearchModeOpen : undefined}
      cursor={!isSearchModeActive ? 'pointer' : 'default'}
      ref={searchBarRef}
      color="pinkAlpha.100"
      bottom={offset}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        height="50px"
        maxHeight={'50px'}
        alignSelf={'flex-end'}
      >
        <Text textStyle="socialLarge.xl">{total ? total : searchResultAmount}</Text>
        <Text textStyle="socialLarge.xl">{t('resultsFor')}</Text>
      </Flex>

      <Wrap spacing="8px" ref={wrapRef}>
        <WrapItem>
          <CategoryFilter
            onClick={() => setIsCategorySuggestionsOpen(!isCategorySuggestionsOpen)}
            isOpen={isCategorySuggestionsOpen}
            selectedOption={category ? t(category) : ''}
          />
        </WrapItem>
        {selectedFilters.map(filter => (
          <WrapItem key={filter.id} maxWidth={'100%'}>
            <SearchFilterBox
              category={filter.field}
              subCategory={filter.value}
              actionButton={<CloseIconSmall />}
            />
          </WrapItem>
        ))}
        <WrapItem minWidth="70px" height={'50px'} flexGrow={1}>
          <FilterInput
            inputRef={filterInputRef}
            onFocus={handleSearchModeOpen}
            value={inputValue}
            onChange={handleInputChange}
          />
        </WrapItem>
      </Wrap>

      <Flex
        gap="12px"
        alignItems="center"
        justifyContent="flex-end"
        height={'50px'}
        alignSelf={'flex-end'}
      >
        {isSearchModeActive ? (
          <>
            <GoButton handleClick={handleGoClick} />
            <CloseButton handleClick={handleClearAll} />
          </>
        ) : isNoActiveSearch ? (
          <SearchButton />
        ) : (
          <CloseButton handleClick={handleClearAll} />
        )}
      </Flex>

      <SuggestionBar
        isOpen={isCategorySuggestionsOpen}
        label={isUserTyping ? t('suggestions') : ''}
        offset={searchBarHeight}
      >
        {isUserTyping ? (
          <Suggestions handleSelectFilter={handleSelectFilter} />
        ) : (
          <CategorySuggestions />
        )}
      </SuggestionBar>
    </Grid>
  )
}
