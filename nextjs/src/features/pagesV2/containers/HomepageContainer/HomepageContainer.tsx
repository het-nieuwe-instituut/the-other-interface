import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { HomepageQuery } from 'src/generated/graphql'

import { EditorialLayer } from './fragments'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/MainGalaxy/MainGalaxy'),
  {
    ssr: false,
  }
)

export type Props = {
  homepage: HomepageQuery | undefined
}

export const HomepageContainer: React.FC<Props> = ({ homepage }) => {
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DynamicMainGalaxyNoSsr />
      </GalaxyInterface>

      <EditorialLayer data={homepage} />
    </Box>
  )
}
