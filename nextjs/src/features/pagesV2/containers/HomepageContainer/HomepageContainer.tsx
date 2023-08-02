import { Box } from '@chakra-ui/react'
import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import dynamic from 'next/dynamic'

import { HomepageQuery } from 'src/generated/graphql'

import { EditorialLayer } from './fragments'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/MainGalaxy/MainGalaxy'),
  {
    ssr: false,
  }
)

export const HomepageContainer: React.FC<{ data?: HomepageQuery }> = ({ data }) => {
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DynamicMainGalaxyNoSsr />
      </GalaxyInterface>

      <EditorialLayer data={data} />
    </Box>
  )
}
