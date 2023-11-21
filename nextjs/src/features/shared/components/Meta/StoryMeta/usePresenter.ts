import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

export const usePresenter = () => {
  const commonT = useTypeSafeTranslation('common')
  const storiesT = useTypeSafeTranslation('stories')

  // console.log('story', story)
  return {
    commonT,
    storiesT,
  }
}
