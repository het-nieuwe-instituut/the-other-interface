import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { Grid, GridItem } from '@chakra-ui/react'
import { GalaxyNavigation } from '../GalaxyNavigation/GalaxyNavigation'
import { GalaxySearchBar } from '../GalaxySearchBar/GalaxySearchBar'
import { usePresenter } from './usePresenter'

export const GalaxyFooter: React.FC = () => {
  const { showSearchBar } = usePresenter()

  return (
    <Grid
      position="absolute"
      left={6}
      right={6}
      bottom={`calc(${GALAXY_EDITORIAL_LAYER_PART} +  ${1.5}rem)`}
      height="60px"
      templateColumns="165px 1fr 230px"
      gap="5px"
    >
      <GridItem></GridItem>
      <GridItem>{showSearchBar && <GalaxySearchBar />}</GridItem>
      <GalaxyNavigation />
    </Grid>
  )
}
