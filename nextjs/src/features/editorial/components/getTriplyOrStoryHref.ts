import { DeepPartial } from '@/features/shared/types/helpers'
import {
  EnumTriplyrecordType,
  StoryEntityResponse,
  TriplyRecordEntityResponse,
} from 'src/generated/graphql'

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
    return getHrefByEnumTriplyrecordType(
      triply_record.data?.attributes.type,
      triply_record.data.attributes.recordId
    )
  }
  if (story && story.data?.id) {
    return `detail/stories/${story.data.id}`
  }
  return undefined
}

function getHrefByEnumTriplyrecordType(type: EnumTriplyrecordType, recordId: string) {
  if (type === EnumTriplyrecordType.Archive) {
    return `/detail/archives/${recordId}`
  }
  if (type === EnumTriplyrecordType.People) {
    return `/detail/people/${recordId}`
  }
  if (type === EnumTriplyrecordType.Object) {
    return `/detail/objects/${recordId}`
  }
  if (type === EnumTriplyrecordType.Publication) {
    return `/detail/publications/${recordId}`
  }
  if (type === EnumTriplyrecordType.Media) {
    return `/detail/media/${recordId}`
  }
}
