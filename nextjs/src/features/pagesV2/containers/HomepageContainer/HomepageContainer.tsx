import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { HomepageQuery, HomepageComponentsDynamicZone } from 'src/generated/graphql'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/MainGalaxy/MainGalaxy'),
  {
    ssr: false,
  }
)

export type Props = {
  homepage?: HomepageQuery
}

export const HomepageContainer: React.FC<Props> = ({ homepage }) => {
  const editorialData = homepage?.homepage?.data?.attributes

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DynamicMainGalaxyNoSsr />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.Title}
          preface={editorialData.description}
          components={editorialData.components as HomepageComponentsDynamicZone[]}
        />
      )}
    </Box>
  )
}
