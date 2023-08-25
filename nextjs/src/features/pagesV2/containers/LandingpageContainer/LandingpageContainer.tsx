import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'

import { LandingpageBySlugQuery, LandingpageComponentsDynamicZone } from 'src/generated/graphql'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/CategoryGalaxy/CategoryGalaxy'),
  {
    ssr: false,
  }
)

interface Props {
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
          components={editorialData.components as LandingpageComponentsDynamicZone[]}
        />
      )}
    </Box>
  )
}
