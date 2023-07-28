import { useGalaxyInterface } from '../stores/useGalaxyInterface'
import { ZoomStates } from '../types/galaxy'

export const useZoomPresenter = () => {
  const { state, dispatch } = useGalaxyInterface()

  return {
    activeZoom: state.activeZoom,
    setActiveZoom: (zoom: ZoomStates) =>
      dispatch({ type: 'setActiveZoom', payload: { activeZoom: zoom } }),
  }
}
