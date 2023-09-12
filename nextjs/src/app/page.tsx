import useTranslation from 'next-translate/useTranslation'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

export default async function Page() {
  const { isEnabled } = draftMode()
  const { lang } = useTranslation()
  const api = initApiServerService()
  const [homepage, themes] = await Promise.all([
    api?.homepage({ locale: lang }),
    api?.themes({
      locale: lang,
      pagination: { page: parseInt('1' ?? '1'), pageSize: 1 },
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    }),
  ])
  return <HomepageContainer themes={themes} homepage={homepage} />
}
