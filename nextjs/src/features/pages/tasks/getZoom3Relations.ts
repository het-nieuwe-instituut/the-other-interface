import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { getZoom3Queries } from './zoom3Config'
import { Sdk } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'

type Payload =
  | {
      id: string
    }
  | { lang?: string; publicationState: PublicationState; id: string }

export type Zoom3Record = {
  title: string
  image: string
  locale: string
  id: string
} | null

export async function getZoom3RelationsTask(type: Category, id: string, locale: string, api: Sdk) {
  try {
    const configByType = getZoom3Queries(type, api)

    if (type === CATEGORIES.stories) {
      console.log('i am here')
      const item = await api?.StoriesRelations({ id, lang: locale })
      console.log(item)
    }
    // return item
    // } else {
    //   const data = await configByType?.relationsQuery?.({ id, lang: locale })
    //   console.log(data)
    // }

    // console.log({ relations })
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
