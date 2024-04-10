import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams: { lang: string; page: string }
}) {
  const { isEnabled } = draftMode()
  const { lang } = searchParams
  const api = initApiServerService()
  const homepage = await api?.homepage({ locale: lang })

  return <HomepageContainer homepage={homepage} draftMode={isEnabled} />
}
