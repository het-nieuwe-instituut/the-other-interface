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
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { cn } from '@/features/ui/utils/cn'
import CloseIconSmall from '@/icons/close-icon-small.svg'
import { useRouter } from 'next/navigation'
import { CSSProperties, useCallback, useMemo, useRef, useState } from 'react'
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
import TotalResults from './fragments/TotalResults'
import { useSearchBarPosition } from './useSearchBarPosition'
import { searchCategoryToTriplyCategory } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/mappers/searchCategoryToTriplyMapper'

type Props = {
  total?: number
  isNoActiveSearch?: boolean
  className?: string
}

export const GalaxySearchBar: React.FC<Props> = ({ isNoActiveSearch, className }) => {
  const { t } = useTypeSafeTranslation('category')
  const filterInputRef = useRef<HTMLInputElement>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const [isUserTyping, setIsUserTyping] = useState(false)

  const { closeSearchMode, clearAllSearch, openSearch, focus } = useSearchBarActions({
    filterInputRef,
    isNoActiveSearch,
  })
  const { syncInput } = useSyncSearchInputToStore()
  const { lang } = useZoom2Params()
  const { encodedFilters } = useEncodedSearchFilters()
  const selectedFilters = useSelectedFilters()
  const { removeFilter, selectFilter } = useFilterActions({
    onSelectFilter: focus,
    onRemoveFilter: focus,
  })
  const { offset, searchBarHeight, wrapRef } = useSearchBarPosition(selectedFilters)
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen, searchValue } =
    useSelector((state: State) => state.shared)

  const handleGoClick = useCallback(() => {
    const searchParam = searchValue ? `&search=${searchValue}` : ''
    const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
    let url = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    setIsUserTyping(false)
    closeSearchMode(false)
  }, [searchValue, encodedFilters, searchCategory, lang, router, closeSearchMode])

  useEnterKey(handleGoClick)
  useOutsideClick(searchBarRef, () => {
    closeSearchMode(true)
  })
  useCloseSearchOnPathnameChange()

  const isUserInteracting = !!searchValue && isUserTyping && isSearchModeActive

  const isCollectionHighlightsSelected: boolean = selectedFilters.some(
    filter => filter.id === COLLECTION_HILIGHT_ID
  )

  const searchCategoryToTriplyEnum = useMemo(() => {
    if (searchCategory) {
      return searchCategoryToTriplyCategory(searchCategory)
    }
  }, [searchCategory])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      style={{ '--z-index': FOOTER_Z_INDEX, '--offset': `${offset}px` } as CSSProperties}
      className={cn(
        'grid pl-4 relative h-auto grid-cols-[160px,minmax(20px,1fr),minmax(95px,auto)] gap-4 bg-blue-100 z-[var(--z-index)] text-pink-100 bottom-[var(--offset)]',
        !isSearchModeActive ? 'cursor-pointer' : 'cursor-default',
        className
      )}
      onClick={!isSearchModeActive ? openSearch : undefined}
      ref={searchBarRef}
    >
      <div className=" flex h-[60px] flex-col items-start justify-center self-end pt-1">
        {isNoActiveSearch ? <TotalResults /> : <SearchResults />}
      </div>

      <div ref={wrapRef} className="flex flex-wrap gap-0 p-0 transition-all">
        <div className="mr-2 pt-1">
          <CategoryFilter
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
              actionButtonClick={removeFilter}
            />
          </div>
        ))}
        <div className={'h-[60px] min-w-[70px] grow py-1 pl-2'}>
          <FilterInput
            inputRef={filterInputRef}
            onFocus={openSearch}
            defaultValue={searchValue}
            value={searchValue}
            onChange={e => {
              setIsUserTyping(true)
              syncInput(e.target.value)
            }}
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>

      <div className="flex h-[60px] items-center gap-[12px] self-end pt-1">
        {isSearchModeActive ? (
          <>
            <GoButton handleClick={handleGoClick} />
            <CloseButton handleClick={clearAllSearch} />
          </>
        ) : isNoActiveSearch ? (
          <div className={'ml-14'}>
            <SearchButton />
          </div>
        ) : (
          <>
            <div className={'ml-14'}>
              <CloseButton handleClick={clearAllSearch} />
            </div>
          </>
        )}
      </div>

      <SuggestionBar
        isOpen={isCategorySuggestionsOpen}
        label={t('searchCategory')}
        offset={searchBarHeight}
      >
        <CategorySuggestions />
      </SuggestionBar>

      {!isCollectionHighlightsSelected && searchCategoryToTriplyEnum && (
        <SuggestionBar
          isOpen={isUserInteracting && !isCategorySuggestionsOpen}
          label={t('suggestions')}
          offset={searchBarHeight}
        >
          <SuggestionsContainer
            type={searchCategoryToTriplyEnum}
            handleSelectFilter={selectFilter}
          />
        </SuggestionBar>
      )}
    </div>
  )
}
