import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import initApiServerService from '@/features/shared/utils/initApiServerService'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import {
  DetailpageContainer,
  DetailpageEditorialLayer,
} from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'

function assertIsCategory(category: string): asserts category is Category {
  if (!CATEGORIES.includes(category as Category)) {
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
  const editorialData: DetailpageEditorialLayer = {
    title: null,
    description: null,
    components: null,
  }

  if (category === 'stories') {
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

  return <DetailpageContainer category={category} id={id} editorialData={editorialData} />
}
