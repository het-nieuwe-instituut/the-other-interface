import { initApiClient } from '@/features/shared/utils/api'
import { headers, cookies } from 'next/headers'
import useTranslation from 'next-translate/useTranslation'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { CloudCategory } from '@/features/shared/types/categories'

export default async function Page({
  searchParams,
}: {
  searchParams: { publicationState: string; category: string }
}) {
  const headersList = headers()
  const nextCookies = cookies()
  const hostHeader = headersList.get('host')
  const isMockedServerCookie = nextCookies.get('isMockedServer')
  const { category, publicationState } = searchParams
  const { lang } = useTranslation()
  const api = initApiClient({ hostHeader, isMockedServer: isMockedServerCookie?.value !== 'false' })
  const landingpage = await api.landingpageBySlug({
    slug: category,
    locale: lang,
    publicationState,
  })
  return <LandingpageContainer landingpage={landingpage} category={category as CloudCategory} />
}
