'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'

export const CategoryGalaxy: React.FC = () => {
  const {
    searchResult,
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber,
    pageAmount,
    increasePageNumber,
    decreasePageNumber,
  } = usePresenter()

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      {isSearchModeActive && <BlurOverlay />}
      <Records records={searchResult?.zoomLevel2?.nodes ?? []} />

      <GalaxyFooter
        galaxyPagination={
          <GalaxyPagination
            currentPageNumber={currentPageNumber}
            pageAmount={pageAmount}
            isResultAmountLoading={isResultAmountLoading}
            handleLeftClick={decreasePageNumber}
            handleRightClick={increasePageNumber}
          />
        }
      />
    </Box>
  )
}
