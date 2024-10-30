import { joinNullableStrings } from '@/features/shared/utils/text'
import { StoryHoverRecordRelationsQuery } from 'src/generated/graphql'

export const zoomStoryHoverQueryTooltipDataMapper = (
  initialData: StoryHoverRecordRelationsQuery
) => {
  const { title, shortDescription } = initialData.story.data?.attributes || {}
  const { authors } = initialData.story.data || {}

  const authorsList = authors?.data
    .map(author => {
      const { firstName, lastName, insertion } = author?.attributes || {}
      return joinNullableStrings(' ', firstName, insertion, lastName)
    })
    .join(', ')

  const titleWithAuthor = joinNullableStrings(' ', title, authorsList ? `(${authorsList})` : '')

  return {
    title: titleWithAuthor,
    description: shortDescription || '',
  }
}
