import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { Box, Flex, useTheme } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { useRef } from 'react'
import { GalaxyTopRight } from '../components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyFooter } from '../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'

interface Props {
  renderFooterCenter?: JSX.Element
  children: React.ReactNode
}

export const GalaxyInterface: React.FC<Props> = ({ children, renderFooterCenter }) => {
  const theme = useTheme()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)

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
      <Box position="absolute" left={6} right={6} bottom={6} zIndex={1000}>
        <GalaxyFooter renderFooterCenter={renderFooterCenter} />
      </Box>
      <Box
        position="relative"
        height={`calc(100vh - ${GALAXY_EDITORIAL_LAYER_PART})`}
        bottom={0}
        right={0}
        left={0}
        backgroundColor={'navyAlpha.100'}
        ref={graphRef}
      >
        {sizes?.height && sizes?.width && <Box position={'fixed'}>{children}</Box>}
      </Box>
    </Box>
  )
}
