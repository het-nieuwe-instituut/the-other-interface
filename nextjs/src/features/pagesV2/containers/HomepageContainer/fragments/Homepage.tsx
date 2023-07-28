import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { Box } from '@chakra-ui/react'
import { HomepageQuery } from 'src/generated/graphql'

import { EditorialLayer } from './EditorialLayer'

export const Homepage: React.FC<{ data?: HomepageQuery }> = ({ data }) => {
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface />
      <EditorialLayer data={data} />
    </Box>
  )
}
