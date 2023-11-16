import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'
import { getRecordEditorialContent } from '@/features/pages/tasks/getRecordEditorialContent'

function assertIsCategory(category: string): asserts category is Category {
  if (!Object.values(CATEGORIES).includes(category as Category)) {
    notFound()
  }
}

export default async function Page({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params

  assertIsCategory(category)

  const { isEnabled } = draftMode()
  const { lang } = useTranslation()

  const publicationState = isEnabled ? PublicationState.Preview : PublicationState.Live
  let editorialData

  if (category === CATEGORIES.stories) {
    editorialData = await getRecordEditorialContent({
      category,
      id,
      publicationState,
      lang,
    })
  } else {
    editorialData = null
  }

  // TODO create separate type for detail and mock result to it

  return <DetailpageContainer editorialData={editorialData} category={category} />
}
