import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'
import { getRecordEditorialContent } from '@/features/pages/tasks/getRecordEditorialContent'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'

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

  const api = initApiServerService()

  const publicationState = isEnabled ? PublicationState.Preview : PublicationState.Live
  const payload =
    category === CATEGORIES.stories
      ? {
          id,
          locale: lang,
          publicationState,
        }
      : { id }

  // const relations = await getZoom3RelationsTask(category, id, lang, api)
  // console.log(relations)

  const [editorialData, detail] = await Promise.all([
    await getRecordEditorialContent({
      category,
      id,
      publicationState,
      lang,
    }),

    await getZoom3RecordTask(category, payload, api),
  ])

  // console.log(detail)

  // TODO create separate type for detail and mock result to it

  return <DetailpageContainer editorialData={editorialData} record={detail} />
}
