import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { usePresenter } from './usePresenter'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { FilterInput, CloseButton } from './fragments'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions'
import { GoButton } from './fragments/GoButton'
import { SearchButton } from './fragments/SearchButton'
import { ClearButton } from './fragments/ClearButton'
import { Suggestions } from '../Suggestions/Suggestions'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'

type Props = {
  total?: number
  isNoActiveSearch?: boolean
}

export const GalaxySearchBar: React.FC<Props> = ({ total, isNoActiveSearch }) => {
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
    filterInputRef,
    handleClearAll,
    isUserTyping,
    handleSelectFilter,
    selectedFilters,
  } = usePresenter(isNoActiveSearch)

  const [offset, setOffset] = useState(0)
  const [searchBarHeight, setSearchBarHeight] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapRef.current) {
      const defaultOffset = 51
      const height = wrapRef.current.scrollHeight
      const newOffset = height - defaultOffset
      setSearchBarHeight(height)
      if (newOffset > 0) {
        setOffset(newOffset)
      }
      console.log(offset)
    }
  }, [selectedFilters])

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
          <WrapItem key={filter.id}>
            <SearchFilterBox category={filter.field} subCategory={filter.value} />
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
            <ClearButton handleClick={handleClearAll} />
            <GoButton handleClick={handleGoClick} />
            <CloseButton handleClick={handleSearchModeClose} />
          </>
        ) : isNoActiveSearch ? (
          <SearchButton />
        ) : (
          <CloseButton handleClick={handleSearchModeClose} />
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
