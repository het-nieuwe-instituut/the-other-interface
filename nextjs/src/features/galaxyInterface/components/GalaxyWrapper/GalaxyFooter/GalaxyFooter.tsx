'use client'
import {
  FOOTER_Z_INDEX,
  GALAXY_EDITORIAL_LAYER_PART,
} from '@/features/shared/constants/mainConstants'
import { Grid, GridItem } from '@chakra-ui/react'
import { GalaxyNavigation } from '../GalaxyNavigation/GalaxyNavigation'
import { GalaxySearchBar } from '../GalaxySearchBar/GalaxySearchBar'
import { usePresenter } from './usePresenter'
import { useTotalCounter } from '@/features/galaxyInterface/galaxies/MainGalaxy/hooks/useTotalCounter'
import { CollpsedSearch } from '../GalaxySearchBar/fragments/CollpsedSearch'
import { cn } from '@/features/ui/utils/cn'

type Props = {
  galaxyPagination?: React.ReactNode
}

export const GalaxyFooter: React.FC<Props> = ({ galaxyPagination }) => {
  const { isSearchBarCollapsed, toggleSearchBar, isZoom1, isNoActiveSearch } = usePresenter()
  const { data: total } = useTotalCounter(isZoom1)

  return (
    <Grid
      position="absolute"
      left={6}
      right={6}
      bottom={`calc(${GALAXY_EDITORIAL_LAYER_PART} +  ${1.5}rem)`}
      height="60px"
      templateColumns="165px 1fr 230px"
      gap="5px"
      zIndex={FOOTER_Z_INDEX}
    >
      <GridItem>{galaxyPagination}</GridItem>

      <GridItem position={'relative'}>
        <CollpsedSearch
          className={cn(isSearchBarCollapsed ? 'flex' : 'hidden')}
          toggleSearchBar={toggleSearchBar}
        />

        <GalaxySearchBar
          className={cn(isSearchBarCollapsed ? 'hidden' : 'grid')}
          total={total}
          isNoActiveSearch={isNoActiveSearch}
        />
      </GridItem>
      <GalaxyNavigation />
    </Grid>
  )
}
