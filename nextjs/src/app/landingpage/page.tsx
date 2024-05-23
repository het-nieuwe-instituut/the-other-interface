import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory, SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { HomepageQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Locale } from 'src/generated/graphql'

export type HomeOrLadingType =
  | HomepageQuery['homepage']['data']['attributes']
  | LandingpageBySlugQuery['landingpages']['data'][0]['attributes']
  | null

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string; lang: Locale }
}) {
  const { category, lang } = searchParams
  const { isEnabled } = draftMode()
  const api = initApiServerService()
  const isStories = category === SEARCH_CATEGORIES.stories
  let editorialData: HomeOrLadingType
  let description: string | null | undefined

  if (isStories) {
    const data = await api?.homepage({ locale: lang })

    editorialData = data.homepage.data.attributes
  } else {
    const data = await api?.landingpageBySlug({
      slug: category,
      locale: lang,
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    })
    editorialData = data?.landingpages?.data[0]?.attributes
    description = editorialData?.Description
  }

  return (
    <LandingpageContainer
      editorialData={editorialData}
      category={category as CloudCategory}
      description={description}
    />
  )
}
