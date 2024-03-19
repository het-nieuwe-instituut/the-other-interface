import { ComponentModulesImage, Maybe, StoriesRelationForRecordQuery } from 'src/generated/graphql'

export type StoryImageInfo = {
  url: string | undefined
  height?: Maybe<number> | undefined
  width?: Maybe<number> | undefined
  title: string
  description: string
}

export const mapRecordRelatedStories = (
  relatedStories: StoriesRelationForRecordQuery | undefined
): StoryImageInfo[] | undefined => {
  return relatedStories?.zoomLevel3StoriesRelationsForRecord?.stories?.map(story => {
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

    const image = images?.[0]

    return {
      url: image?.url,
      height: image?.height,
      width: image?.width,
      title: story?.attributes?.title || '',
      description: authorName,
    }
  })
}
