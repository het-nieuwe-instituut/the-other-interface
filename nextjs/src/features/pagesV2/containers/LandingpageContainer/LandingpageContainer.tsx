import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { GalaxyRecordsFilter } from '@/features/shared/components/v2/GalaxyWrapper/GalaxyRecordsFilter/GalaxyRecordsFilter'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
import { CloudCategory } from '@/features/shared/types/categories'

import { LandingpageBySlugQuery } from 'src/generated/graphql'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/CategoryGalaxy/CategoryGalaxy'),
  {
    ssr: false,
  }
)

interface Props {
  category: CloudCategory
  landingpage?: LandingpageBySlugQuery
}

export const LandingpageContainer: React.FC<Props> = ({ category, landingpage }) => {
  const editorialData = landingpage?.landingpages?.data[0]?.attributes

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface renderFooterCenter={<GalaxyRecordsFilter category={category} />}>
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
