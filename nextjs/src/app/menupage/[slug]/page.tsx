import initApiServerService from '@/features/shared/utils/initApiServerService'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { getLocaleFromParams } from '@/features/shared/helpers/getLocaleFromParams'

export default async function Page({
  params,
}: {
  params: Record<string, string | string[] | undefined>
}) {
  const { isEnabled } = draftMode()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const api = initApiServerService()
  const locale = getLocaleFromParams(params)

  const menupage = await api?.menupageBySlug({
    slug,
    publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    locale,
  })
  return <MenupageContainer menupage={menupage} />
}
