import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import { CloudCategory } from '@/features/shared/types/categories'

import { LandingpageBySlugQuery } from 'src/generated/graphql'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'),
  {
    ssr: false,
  }
)

interface Props {
  category: CloudCategory
  landingpage?: LandingpageBySlugQuery
}

export const LandingpageContainer: React.FC<Props> = ({ landingpage }) => {
  const editorialData = landingpage?.landingpages?.data[0]?.attributes

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DynamicMainGalaxyNoSsr />
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
