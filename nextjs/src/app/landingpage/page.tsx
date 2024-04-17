import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory, SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { Homepage, Landingpage } from 'src/generated/graphql'

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string; lang: string }
}) {
  const { category, lang } = searchParams
  const { isEnabled } = draftMode()
  const api = initApiServerService()
  const isStories = category === SEARCH_CATEGORIES.stories
  let editorialData: Homepage | Landingpage | undefined | null

  if (isStories) {
    const data = await api?.homepage({ locale: lang })
    editorialData = data?.homepage?.data?.attributes as Homepage
  } else {
    const data = await api?.landingpageBySlug({
      slug: category,
      locale: lang,
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    })
    editorialData = data?.landingpages?.data[0]?.attributes as Landingpage
  }

  return (
    <LandingpageContainer
      editorialData={editorialData}
      category={category as CloudCategory}
      description={isStories ? '' : editorialData.Title}
    />
  )
}
