import { DeepPartial } from '@/features/shared/types/helpers'
import { StoryEntityResponse, TriplyRecordEntityResponse } from 'src/generated/graphql'

export function getTriplyOrStoryHref({
  story,
  triply_record,
}: {
  story?: DeepPartial<StoryEntityResponse>
  triply_record?: DeepPartial<TriplyRecordEntityResponse>
}) {
  if (
    triply_record &&
    triply_record.data?.attributes?.recordId &&
    triply_record.data?.attributes?.type
  ) {
    return `detail/${triply_record.data.attributes.type?.toLowerCase()}/${
      triply_record.data.attributes.recordId
    }`
  }
  if (story && story.data?.id) {
    return `detail/stories/${story.data.id}`
  }
  return undefined
}
