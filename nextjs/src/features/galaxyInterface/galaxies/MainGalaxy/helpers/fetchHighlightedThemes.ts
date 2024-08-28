'use server'

import { PublicationState } from '@/features/shared/types/enums'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { unstable_cache } from 'next/cache'
import { Locale } from 'src/generated/graphql'

export async function fetchHighlightedThemes(
  locale: Locale,
  page: number,
  publicationState: PublicationState
) {
  const api = initApiClientService()

  return unstable_cache(
    () =>
      api?.highlightedHomepageThemes({
        locale,
        pagination: { page, pageSize: 1 },
        storiesPagination: { page: 1, pageSize: 5 },
        publicationState,
      }),
    ['highlightedHomepageThemes', page.toString(), locale, publicationState],
    { revalidate: 3600, tags: ['highlightedHomepageThemes'] }
  )()
}
