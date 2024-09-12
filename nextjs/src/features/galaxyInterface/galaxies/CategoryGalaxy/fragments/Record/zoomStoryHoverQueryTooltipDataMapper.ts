import { joinNullableStrings } from '@/features/shared/utils/text'
import { StoryHoverRecordRelationsQuery } from 'src/generated/graphql'

export const zoomStoryHoverQueryTooltipDataMapper = (
  initialData: StoryHoverRecordRelationsQuery
) => {
  const { title, shortDescription } = initialData.story.data?.attributes || {}
  const { author } = initialData.story.data || {}
  const { firstName, lastName, insertion } = author?.data?.attributes || {}

  const authorName = joinNullableStrings(' ', firstName, insertion, lastName)
  const titleWithAuthor = joinNullableStrings(' ', title, `(${authorName})`)

  return {
    title: titleWithAuthor,
    description: shortDescription || '',
  }
}
