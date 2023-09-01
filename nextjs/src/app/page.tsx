import { initApiClient } from '@/features/shared/utils/api'
import { headers, cookies } from 'next/headers'
import useTranslation from 'next-translate/useTranslation'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'

export default async function Page() {
  const headersList = headers()
  const nextCookies = cookies()
  const hostHeader = headersList.get('host')
  const isMockedServer = nextCookies.get('isMockedServer')
  const { lang } = useTranslation()
  const api = initApiClient({ hostHeader, isMockedServer })
  const [homepage, themes] = await Promise.all([
    api?.homepage({ locale: lang }),
    // api?.zoomLevel1(),
    api?.themes({
      locale: lang,
      pagination: { page: parseInt('1' ?? '1'), pageSize: 1 },
    }),
  ])
  console.log(homepage, themes)
  return <HomepageContainer themes={themes} homepage={homepage} />
}
