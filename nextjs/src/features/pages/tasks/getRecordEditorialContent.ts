import initApiServerService from '@/features/shared/utils/initApiServerService'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageEditorialLayer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'

export async function getRecordEditorialContent({
  category,
  id,
  publicationState,
  lang,
}: {
  category: Category
  id: string
  publicationState: PublicationState
  lang: string
}) {
  const api = initApiServerService()

  const editorialData: DetailpageEditorialLayer = {
    title: null,
    description: null,
    components: null,
  }

  if (category === CATEGORIES.stories) {
    const result = await api.storyById({
      id,
      locale: lang,
      publicationState,
    })

    const attributes = result?.stories?.data?.[0]?.attributes

    editorialData.title = attributes?.title
    editorialData.description = attributes?.description
    editorialData.components = attributes?.components
  } else {
    const result = await api.landingpageBySlug({
      slug: category,
      locale: lang,
      publicationState,
    })

    const attributes = result?.landingpages?.data[0]?.attributes

    editorialData.title = attributes?.Title
    editorialData.description = attributes?.Description
    editorialData.components = attributes?.components
  }

  return editorialData
}
