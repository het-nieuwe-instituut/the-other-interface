import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'
import { getRecordEditorialContent } from '@/features/pages/tasks/getRecordEditorialContent'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'

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

  const relations = [
    { type: 'Publications', total: null, randomRelations: ['300230524', '300165507'] },
    { type: 'People', total: null, randomRelations: ['18344', '22384'] },
    { type: 'Archives', total: null, randomRelations: ['110000631', '110000565'] },
    { type: 'Stories', total: null, randomRelations: ['1', '3'] },
    { type: 'Objects', total: null, randomRelations: ['4261', '3487'] },
  ]

  // console.log(JSON.stringify(relations, null, 2))

  const [editorialData, detail = null] = await Promise.all([
    await getRecordEditorialContent({
      category,
      id,
      publicationState,
      lang,
    }),

    await getZoom3RecordTask(category, payload, api),
    // await getZoom3RelationsTask(category, id, lang, api),
  ])

  // console.log({ editorialData })

  console.log({ detail })

  // console.log({ relationsIds }) d

  // TODO create separate type for detail and mock result to it

  return <DetailpageContainer editorialData={editorialData} record={detail} relations={relations} />
}
