'use client'
import { Box, Flex } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { usePresenter } from './usePresenter'
import BlurOverlay from '@/features/shared/components/BlurOverlay/BlurOverlay'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'

export const CategoryGalaxy: React.FC = () => {
  const {
    isSearchModeActive,
    isResultAmountLoading,
    currentPageNumber,
    pageAmount,
    isResultEmpty,
    increasePageNumber,
    decreasePageNumber,
  } = usePresenter()

  return (
    <Box w={'100vw'} backgroundColor={'pinkAlpha.100'}>
      <Flex
        position="relative"
        width="100vw"
        height="100vh"
        alignItems={'center'}
        justifyContent={'center'}
        overflow={'hidden'}
        padding={'0 25px'}
        maxW={'1440px'}
        marginX={'auto'}
      >
        {isSearchModeActive && <BlurOverlay />}
        <Records pageAmount={pageAmount} />

        <GalaxyFooter
          galaxyPagination={
            <GalaxyPagination
              currentPageNumber={currentPageNumber}
              pageAmount={pageAmount}
              isResultAmountLoading={isResultAmountLoading}
              handleLeftClick={decreasePageNumber}
              handleRightClick={increasePageNumber}
              isResultEmpty={isResultEmpty}
            />
          }
        />
      </Flex>
    </Box>
  )
}
