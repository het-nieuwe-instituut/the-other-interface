import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

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
