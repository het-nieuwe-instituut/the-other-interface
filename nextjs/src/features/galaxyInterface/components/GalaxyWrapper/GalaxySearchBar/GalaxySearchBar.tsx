import { Flex, Grid } from '@chakra-ui/react'
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
import { useSearchBarPosition } from './useSearchBarPosition'
import CloseIconSmall from '@/icons/close-icon-small.svg'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { useTotalCounterQuery } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useTotalCounterQuery'
import { Loader } from '@/features/shared/components/Loading/Loading'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

type Props = {
  total?: number
  isNoActiveSearch?: boolean
  className?: string
}

export const GalaxySearchBar: React.FC<Props> = ({ isNoActiveSearch, className }) => {
  const {
    category,
    isSearchModeActive,
    handleSearchModeOpen,
    isCategorySuggestionsOpen,
    setIsCategorySuggestionsOpen,
    handleGoClick,
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
    isSearchLoading,
    isSearchError,
  } = usePresenter(isNoActiveSearch)
  const { t } = useTypeSafeTranslation('category')

  const { offset, searchBarHeight, wrapRef } = useSearchBarPosition(selectedFilters)
  const {
    data: total,
    isLoading: isTotalLoading,
    fetchStatus,
    isError: isTotalError,
  } = useTotalCounterQuery(isNoActiveSearch)

  const renderPaginationContent = () => {
    if (isTotalError || isSearchError) {
      return <ErrorBox className={TypographyVariants({ social: 'sm' })} />
    }

    // see https://github.com/TanStack/query/issues/3584
    if ((isTotalLoading && fetchStatus !== 'idle') || isSearchLoading) {
      return (
        <div className="ml-2 flex h-full items-center justify-center">
          <Loader />
        </div>
      )
    }

    return (
      <>
        <p className={cn('text-pink.100', TypographyVariants({ social: 'textfield' }))}>
          {total ? total : searchResultAmount}
        </p>
        <p className={cn('text-pink.100', TypographyVariants({ social: 'textfield' }))}>
          {t('resultsFor')}
        </p>
      </>
    )
  }

  return (
    <Grid
      className={cn(className, 'px-4')}
      position="relative"
      height={'auto'}
      templateColumns={'160px minmax(20px, 1fr) minmax(95px, auto)'}
      gap="4"
      backgroundColor="blueAlpha.100"
      zIndex={FOOTER_Z_INDEX}
      onClick={!isSearchModeActive ? handleSearchModeOpen : undefined}
      cursor={!isSearchModeActive ? 'pointer' : 'default'}
      ref={searchBarRef}
      color="pinkAlpha.100"
      bottom={`${offset}px`}
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        className={'h-[60px] justify-center self-end pt-1'}
      >
        {renderPaginationContent()}
      </Flex>

      <div ref={wrapRef} className="flex flex-wrap gap-0 p-0 transition-all">
        <div className="mr-2 pt-1">
          <CategoryFilter
            onClick={() => setIsCategorySuggestionsOpen(!isCategorySuggestionsOpen)}
            isOpen={isCategorySuggestionsOpen}
            selectedOption={category ? t(category) : ''}
          />
        </div>
        {selectedFilters.map(filter => (
          <div key={filter.id} className="mr-2 h-[60px] max-w-full pt-1">
            <SearchFilterBox
              category={filter.field}
              subCategory={filter.value}
              id={filter.id}
              actionButton={<CloseIconSmall />}
              actionButtonClick={removeFilter}
            />
          </div>
        ))}
        <div className={'h-[60px] min-w-[70px] grow py-1 pl-2'}>
          <FilterInput
            inputRef={filterInputRef}
            onFocus={handleSearchModeOpen}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>

      <Flex gap="12px" alignItems="center" className={'h-[60px] self-end pt-1'}>
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
