import initApiServerService from '@/features/shared/utils/initApiServerService'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { useLocale } from '@/features/shared/hooks/useLocale'

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode()
  const { slug } = params
  const api = initApiServerService()
  const locale = useLocale()

  const menupage = await api?.menupageBySlug({
    slug,
    publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    locale,
  })
  return <MenupageContainer menupage={menupage} />
}
