import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Homepage, Landingpage } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { Box } from '@chakra-ui/react'

interface Props {
  category: CloudCategory
  editorialData?: Homepage | Landingpage | undefined | null
  description?: string | null
}

export const LandingpageContainer: React.FC<Props> = ({ editorialData, description }) => {
  return (
    <Box>
      <GalaxyInterface>
        <CategoryGalaxy />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.Title}
          preface={description}
          components={editorialData.components}
        />
      )}
    </Box>
  )
}
