import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'

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
  searchParams: { category: string; lang: string }
}) {
  const { category, lang } = searchParams
  const { isEnabled } = draftMode()
  const api = initApiServerService()
  const landingpage = await api.landingpageBySlug({
    slug: category,
    locale: lang ?? 'nl',
    publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
  })
  return <LandingpageContainer landingpage={landingpage} category={category as CloudCategory} />
}
