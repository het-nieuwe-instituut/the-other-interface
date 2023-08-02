import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapperV2/GalaxyWrapper'
import { Box } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { Fragment, useId, useRef } from 'react'

import { usePresenter } from './usePresenter'
import { MemoizedGalaxySwitch } from './GalaxySwitch'

export const GalaxyInterface: React.FC = () => {
  const { activeZoom } = usePresenter()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)
  const id = useId()

  return (
    <Fragment key={id}>
      <GalaxyWrapper>
        <Box backgroundColor="blue.100" height="100vh" ref={graphRef}>
          {sizes?.height && sizes?.width && (
            <Box position={'fixed'}>
              <MemoizedGalaxySwitch activeZoom={activeZoom} sizes={sizes} />
            </Box>
          )}
        </Box>
      </GalaxyWrapper>
    </Fragment>
  )
}
