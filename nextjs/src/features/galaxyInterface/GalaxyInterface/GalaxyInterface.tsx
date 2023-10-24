'use client'
import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { Box, Flex } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'

interface Props {
  children: React.ReactNode
}

export const GalaxyInterface: React.FC<Props> = ({ children }) => {
  const { theme, sizes, graphRef } = usePresenter()

  return (
    <Box display="block" position={'relative'}>
      <Flex
        maxW={theme.breakpoints.xl}
        marginX={'auto'}
        position="fixed"
        left={0}
        right={0}
        top={0}
        justifyContent={'space-between'}
        zIndex={5}
      >
        <Flex alignItems={'center'} position="relative" zIndex={2} left={8} top={1}></Flex>
        <Flex alignItems={'center'} position="relative" zIndex={2} right={8} top={1}>
          <GalaxyTopRight />
        </Flex>
      </Flex>

      <Box
        position="relative"
        height={`calc(100vh - ${GALAXY_EDITORIAL_LAYER_PART})`}
        bottom={0}
        right={0}
        left={0}
        backgroundColor={'pinkAlpha.100'}
        ref={graphRef}
      >
        {sizes?.height && sizes?.width && <Box position={'fixed'}>{children}</Box>}
      </Box>
    </Box>
  )
}
