import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { ReduxSearchSync } from '@/features/shared/components/Redux/ReduxSearchSync'
import { CloudCategory, SEARCH_CATEGORIES } from '@/features/shared/utils/categories'
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

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string; lang: Locale }
}) {
  const { category, lang } = searchParams
  const { isEnabled } = draftMode()
  const api = initApiServerService()
  const isStories = category === SEARCH_CATEGORIES.stories
  let homepage: Awaited<ReturnType<typeof api.homepage>> | undefined
  let archiveLandingPage: Awaited<ReturnType<typeof api.landingPageArchive>> | undefined
  let objectsLandingPage: Awaited<ReturnType<typeof api.landingPageObject>> | undefined
  let peopleLandingPage: Awaited<ReturnType<typeof api.landingPagePeople>> | undefined
  let publicationsLandingPage: Awaited<ReturnType<typeof api.landingPagePublication>> | undefined

  if (isStories) {
    const data = await api?.homepage({ locale: lang })
    homepage = data
  } else if (category === SEARCH_CATEGORIES.archives) {
    const archiveData = await api?.landingPageArchive({
      locale: lang,
    })
    archiveLandingPage = archiveData
  } else if (category === SEARCH_CATEGORIES.objects) {
    const objectData = await api?.landingPageObject({
      locale: lang,
    })
    objectsLandingPage = objectData
  } else if (category === SEARCH_CATEGORIES.people) {
    const peopleData = await api?.landingPagePeople({
      locale: lang,
    })
    peopleLandingPage = peopleData
  } else if (category === SEARCH_CATEGORIES.publications) {
    const publicationData = await api?.landingPagePublication({
      locale: lang,
    })
    publicationsLandingPage = publicationData
  }

  if (homepage) {
    return (
      <>
        <ReduxSearchSync />
        <HomepageContainer isStoriesGalaxy={true} draftMode={isEnabled} homepage={homepage} />
      </>
    )
  }
  if (category === SEARCH_CATEGORIES.archives) {
    return (
      <>
        <ReduxSearchSync />
        <LandingpageContainer
          editorialData={archiveLandingPage?.landingPageArchive.data}
          category={category as CloudCategory}
        />
      </>
    )
  }

  if (category === SEARCH_CATEGORIES.objects) {
    return (
      <>
        <ReduxSearchSync />
        <LandingpageContainer
          editorialData={objectsLandingPage?.landingPageObject.data}
          category={category as CloudCategory}
        />
      </>
    )
  }

  if (category === SEARCH_CATEGORIES.people) {
    return (
      <>
        <ReduxSearchSync />
        <LandingpageContainer
          editorialData={peopleLandingPage?.landingPagePeople.data}
          category={category as CloudCategory}
        />
      </>
    )
  }

  if (category === SEARCH_CATEGORIES.publications) {
    return (
      <>
        <ReduxSearchSync />
        <LandingpageContainer
          editorialData={publicationsLandingPage?.landingPagePublication.data}
          category={category as CloudCategory}
        />
      </>
    )
  }
}
