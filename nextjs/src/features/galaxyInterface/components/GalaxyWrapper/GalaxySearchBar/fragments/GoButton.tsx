import { GalaxyZoomAnimationStateContext } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { State } from '@/features/shared/configs/store'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useEncodedSearchFilters } from '@/features/shared/hooks/search/useFilters'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useDelayedNextRoutePush } from '@/features/ui/components/DelayedNextLink/DelayedNextLink'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useGetRawPath } from '@/features/ui/utils/route'
import { useContext, useMemo } from 'react'
import { useSelector } from 'react-redux'
type Props = {
  hide?: boolean
  onGoClick?: () => void
}

export const GoButton: React.FC<Props> = ({ hide = false, onGoClick }) => {
  const { t } = useTypeSafeTranslation('common')
  const rawPath = useGetRawPath()
  const lang = useLocale()
  const { encodedFilters } = useEncodedSearchFilters()
  const { searchCategory, searchValue } = useSelector((state: State) => state.shared)

  const { setAnimationState } = useContext(GalaxyZoomAnimationStateContext)
  const delayedPush = useDelayedNextRoutePush(600)
  const searchParam = searchValue ? `&search=${searchValue}` : ''
  const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
  let searchUrl = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
  searchUrl = addLocaleToUrl(searchUrl, lang)

  const searchUrlChanged = useMemo(() => {
    return searchUrl !== rawPath
  }, [rawPath, searchUrl])

  return (
    <button
      form="search-form"
      type="submit"
      value={'Submit'}
      disabled={!searchUrlChanged}
      onClick={e => {
        e.preventDefault()
        setAnimationState('forward')
        delayedPush(searchUrl)

        onGoClick?.()
      }}
      className={cn(
        'inline-block rounded-[3px] px-[7px] py-[6px] text-pink-100 transition-colors duration-200 ',
        searchUrlChanged && 'hover:bg-pink-100 hover:text-blue-100',
        'disabled:cursor-not-allowed disabled:opacity-60 rounded-none',
        hide ? 'hidden' : 'visible'
      )}
    >
      <span className={cn('text-pink.100', TypographyVariants({ socialLarge: 'md' }))}>
        {t('go')}
      </span>
    </button>
  )
}
