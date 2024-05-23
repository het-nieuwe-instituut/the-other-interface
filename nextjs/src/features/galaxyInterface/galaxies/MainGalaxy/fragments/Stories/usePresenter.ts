import { useMemo } from 'react'

import { ComponentModulesImage } from 'src/generated/graphql'
import { imageBasePath } from '@/features/modules/modulesConstants'
import { PositionedStory } from '../types'
import { storiesPositionsTemplates } from './positioningTemplates'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { StoriesData, StoryComponentsDynamicZone, StoryData } from '../../hooks/useThemes'

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
  const imageUrl = findImageUrl(story?.attributes?.components ?? [])
  return {
    title: story?.attributes?.title ?? '',
    image: findImageUrl(story?.attributes?.components ?? []),
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
    hasImage: !!imageUrl,
  }
}

export const usePresenter = (stories: StoriesData, nextStories: StoriesData) => {
  const { pageNumber } = usePageNumber()
  const { currentTemplate, nextTemplate, originalTemplateIndex } = usePositioningTemplates(
    storiesPositionsTemplates,
    pageNumber
  )

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
    isCurrentStoriesEmpty: stories?.length === 0,
    isNextStoriesEmpty: nextStories?.length === 0,
    originalTemplateIndex,
    pageNumber,
  }
}
