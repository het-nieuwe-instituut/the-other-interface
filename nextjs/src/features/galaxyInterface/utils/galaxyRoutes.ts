import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useMemo } from 'react'
import { Locale } from 'src/generated/graphql'
import { CollectionHighlightsFilter } from '../components/GalaxyWrapper/Suggestions/Suggestions'

export const getUrlLandingPageUrl = (lang: Locale, category: CloudCategory) => {
  let url = `/landingpage?category=${category}&filters=${encodeFilters([
    CollectionHighlightsFilter,
  ])}&searchResult=true&fallback=true`

  url = addLocaleToUrl(url, lang)

  return url
}

export const useGetUrlLandingPageUrl = (category: CloudCategory) => {
  const locale = useLocale()
  return useMemo(() => getUrlLandingPageUrl(locale, category), [locale, category])
}
