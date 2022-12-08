import { State } from '@/features/shared/configs/store'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteTransitions } from '../hooks/useRouteTransitions'
import { galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

export const usePresenter = () => {
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const dispatch = useDispatch()
    useRouteTransitions()

    return {
        activeZoom: activeZoom,
        setActiveZoom: (zoom: ZoomStates) => dispatch(galaxyInterfaceActions.setActiveZoom({ activeZoom: zoom })),
    }
}
