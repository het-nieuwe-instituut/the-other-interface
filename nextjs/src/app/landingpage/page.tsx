import useTranslation from 'next-translate/useTranslation'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory } from '@/features/shared/types/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

export default async function Page({ searchParams }: { searchParams: { category: string } }) {
  const { category } = searchParams
  const { isEnabled } = draftMode()
  const { lang } = useTranslation()
  const api = initApiServerService()
  const landingpage = await api.landingpageBySlug({
    slug: category,
    locale: lang,
    publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
  })
  return <LandingpageContainer landingpage={landingpage} category={category as CloudCategory} />
}
