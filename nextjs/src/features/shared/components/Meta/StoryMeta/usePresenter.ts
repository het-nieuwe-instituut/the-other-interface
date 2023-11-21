import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useParams } from 'next/navigation'
import { useStoryMetaById } from '@/features/shared/hooks/queries/useStoryMetaById'

export const usePresenter = () => {
  const commonT = useTypeSafeTranslation('common')
  const storiesT = useTypeSafeTranslation('stories')

  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryMetaById(id)

  return {
    commonT,
    storiesT,
    isLoading,
    story: data?.storyMetaByLocale?.data?.attributes,
  }
}
