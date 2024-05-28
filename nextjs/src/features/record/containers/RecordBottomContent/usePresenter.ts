import { useStoriesRelationForRecord } from '@/features/shared/hooks/queries/useStoriesRelationForRecord'
import { useParams } from 'next/navigation'
import { CATEGORIES_TO_ENTITY_MAPPER, Category } from '@/features/shared/utils/categories'
import { mapRecordRelatedStories } from './storiesRelatedToRecordDataMapper'

export const usePresenter = () => {
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string
  const type = CATEGORIES_TO_ENTITY_MAPPER[category]

  const { data: recordRelatedStories, isLoading } = useStoriesRelationForRecord(type, id)

  const stories = mapRecordRelatedStories(recordRelatedStories)

  return {
    stories,
    isLoading,
  }
}
