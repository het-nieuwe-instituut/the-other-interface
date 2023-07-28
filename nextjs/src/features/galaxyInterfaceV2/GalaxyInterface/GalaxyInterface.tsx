import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import { Box } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { Fragment, useId, useRef } from 'react'

import { useZoomPresenter } from './useZoomPresenter'
import { MemoizedGalaxySwitch } from './GalaxySwitch'

export const GalaxyInterface: React.FC = () => {
  const { activeZoom } = useZoomPresenter()
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
      </GalaxyWrapper>
    </Fragment>
  )
}
