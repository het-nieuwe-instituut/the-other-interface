import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

export default async function Page({
  searchParams,
}: {
  searchParams: { lang: string; page: string }
}) {
  const { isEnabled } = draftMode()
  const { lang, page } = searchParams
  const api = initApiServerService()
  const [homepage, themes] = await Promise.all([
    api?.homepage({ locale: lang }),
    api?.themes({
      locale: lang ?? 'nl',
      pagination: { page: parseInt(page ?? '1'), pageSize: 1 },
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    }),
  ])
  return <HomepageContainer themes={themes} homepage={homepage} />
}
