'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Box } from '@/features/shared/configs/chakra'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components:
    | NonNullable<
        NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
      >['components']
    | NonNullable<NonNullable<StoryByIdQuery['stories']['data']>[0]['attributes']>['components']
    | null
}
interface Props {
  editorialData: DetailpageEditorialLayer
}

export const DetailpageContainer: React.FC<Props> = ({ editorialData }) => {
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.title}
          preface={editorialData.description}
          components={editorialData.components}
        />
      )}
    </Box>
  )
}
