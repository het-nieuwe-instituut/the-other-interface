import { useSize } from '@chakra-ui/react-use-size'
import { memo } from 'react'
import { ZoomStates } from '../types/galaxy'
import {
  zoomStatesMainGalaxy,
  zoomStatesZoom2Galaxy,
  zoomStatesZoom3Galaxy,
  zoomStatesZoom4Galaxy,
  zoomStatesZoom5Galaxy,
} from './ZoomStates'

const GalaxySwitch: React.FC<{
  activeZoom: ZoomStates | null
  sizes: ReturnType<typeof useSize>
}> = props => {
  const { activeZoom } = props

  const NotImplemented = () => <p>V2 is not yet implemented</p>

  if (!activeZoom) {
    return <p>not able to render anything</p>
  }
  if (zoomStatesMainGalaxy.includes(activeZoom)) {
    return null
  }
  if (zoomStatesZoom2Galaxy.includes(activeZoom)) {
    return <NotImplemented />
  }
  if (zoomStatesZoom3Galaxy.includes(activeZoom)) {
    return <NotImplemented />
  }
  if (zoomStatesZoom4Galaxy.includes(activeZoom)) {
    return <NotImplemented />
  }
  if (zoomStatesZoom5Galaxy.includes(activeZoom)) {
    return <NotImplemented />
  }
  return <NotImplemented />
}

export const MemoizedGalaxySwitch = memo(GalaxySwitch)
