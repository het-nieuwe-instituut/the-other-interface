'use client'
import { Flex, Text } from '@chakra-ui/react'
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
    isResultLoading,
  } = usePresenter()

  return (
    <Flex
      position="relative"
      width="100vw"
      height="100vh"
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'hidden'}
    >
      {isSearchModeActive && <BlurOverlay />}
      {isResultLoading ? (
        <Text textStyle="headingTimesLarge.lg" color={'blueAlpha.100'}>
          Loading...
        </Text>
      ) : (
        <Records records={searchResult?.zoomLevel2?.nodes ?? []} />
      )}

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
