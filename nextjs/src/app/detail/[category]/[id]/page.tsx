import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'

function assertIsCategory(category: string): asserts category is Category {
  if (!CATEGORIES.includes(category as Category)) {
    notFound()
  }
}

// TODO: handle preview feature
export default async function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const { isEnabled } = draftMode()
  const { lang } = useTranslation()
  const api = initApiServerService()

  assertIsCategory(category)

  let data = null

  if (category === 'stories') {
    data = await api.storyById({
      id,
      locale: lang,
      publicationState: isEnabled ? PublicationState.Preview : PublicationState.Live,
    })
  } else {
  }

  return <DetailpageContainer category={category} id={id} data={data} />
}
