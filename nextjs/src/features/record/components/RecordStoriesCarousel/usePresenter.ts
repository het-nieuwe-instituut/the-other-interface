import { useStoriesRelationForRecord } from '@/features/shared/hooks/queries/useStoriesRelationForRecord'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import {
  CATEGORIES,
  CATEGORIES_TO_ENTITY_MAPPER,
  Category,
} from '@/features/shared/utils/categories'
import { storiesToCarouselDataMapper } from '../../../shared/mappers/storiesToCarouselDataMapper'
import useTranslation from 'next-translate/useTranslation'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { StoryEntity } from 'src/generated/graphql'

export const usePresenter = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const category = params?.category as Category
  const id = params?.id as string
  const type = CATEGORIES_TO_ENTITY_MAPPER[category]
  const lang = searchParams?.get('lang')

  const { data: recordRelatedStories, isLoading } = useStoriesRelationForRecord(type, id)
  const { t: tRecord } = useTranslation('record')

  const stories = storiesToCarouselDataMapper(
    recordRelatedStories?.zoomLevel3StoriesRelationsForRecord?.stories as StoryEntity[]
  )

  const handleRedirect = (id: string | null | undefined) => {
    let url = `/detail/${CATEGORIES.stories}/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  return {
    stories,
    isLoading,
    tRecord,
    handleRedirect,
  }
}
