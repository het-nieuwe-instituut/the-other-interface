import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { CloudCategory } from '@/features/shared/utils/categories'
import { LandingpageBySlugQuery, Zoom2Query } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { Box } from '@chakra-ui/react'

interface Props {
  category: CloudCategory
  landingpage?: LandingpageBySlugQuery
  zoom2: Zoom2Query
}

export const LandingpageContainer: React.FC<Props> = ({ landingpage, zoom2 }) => {
  const editorialData = landingpage?.landingpages?.data[0]?.attributes
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <CategoryGalaxy zoom2={zoom2} />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.Title}
          preface={editorialData.Description}
          components={editorialData.components}
        />
      )}
    </Box>
  )
}
