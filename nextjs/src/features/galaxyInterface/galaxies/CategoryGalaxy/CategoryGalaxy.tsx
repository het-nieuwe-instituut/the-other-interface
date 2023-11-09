'use client'
import { Flex } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'

import { Loader } from '../../components/Loader/Loader'

export const CategoryGalaxy: React.FC = () => {
  const {
    searchResult,
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber,
    pageAmount,
    increasePageNumber,
    decreasePageNumber,
    isResultLoading,
  } = usePresenter()

  return (
    <Flex
      position="relative"
      width="100vw"
      height="100vh"
      alignItems={'center'}
      overflow={'hidden'}
      padding={'0 25px'}
    >
      {isSearchModeActive && <BlurOverlay />}
      {isResultLoading ? <Loader /> : <Records records={searchResult?.zoomLevel2?.nodes ?? []} />}

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
    </Flex>
  )
}
