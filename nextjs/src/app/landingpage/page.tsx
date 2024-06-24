import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { ReduxSearchSync } from '@/features/shared/components/Redux/ReduxSearchSync'
import { PublicationState } from '@/features/shared/types/enums'
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
  let landingPage: Awaited<ReturnType<typeof api.landingpageBySlug>> | undefined

  if (isStories) {
    const data = await api?.homepage({ locale: lang })

    homepage = data
  } else {
    const data = await api?.landingpageBySlug({
      slug: category,
      locale: lang,
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    })

    landingPage = data
  }

  if (homepage) {
    return (
      <>
        <ReduxSearchSync />
        <HomepageContainer draftMode={isEnabled} homepage={homepage} />
      </>
    )
  }

  return (
    <>
      <ReduxSearchSync />
      <LandingpageContainer
        editorialData={landingPage?.landingpages.data[0]?.attributes}
        category={category as CloudCategory}
      />
    </>
  )
}
