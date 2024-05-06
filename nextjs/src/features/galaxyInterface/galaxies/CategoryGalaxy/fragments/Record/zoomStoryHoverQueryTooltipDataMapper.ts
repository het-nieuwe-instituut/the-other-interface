import { StoryHoverRecordRelationsQuery } from 'src/generated/graphql'

export const zoomStoryHoverQueryTooltipDataMapper = (
  initialData: StoryHoverRecordRelationsQuery
) => {
  return {
    title: `${initialData.storyHover.title}${
      initialData.storyHover.author ? ', ' + initialData.storyHover.author : ''
    }`,
    description: `${initialData.storyHover.description}`,
  }
}
