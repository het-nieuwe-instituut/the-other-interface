import {
  ComponentModulesImage,
  Maybe,
  StoriesRelationForRecordQuery,
  StoryEntity,
  StoryMetaByIdQuery,
} from 'src/generated/graphql'

export type StoryImageInfo = {
  url: string | undefined
  height?: Maybe<number> | undefined
  width?: Maybe<number> | undefined
  title: string
  description: string
  id?: Maybe<string> | undefined
}

export const storiesToCarouselDataMapper = (
  relatedStories:
    | NonNullable<StoriesRelationForRecordQuery['zoomLevel3StoriesRelationsForRecord']>['stories']
    | NonNullable<
        NonNullable<
          NonNullable<StoryMetaByIdQuery['storyMetaByLocale']['data']>['attributes']
        >['child_stories']
      >['data']
    | NonNullable<
        NonNullable<
          NonNullable<StoryMetaByIdQuery['storyMetaByLocale']['data']>['attributes']
        >['siblings']
      >
    | NonNullable<
        NonNullable<
          NonNullable<
            NonNullable<
              NonNullable<StoryMetaByIdQuery['storyMetaByLocale']['data']>['attributes']
            >['parent_story']
          >
        >['data']
      >[]
): StoryImageInfo[] | undefined => {
  const mappedStories = relatedStories
    ?.flatMap(story => {
      const firstName = story?.attributes?.author?.data?.attributes?.firstName ?? ''
      const lastName = story?.attributes?.author?.data?.attributes?.lastName ?? ''
      const authorName = [firstName, lastName].filter(name => name).join(' ')

      const images = story?.attributes?.components
        ?.filter(
          (component): component is ComponentModulesImage =>
            component.__typename === 'ComponentModulesImage' && !!component.image
        )
        .map(component => ({
          url: component.image.data?.attributes?.url,
          height: component.image.data?.attributes?.height,
          width: component.image.data?.attributes?.width,
        }))

      if (!images || images.length === 0) {
        return []
      }

      const image = images[0]

      if (image.url === undefined) {
        return []
      }

      return [
        {
          url: image.url,
          id: story?.id,
          height: image.height,
          width: image.width,
          title: story?.attributes?.title || '',
          description: authorName,
        },
      ]
    })
    .filter(Boolean)

  return mappedStories && mappedStories.length > 0 ? mappedStories : undefined
}
