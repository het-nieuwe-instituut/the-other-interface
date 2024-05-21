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
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

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
    removeFilter,
  } = usePresenter(isNoActiveSearch)

  const { offset, searchBarHeight, wrapRef } = useSearchBarPosition(selectedFilters)

  return (
    <Grid
      position="relative"
      height={'auto'}
      templateColumns="160px minmax(20px, 1fr) minmax(95px, auto)"
      gap="4"
      backgroundColor="blueAlpha.100"
      zIndex={FOOTER_Z_INDEX}
      onClick={!isSearchModeActive ? handleSearchModeOpen : undefined}
      cursor={!isSearchModeActive ? 'pointer' : 'default'}
      ref={searchBarRef}
      color="pinkAlpha.100"
      bottom={`${offset}px`}
      className="px-4"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        className={'self-end h-[60px] pt-1 justify-center'}
      >
        <p className={cn('text-pink.100', TypographyVariants({ social: 'textfield' }))}>
          {total ? total : searchResultAmount}
        </p>
        <p className={cn('text-pink.100', TypographyVariants({ social: 'textfield' }))}>
          {t('resultsFor')}
        </p>
      </Flex>

      <div ref={wrapRef} className="flex flex-wrap p-0 gap-0">
        <div className="pt-1 mr-2">
          <CategoryFilter
            onClick={() => setIsCategorySuggestionsOpen(!isCategorySuggestionsOpen)}
            isOpen={isCategorySuggestionsOpen}
            selectedOption={category ? t(category) : ''}
          />
        </div>
        {selectedFilters.map(filter => (
          <div key={filter.id} className="h-[60px] pt-1 mr-2 max-w-full">
            <SearchFilterBox
              category={filter.field}
              subCategory={filter.value}
              id={filter.id}
              actionButton={<CloseIconSmall />}
              actionButtonClick={removeFilter}
            />
          </div>
        ))}
        <div className={'h-[60px] py-1 pl-2 grow min-w-[70px]'}>
          <FilterInput
            inputRef={filterInputRef}
            onFocus={handleSearchModeOpen}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>

      <Flex gap="12px" alignItems="center" className={'self-end h-[60px] pt-1'}>
        {isSearchModeActive ? (
          <>
            <GoButton handleClick={handleGoClick} />
            <CloseButton handleClick={handleClearAll} />
          </>
        ) : isNoActiveSearch ? (
          <div className={'ml-14'}>
            <SearchButton />
          </div>
        ) : (
          <>
            <div className={'ml-14'}>
              <CloseButton handleClick={handleClearAll} />
            </div>
          </>
        )}
      </Flex>

      <SuggestionBar
        isOpen={isCategorySuggestionsOpen}
        label={t('searchCategory')}
        offset={searchBarHeight}
      >
        <CategorySuggestions />
      </SuggestionBar>

      <SuggestionBar
        isOpen={isUserTyping && !isCategorySuggestionsOpen}
        label={t('suggestions')}
        offset={searchBarHeight}
      >
        <Suggestions handleSelectFilter={handleSelectFilter} />
      </SuggestionBar>
    </Grid>
  )
}
