'use client'
import {
  FOOTER_Z_INDEX,
  GALAXY_EDITORIAL_LAYER_PART,
} from '@/features/shared/constants/mainConstants'
import { Grid, GridItem } from '@chakra-ui/react'
import { GalaxySearchBar } from '../GalaxySearchBar/GalaxySearchBar'
import { CollpsedSearch } from '../GalaxySearchBar/fragments/CollpsedSearch'
import { GalaxyZoomNavigation } from '../GalaxyZoomNavigation/GalaxyZoomNavigation'
import { usePresenter } from './usePresenter'

type Props = {
  galaxyPagination?: React.ReactNode
}

export const GalaxyFooter: React.FC<Props> = ({ galaxyPagination }) => {
  const { isSearchBarCollapsed, toggleSearchBar, isNoActiveSearch } = usePresenter()

  return (
    <Grid
      position="absolute"
      left={6}
      right={6}
      bottom={`calc(${GALAXY_EDITORIAL_LAYER_PART} +  ${1.5}rem)`}
      height="60px"
      templateColumns="170px 1fr 230px"
      gap="5px"
      zIndex={FOOTER_Z_INDEX}
    >
      <GridItem>{galaxyPagination}</GridItem>

      <GridItem>
        {isSearchBarCollapsed ? (
          <CollpsedSearch toggleSearchBar={toggleSearchBar} />
        ) : (
          <GalaxySearchBar isNoActiveSearch={isNoActiveSearch} />
        )}
      </GridItem>
      <div className="flex h-full items-center pl-4">
        <GalaxyZoomNavigation />
      </div>
    </Grid>
  )
}
