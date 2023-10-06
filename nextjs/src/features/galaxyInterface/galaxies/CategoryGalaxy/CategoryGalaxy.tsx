'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { Zoom2Query } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'

type Props = {
  zoom2: Zoom2Query
}

export const CategoryGalaxy: React.FC<Props> = ({ zoom2 }) => {
  const { isSearchModeActive } = usePresenter()
  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      {isSearchModeActive && <BlurOverlay />}
      <Records zoom2={zoom2} />

      <GalaxyFooter totalResults={zoom2?.zoomLevel2?.total} />
    </Box>
  )
}
