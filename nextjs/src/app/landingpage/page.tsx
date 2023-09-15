import useTranslation from 'next-translate/useTranslation'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

export default async function Page({ searchParams }: { searchParams: { category: string } }) {
  const { category } = searchParams
  const { isEnabled } = draftMode()
  const { lang } = useTranslation()
  const api = initApiServerService()
  const [landingpage, zoom2] = await Promise.all([
    await api.landingpageBySlug({
      slug: category,
      locale: lang,
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    }),
    await api?.Zoom2({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
      page: 1,
      pageSize: 12,
    }),
  ])
  return <LandingpageContainer landingpage={landingpage} category={category as CloudCategory} zoom2={zoom2}/>
}
