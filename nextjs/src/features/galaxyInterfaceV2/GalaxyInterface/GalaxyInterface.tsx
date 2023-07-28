import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { Box, Button } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { Fragment, useId, useRef } from 'react'

import { useZoomPresenter } from './useZoomPresenter'
import { MemoizedGalaxySwitch } from './GalaxySwitch'
import { ZoomStates } from '../types/galaxy'

export const GalaxyInterface: React.FC = () => {
  const { activeZoom, setActiveZoom } = useZoomPresenter()
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useSize(graphRef)
  const id = useId()

  return (
    <Fragment key={id}>
      <GalaxyWrapper>
        <Box>
          <p>{`${activeZoom}`}</p>
        </Box>
        <Box backgroundColor="graph" height="800px" ref={graphRef}>
          {sizes?.height && sizes?.width && (
            <Box position={'fixed'}>
              <MemoizedGalaxySwitch activeZoom={activeZoom} sizes={sizes} />
            </Box>
          )}
        </Box>

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
      </GalaxyWrapper>
    </Fragment>
  )
}
