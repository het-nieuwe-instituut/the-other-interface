import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy/DetailGalaxy'
import { RecordLayer } from '@/features/record/containers/RecordLayer/RecordLayer'
import { StoryLayer } from '@/features/shared/components/Layers/StoryLayer/StoryLayer'
import { isCloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { LandingpageBySlugQuery, StoryByIdQuery } from 'src/generated/graphql'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components:
    | NonNullable<
        NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
      >['components']
    | NonNullable<NonNullable<StoryByIdQuery['storyByLocale']['data']>['attributes']>['components']
    | null
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
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      <Layer />
    </div>
  )
}
