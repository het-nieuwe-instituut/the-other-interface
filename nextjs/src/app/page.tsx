import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { getLocaleFromParams } from '@/features/shared/helpers/getLocaleFromParams'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const { isEnabled } = draftMode()
  const locale = getLocaleFromParams(searchParams)
  const api = initApiServerService()
  const homepage = await api?.homepage({ locale })

  return <HomepageContainer homepage={homepage} draftMode={isEnabled} />
}
