import { searchCategoryToTriplyCategory } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/mappers/searchCategoryToTriplyMapper'
import { GalaxyZoomAnimationStateContext } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { SearchFilterBox } from '@/features/shared/components/SearchFilterBox/SearchFilterBox'
import { State } from '@/features/shared/configs/store'
import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import {
  useEncodedSearchFilters,
  useFilterActions,
  useSelectedFilters,
} from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useEnterKey } from '@/features/shared/hooks/ui/useEnterKey'
import { useOutsideClick } from '@/features/shared/hooks/ui/useOutsideClick'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { useDelayedNextRoutePush } from '@/features/ui/components/DelayedNextLink/DelayedNextLink'
import { cn } from '@/features/ui/utils/cn'
import CloseIconSmall from '@/icons/close-icon-small.svg'
import React, { CSSProperties, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategorySuggestions } from '../CategorySuggestions/CategorySuggestions'
import { COLLECTION_HILIGHT_ID, SuggestionsContainer } from '../Suggestions/Suggestions'
import { CategoryFilter } from './CategoryFilter/CategoryFilter'
import {
  useCloseSearchOnPathnameChange,
  useSearchBarActions,
  useSyncSearchInputToStore,
} from './GalaxySearchBar.hooks'
import { SuggestionBar } from './SuggestionBar/SuggestionBar'
import { CloseButton, FilterInput } from './fragments'
import { GoButton } from './fragments/GoButton'
import { SearchButton } from './fragments/SearchButton'
import SearchResults from './fragments/SearchResults'
import { TotalResults } from './fragments/TotalResults'
import { useSearchBarPosition } from './useSearchBarPosition'

type Props = {
  total?: number
  className?: string
  isNoActiveSearch?: boolean
}

export const GalaxySearchBar: React.FC<Props> = ({ className, isNoActiveSearch }) => {
  isNoActiveSearch = true
  const filterInputRef = useRef<HTMLInputElement>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)
  const delayedPush = useDelayedNextRoutePush(600)
  const [isUserTyping, setIsUserTyping] = useState(false)
  const { closeSearchMode, clearAllSearch, openSearch, focus } = useSearchBarActions({
    filterInputRef,
    isNoActiveSearch,
  })
  const lang = useLocale()
  const { encodedFilters } = useEncodedSearchFilters()
  const selectedFilters = useSelectedFilters()
  const { offset, searchBarHeight, wrapRef } = useSearchBarPosition(selectedFilters)
  const { isSearchModeActive, searchCategory, searchValue } = useSelector(
    (state: State) => state.shared
  )
  const searchParam = searchValue ? `&search=${searchValue}` : ''
  const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
  let searchUrl = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
  searchUrl = addLocaleToUrl(searchUrl, lang)

  const { setAnimationState } = useContext(GalaxyZoomAnimationStateContext)

  const handleGoClick = useCallback(() => {
    setIsUserTyping(false)
    closeSearchMode(false)
  }, [closeSearchMode])

  useEnterKey(() => {
    setAnimationState('forward')
    delayedPush(searchUrl)

    handleGoClick()
  })
  useOutsideClick(searchBarRef, () => {
    closeSearchMode(true)
  })
  useCloseSearchOnPathnameChange()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      style={{ '--z-index': FOOTER_Z_INDEX, '--offset': `${offset}px` } as CSSProperties}
      className={cn(
        `grid pl-4 relative h-auto grid-cols-[160px,minmax(20px,1fr),minmax(95px,auto)] gap-4 bg-blue-100 z-[var(--z-index)] text-pink-100 bottom-[var(--offset)]
        max-[1280px]:gap-2 max-[1280px]:grid-cols-[100px,minmax(20px,1fr),minmax(95px,auto)]
        `,
        !isSearchModeActive ? 'cursor-pointer' : 'cursor-default',
        className
      )}
      onClick={!isSearchModeActive ? openSearch : undefined}
      ref={searchBarRef}
    >
      <div className=" flex h-[60px] flex-col items-start justify-center self-end pt-1">
        {isNoActiveSearch ? <TotalResults text={searchValue} /> : <SearchResults />}
      </div>

      <InputBar
        onTyping={() => setIsUserTyping(true)}
        openSearch={openSearch}
        onFocus={focus}
        ref={wrapRef}
        filterInputRef={filterInputRef}
      />

      <div className="flex h-[60px] items-center gap-[12px] self-end pt-1">
        {isSearchModeActive ? (
          <>
            <GoButton href={searchUrl} onClick={handleGoClick} />
            <CloseButton onClick={clearAllSearch} />
          </>
        ) : isNoActiveSearch ? (
          <div className={'ml-14'}>
            <SearchButton />
          </div>
        ) : (
          <>
            <div className={'ml-14'}>
              <CloseButton onClick={clearAllSearch} />
            </div>
          </>
        )}
      </div>

      <SearchSuggestionsBar
        onSelectFilter={() => {
          if (filterInputRef.current) {
            filterInputRef.current.value = ''
          }
        }}
        onFocus={focus}
        isUserTyping={isUserTyping}
        searchBarHeight={searchBarHeight}
      />
    </div>
  )
}

