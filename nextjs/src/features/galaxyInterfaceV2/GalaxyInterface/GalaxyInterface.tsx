import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { Box } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { Fragment, useId, useRef } from 'react'
import { ThemeTitle } from '../components/ThemeTitle/ThemeTitle'

interface Props {
  children: React.ReactNode
  storyTitle?: string
}

export const GalaxyInterface: React.FC<Props> = ({ children, storyTitle }) => {
  const id = useId()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)

  return (
    <Fragment key={id}>
      <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />}>
        <Box backgroundColor="blue.100" height="100vh" ref={graphRef}>
          {sizes?.height && sizes?.width && <Box position={'fixed'}>{children}</Box>}
        </Box>
        <ThemeTitle title={storyTitle ?? ''} />
      </GalaxyWrapper>
    </Fragment>
  )
}
