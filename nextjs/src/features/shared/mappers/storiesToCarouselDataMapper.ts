import {
  ComponentModulesImage,
  Maybe,
  StoriesRelationForRecordQuery,
  StoriesWithinThemeQuery,
  StoryComponentsDynamicZone,
  StoryMetaByIdQuery,
} from 'src/generated/graphql'
import { joinNullableStrings } from '../utils/text'

export type StoryImageInfo = {
  url: string | undefined
  height?: Maybe<number> | undefined
  width?: Maybe<number> | undefined
  title?: string
  description: string | null
  id?: Maybe<string> | undefined
}

type StoryMeta = NonNullable<StoryMetaByIdQuery['storyByLocale']['data']>
type MinimalStoryMeta = NonNullable<StoriesWithinThemeQuery['stories']['data']>

export const storiesToCarouselDataMapper = (
  relatedStories:
    | NonNullable<StoriesRelationForRecordQuery['zoomLevel3StoriesRelationsForRecord']>['stories']
    | NonNullable<NonNullable<StoryMeta>['child_stories']>
    | NonNullable<NonNullable<StoryMeta>['siblings']>
    | NonNullable<NonNullable<NonNullable<NonNullable<StoryMeta>['parent_story']>>['data']>[]
    | MinimalStoryMeta
): StoryImageInfo[] | undefined => {
  const images: StoryImageInfo[] = []

  relatedStories?.forEach(story => {
    const authorName = story?.authors?.data
      .map(author => {
        return joinNullableStrings(
          ' ',
          author?.attributes?.firstName,
          author.attributes?.insertion,
          author?.attributes?.lastName
        )
      })
      .join(', ')

    if (story?.thumbnail) {
      return images.push({
        url: story?.thumbnail?.imageThumbnail?.data?.attributes?.url,
        id: story?.id,
        height: story?.thumbnail?.imageThumbnail?.data?.attributes?.height,
        width: story?.thumbnail?.imageThumbnail?.data?.attributes?.width,
        title: story?.attributes?.title,
        description: authorName ?? null,
      })
    }

    if (!story?.components) {
      return
    }

    const imageModule: ComponentModulesImage = (
      story.components as StoryComponentsDynamicZone[]
    ).find(c => c.__typename === 'ComponentModulesImage') as ComponentModulesImage

    const { url, height, width } = imageModule?.image.data?.attributes || {}
    if (!url) {
      return
    }

    return images.push({
      url,
      id: story?.id,
      height,
      width,
      title: story?.attributes?.title,
      description: authorName ?? null,
    })
  })

  return images
}
