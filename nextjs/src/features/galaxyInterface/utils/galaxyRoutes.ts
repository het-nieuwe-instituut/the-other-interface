import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { type CloudCategory } from '@/features/shared/utils/categories'
import { useMemo } from 'react'
import { Locale } from 'src/generated/graphql'
import { CollectionHighlightsFilter } from '../components/GalaxyWrapper/Suggestions/suggestions.constants'

export const getUrlLandingPageUrl = (lang: Locale, category: CloudCategory | 'stories') => {
  const url = new URL(process.env.NEXT_PUBLIC_URL + `/landingpage`)

  url.searchParams.set('category', category)
  if (category !== 'stories') {
    url.searchParams.set('filters', encodeFilters([CollectionHighlightsFilter]))
    url.searchParams.set('fallback', 'true')
  }
  url.searchParams.set('searchResult', 'true')

  const urlWithLocale = addLocaleToUrl(url.toString(), lang)

  return urlWithLocale
}

export const useGetUrlLandingPageUrl = (category: CloudCategory) => {
  const locale = useLocale()
  return useMemo(() => getUrlLandingPageUrl(locale, category), [locale, category])
}
