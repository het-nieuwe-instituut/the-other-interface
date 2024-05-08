import { StoryHoverRecordRelationsQuery } from 'src/generated/graphql'

export const zoomStoryHoverQueryTooltipDataMapper = (
  initialData: StoryHoverRecordRelationsQuery
) => {
  console.log(initialData)
  let firstName =
    initialData.storyWithoutRelations.data?.attributes?.author?.data?.attributes?.firstName
  let lastName =
    initialData.storyWithoutRelations.data?.attributes?.author?.data?.attributes?.lastName
  let author =
    firstName || lastName ? `${firstName ? firstName : ''} ${lastName ? lastName : ''}` : undefined
  return {
    title: `${initialData.storyWithoutRelations.data?.attributes?.title}${
      author ? ', ' + author : ''
    }`,
    description: `${initialData.storyWithoutRelations.data?.attributes?.shortDescription}`,
  }
}
