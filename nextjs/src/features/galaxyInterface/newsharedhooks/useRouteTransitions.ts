import { State } from '@/features/shared/configs/store'
import router from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ZoomStates } from '../types/galaxy'

export function useRouteTransitions() {
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)

    useEffect(() => {
        if (activeZoom === ZoomStates.Zoom0) {
            router.replace({
                query: { ...router.query, zoomLevel: ZoomStates.Zoom0 },
            })
            return
        }
        if (activeZoom === ZoomStates.Zoom1) {
            router.replace({
                query: { ...router.query, zoomLevel: ZoomStates.Zoom1 },
            })
            return
        }
        if (activeZoom === ZoomStates.Zoom1Stories) {
            router.replace({
                query: { ...router.query, zoomLevel: ZoomStates.Zoom1Stories },
            })
            return
        }

        if (activeZoom === ZoomStates.Zoom2Initial) {
            router.push('/galaxyInterfaceLanding')
            return
        }
    }, [activeZoom])
}
