import { StoryImageInfo } from '@/features/shared/components/Record/RecordBottomContent/storiesRelatedToRecordDataMapper'
import { ComponentModulesImageCarousel } from 'src/generated/graphql'

export function mapUploadFileEntitiesToStoryImageInfo(
  items: ComponentModulesImageCarousel | undefined
): StoryImageInfo[] {
  return (
    items?.images?.data?.map(item => ({
      url: item.attributes?.url,
      height: item.attributes?.height,
      width: item.attributes?.width,
      title: '',
      description: item?.attributes?.caption || '',
    })) ?? []
  )
}