export const InputBar = React.forwardRef<
  HTMLDivElement,
  {
    onTyping: () => void
    openSearch: () => void
    onFocus: () => void
    filterInputRef: React.RefObject<HTMLInputElement>
  }
>(({ onTyping, openSearch, onFocus, filterInputRef }, ref) => {
  const { t } = useTypeSafeTranslation('category')
  const selectedFilters = useSelectedFilters()
  const { searchCategory, isCategorySuggestionsOpen, searchValue } = useSelector(
    (state: State) => state.shared
  )
  const dispatch = useDispatch()
  const { syncInput } = useSyncSearchInputToStore()
  const { removeFilter } = useFilterActions({
    onSelectFilter: onFocus,
    onRemoveFilter: onFocus,
  })

  return (
    <div ref={ref} className="flex flex-wrap gap-0 p-0 transition-all">
      <div className="mr-2 pt-1">
        <CategoryFilter
          ariaLabel="Open category suggestions"
          onClick={() =>
            dispatch(
              sharedActions.categorySuggestionsOpen({
                categorySuggestionsOpen: !isCategorySuggestionsOpen,
              })
            )
          }
          isOpen={isCategorySuggestionsOpen}
          selectedOption={searchCategory ? t(searchCategory) : ''}
        />
      </div>
      {selectedFilters.map(filter => (
        <div key={filter.id} className="mr-2 h-[60px] max-w-full pt-1">
          <SearchFilterBox
            category={filter.key}
            subCategory={filter.value}
            id={filter.id}
            actionButton={<CloseIconSmall />}
            actionButtonAriaLabel={`Remove filter ${filter.value}}`}
            actionButtonClick={removeFilter}
          />
        </div>
      ))}
      <div className={'h-[60px] min-w-[70px] grow py-1 pl-2'}>
        <FilterInput
          ref={filterInputRef}
          onFocus={openSearch}
          defaultValue={searchValue}
          onChange={e => {
            onTyping?.()
            syncInput(e.target.value)
          }}
          placeholder={t('searchPlaceholder')}
        />
      </div>
    </div>
  )
})
InputBar.displayName = 'InputBar'

export const SearchSuggestionsBar = ({
  isUserTyping,
  searchBarHeight,
  onFocus,
  onSelectFilter,
}: {
  isUserTyping: boolean
  searchBarHeight: number
  onFocus: () => void
  onSelectFilter: () => void
}) => {
  const { isCategorySuggestionsOpen, searchCategory, searchValue, isSearchModeActive } =
    useSelector((state: State) => state.shared)
  const { t } = useTypeSafeTranslation('category')
  const { selectFilter } = useFilterActions({
    onSelectFilter: onFocus,
    onRemoveFilter: onFocus,
  })
  const selectedFilters = useSelectedFilters()
  const isCollectionHighlightsSelected: boolean = selectedFilters.some(
    filter => filter.id === COLLECTION_HILIGHT_ID
  )

  const searchCategoryToTriplyEnum = useMemo(() => {
    if (searchCategory) {
      return searchCategoryToTriplyCategory(searchCategory)
    }
  }, [searchCategory])

  const isUserInteracting = !!searchValue && isUserTyping && isSearchModeActive

  return (
    <>
      <SuggestionBar
        isOpen={isCategorySuggestionsOpen}
        label={t('searchCategory')}
        offset={searchBarHeight}
      >
        <CategorySuggestions />
      </SuggestionBar>

      {!isCollectionHighlightsSelected && searchCategoryToTriplyEnum && (
        <SuggestionsContainer
          type={searchCategoryToTriplyEnum}
          handleSelectFilter={filters => {
            onSelectFilter()
            selectFilter(filters)
          }}
          isUserInteracting={isUserInteracting}
          isCategorySuggestionsOpen={isCategorySuggestionsOpen}
          searchBarHeight={searchBarHeight}
        />
      )}
    </>
  )
}
