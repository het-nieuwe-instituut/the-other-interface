import { useThemes } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useThemes'

export const usePresenter = (isDraftMode: boolean) => {
  const { data } = useThemes(isDraftMode)

  const [themes, nextThemes] = data ?? []

  const storyTitle = themes?.themes.data?.[0]?.attributes?.name
  const stories = themes?.themes.data?.[0]?.attributes?.stories?.data || []
  const nextStories = nextThemes?.themes.data?.[0]?.attributes?.stories?.data || []
  const pagination = themes?.themes.meta?.pagination

  return { storyTitle, stories, nextStories, pagination }
}
