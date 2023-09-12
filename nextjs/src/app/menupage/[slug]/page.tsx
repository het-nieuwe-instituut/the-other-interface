import initApiServerService from '@/features/shared/utils/initApiServerService'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode()
  const { slug } = params
  const api = initApiServerService()
  const menupage = await api?.menupageBySlug({
    slug,
    publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
  })
  return <MenupageContainer menupage={menupage} />
}
