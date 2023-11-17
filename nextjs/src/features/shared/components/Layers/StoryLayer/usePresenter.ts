import { extractStoryData } from '@/features/shared/helpers/extractStoryData'
import { useStoryById } from '@/features/shared/hooks/queries/useStoryById'
import { useParams } from 'next/navigation'
import { StoryEntity } from 'src/generated/graphql'

export const usePresenter = () => {
  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryById(id)

  const story = data?.storiesByLocale?.data?.[0]
  const record = extractStoryData(story as StoryEntity)

  return {
    story: record,
    isLoading,
  }
}
