import initApiServerService from '@/features/shared/utils/initApiServerService'
import { MenupageContainer } from '@/features/pages/containers/MenupageContainer/MenupageContainer'

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { publicationState: string }
}) {
  const { publicationState } = searchParams
  const { slug } = params
  const api = initApiServerService()
  const menupage = await api?.menupageBySlug({
    slug,
    publicationState: publicationState,
  })
  return <MenupageContainer menupage={menupage} />
}
