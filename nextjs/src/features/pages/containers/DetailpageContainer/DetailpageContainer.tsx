import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy/DetailGalaxy'
import { GalaxyZoomAnimationStateProvider } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { RecordLayer } from '@/features/record/containers/RecordLayer/RecordLayer'
import { StoryLayer } from '@/features/shared/components/Layers/StoryLayer/StoryLayer'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { isCloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { StoryByIdQuery } from 'src/generated/graphql'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components: NonNullable<NonNullable<StoryByIdQuery['storyByLocale']['data']>>['components'] | null
}
interface Props {
  category: string
}

export const DetailpageContainer: React.FC<Props> = ({ category }) => {
  const Layer = () => {
    if (isCloudCategory(category)) return <RecordLayer />
    if (isStoryCategory(category)) return <StoryLayer />
    return null
  }

  return (
    <div>
      <GalaxyZoomAnimationStateProvider>
        <GalaxyInterface>
          <MobileOverlayProvider>
            <DetailGalaxy />
          </MobileOverlayProvider>
        </GalaxyInterface>
      </GalaxyZoomAnimationStateProvider>

      <Layer />
    </div>
  )
}
