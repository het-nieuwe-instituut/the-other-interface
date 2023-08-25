import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'

import { LandingpageBySlugQuery } from 'src/generated/graphql'
import { EditorialLayer } from './fragments'

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
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DynamicMainGalaxyNoSsr />
      </GalaxyInterface>

      <EditorialLayer landingpage={landingpage} />
    </Box>
  )
}
