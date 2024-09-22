import { useMemo } from 'react'

import { imageBasePath } from '@/features/modules/modulesConstants'
import { useHomepageTemplatesContext } from '@/features/shared/hooks/usePositioningTemplates'
import { ComponentModulesImage } from 'src/generated/graphql'
import { StoriesData, StoryComponentsDynamicZone, StoryData } from '../../hooks/useThemesQuery'
import { PositionedStory } from '../types'

const findImageUrl = (components: StoryComponentsDynamicZone): string => {
  const imageComponent = components?.find(
    component => component.__typename === 'ComponentModulesImage'
  ) as ComponentModulesImage

  const url = imageComponent?.image.data?.attributes?.url ?? ''

  return imageBasePath(url) ?? ''
}

const mapStory = (story: StoryData) => {
  const storyId = story?.id
  const storyLocale = story?.attributes?.locale
  const imageUrl = findImageUrl(story?.components ?? [])
  return {
    title: story?.attributes?.title ?? '',
    image:
      story.thumbnail?.imageThumbnail?.data?.attributes?.url ??
      findImageUrl(story?.components ?? []),
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
    hasImage: !!story.thumbnail?.imageThumbnail?.data?.attributes?.url || !!imageUrl,
    alt: story?.thumbnail?.alt_text ? story?.thumbnail?.alt_text : story?.attributes?.title ?? '',
  }
}

export const usePresenter = (stories: StoriesData, nextStories: StoriesData) => {
  const { currentTemplate, nextTemplate, originalTemplateIndex, pageNumber } =
    useHomepageTemplatesContext()
  const positionedStories = useMemo(() => {
    if (!stories) return []

    const positionedStories: PositionedStory[] = []

    currentTemplate.forEach((template, index) => {
      const record = stories[index]

      if (record) {
        const mappedStory = mapStory(stories?.[index])

        positionedStories.push({
          ...mappedStory,
          position: template.position,
          grid: template.grid,
        })
      }
    })

    return positionedStories
  }, [stories, currentTemplate])

  const positionedNextStories = useMemo(() => {
    if (!nextStories) return []

    const positionedNextStories: PositionedStory[] = []

    nextTemplate.forEach((template, index) => {
      const record = nextStories[index]

      if (record) {
        const mappedStory = mapStory(nextStories?.[index])

        positionedNextStories.push({
          ...mappedStory,
          position: template.position,
          grid: template.grid,
        })
      }
    })

    return positionedNextStories
  }, [nextStories, nextTemplate])

  return {
    positionedStories,
    positionedNextStories,
    originalTemplateIndex,
    pageNumber,
  }
}
