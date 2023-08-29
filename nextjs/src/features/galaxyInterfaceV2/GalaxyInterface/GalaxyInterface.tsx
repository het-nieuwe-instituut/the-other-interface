import { GalaxyFooter } from '@/features/shared/components/v2/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/v2/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { Box, Flex, useTheme } from '@chakra-ui/react'

import { useSize } from '@chakra-ui/react-use-size'
import { ThemeTitle } from '../components/ThemeTitle/ThemeTitle'
import { useRef } from 'react'

interface Props {
  renderFooterCenter?: JSX.Element
  children: React.ReactNode
  storyTitle?: string
}

export const GalaxyInterface: React.FC<Props> = ({ children, storyTitle, renderFooterCenter }) => {
  const theme = useTheme()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)

  return (
    <Box display="block" position={'relative'} pointerEvents={'none'}>
      <Flex
        maxW={theme.breakpoints.xl}
        marginX={'auto'}
        position="fixed"
        left={0}
        right={0}
        justifyContent={'space-between'}
        zIndex={5}
        top={0}
      >
        <Flex alignItems={'center'} position="relative" zIndex={2} left={'32px'} top={'6px'}></Flex>
        <Flex alignItems={'center'} position="relative" zIndex={2} right={'32px'} top={'6px'}>
          <GalaxyTopRight />
        </Flex>
      </Flex>
      <Box position="absolute" left="24px" right="24px" bottom="24px" zIndex={1000}>
        <GalaxyFooter renderFooterCenter={renderFooterCenter} />
      </Box>
      <Box
        zIndex={1}
        bottom={0}
        right={0}
        left={0}
        pointerEvents={'all'}
        backgroundColor="blue.100"
        height="100vh"
        ref={graphRef}
      >
        {sizes?.height && sizes?.width && <Box position={'fixed'}>{children}</Box>}
      </Box>
      <ThemeTitle title={storyTitle ?? ''} />
    </Box>
  )
}
