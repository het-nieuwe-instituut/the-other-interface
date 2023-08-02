import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapperV2/GalaxyWrapper'
import { Box, Button } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { Fragment, useId, useRef } from 'react'

import { usePresenter } from './usePresenter'
import { ZoomStates } from '../types/galaxy'
import { MemoizedGalaxySwitch } from './GalaxySwitch'

export const GalaxyInterface: React.FC = () => {
  const { activeZoom, setActiveZoom } = usePresenter()
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

      <Box>
        <p>{activeZoom}</p>
        <Box zIndex={100000}>
          {Object.values(ZoomStates).map((t, index) => {
            return (
              <Button key={t + index} onClick={() => setActiveZoom(t)}>
                {t}
              </Button>
            )
          })}
        </Box>
      </Box>
    </Fragment>
  )
}
