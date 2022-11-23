import { State } from '@/features/shared/configs/store'
import { useStore } from '@/features/shared/hooks/useStore'
import { useSelector } from 'react-redux'
import { galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

export const usePresenter = () => {
    const store = useStore()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)

    return {
        activeZoom: activeZoom,
        setActiveZoom: (zoom: ZoomStates) => store.dispatch(galaxyInterfaceActions.setActiveZoom({ activeZoom: zoom })),
    }
}
