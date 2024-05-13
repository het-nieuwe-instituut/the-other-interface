import { joinNullableStrings } from '@/features/shared/utils/text'
import { StoryHoverRecordRelationsQuery } from 'src/generated/graphql'

export const zoomStoryHoverQueryTooltipDataMapper = (
  initialData: StoryHoverRecordRelationsQuery
) => {
  const { title, shortDescription, author } =
    initialData.storyWithoutRelations.data?.attributes || {}
  const { firstName, lastName } = author?.data?.attributes || {}

  const authorName = joinNullableStrings(' ', firstName, lastName)
  const titleWithAuthor = joinNullableStrings(', ', title, authorName)

  return {
    title: titleWithAuthor,
    description: shortDescription || '',
  }
}
