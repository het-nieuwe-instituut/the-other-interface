import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'
import { CloudCategory } from '@/features/shared/utils/categories'
import { LandingpageBySlugQuery } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { Box } from '@chakra-ui/react'

interface Props {
  category: CloudCategory
  landingpage?: LandingpageBySlugQuery
}

export const LandingpageContainer: React.FC<Props> = ({ landingpage }) => {
  const editorialData = landingpage?.landingpages?.data[0]?.attributes

  console.log('editorialData', editorialData)

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <CategoryGalaxy />
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
