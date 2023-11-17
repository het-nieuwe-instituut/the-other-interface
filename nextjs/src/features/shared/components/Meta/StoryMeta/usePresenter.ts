import { useStoryById } from '@/features/shared/hooks/queries/useStoryById'
import { useParams } from 'next/navigation'

export const usePresenter = (isDraftMode: boolean) => {
  const params = useParams()
  const id = params?.id as string

  const { data, isLoading } = useStoryById(id, isDraftMode)

  return {
    story: data?.storiesByLocale?.data?.[0],
    isLoading,
  }
}
