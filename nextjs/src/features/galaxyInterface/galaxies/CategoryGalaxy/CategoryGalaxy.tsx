'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { Zoom2Query } from 'src/generated/graphql'

type Props = {
  zoom2: Zoom2Query
}

export const CategoryGalaxy: React.FC<Props> = ({ zoom2 }) => {
  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      <Records zoom2={zoom2} />

      <GalaxyFooter totalResults={zoom2?.zoomLevel2?.total} />
    </Box>
  )
}
