import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { ReduxSearchSync } from '@/features/shared/components/Redux/ReduxSearchSync'
import { SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Locale } from 'src/generated/graphql'
import { getMetaDataTranslations } from 'src/getMetaDataTranslations'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

interface PageProps {
  searchParams: { category: string; lang: Locale }
}

export default async function Page({ searchParams }: PageProps) {
  const { category, lang: locale } = searchParams
  const { isEnabled } = draftMode()
  const api = initApiServerService()

  if (category === SEARCH_CATEGORIES.stories || category === SEARCH_CATEGORIES.all) {
    const data = await api?.homepage({ locale })

    return (
      <>
        <ReduxSearchSync />
        <HomepageContainer isStoriesGalaxy={true} draftMode={isEnabled} homepage={data} />
      </>
    )
  }

  const data = await getLandingPageData(category, locale, api)

  return (
    <>
      <ReduxSearchSync />
      <LandingpageContainer editorialData={data} />
    </>
  )
}

async function getLandingPageData(
  category: string,
  locale: Locale,
  api: ReturnType<typeof initApiServerService>
) {
  switch (category) {
    case SEARCH_CATEGORIES.archives:
      return (await api.landingPageArchive({ locale }))?.landingPageArchive?.data
    case SEARCH_CATEGORIES.objects:
      return (await api.landingPageObject({ locale }))?.landingPageObject?.data
    case SEARCH_CATEGORIES.people:
      return (await api.landingPagePeople({ locale }))?.landingPagePeople?.data
    case SEARCH_CATEGORIES.publications:
      return (await api.landingPagePublication({ locale }))?.landingPagePublication?.data
    default:
      return null
  }
}
