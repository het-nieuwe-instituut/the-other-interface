import { State } from '@/features/shared/configs/store'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    includesZoomStatesMainGalaxy,
    includesZoomStatesZoom2Galaxy,
    includesZoomStatesZoom3Galaxy,
    includesZoomStatesZoom4Galaxy,
    includesZoomStatesZoom5Galaxy,
} from '../GalaxyInterface/GalaxyInterface'
import { ZoomStates } from '../types/galaxy'
function useNavigate() {
    const router = useRouter()
    const navigate = useCallback(
        (path: string) => {
            if (router.pathname !== path) {
                router.push(path)
            }
        },
        [router]
    )

    return { navigate }
}

export function useRouteTransitions() {
    const router = useRouter()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const params = useSelector((state: State) => state.galaxyInterface.params)
    const { navigate } = useNavigate()

    useEffect(() => {
        if (!activeZoom) {
            return
        }
        if (includesZoomStatesMainGalaxy.includes(activeZoom)) {
            delete router.query.preservedZoom
            router.pathname = '/'
            if (activeZoom === ZoomStates.Zoom1) {
                router.query.preservedZoom = ZoomStates.Zoom1
            }

            router.push(router, undefined, { shallow: true })

            return
        }
        if (includesZoomStatesZoom2Galaxy.includes(activeZoom)) {
            if (!params) {
                console.error('params are needed for these states')
                return
            }

            navigate(
                `/landingpage/${Object.values(params)
                    .map(param => param.toLowerCase())
                    .join('/')}`
            )
            return
        }
        if (includesZoomStatesZoom3Galaxy.includes(activeZoom)) {
            if (!params) {
                console.error('params are needed for these states')
                return
            }

            navigate(
                `/landingpage/${Object.values(params)
                    .map(param => param.toLowerCase())
                    .join('/')}`
            )
            return
        }
        if (includesZoomStatesZoom4Galaxy.includes(activeZoom)) {
            if (!params) {
                console.error('params are needed for these states')
                return
            }

            navigate(
                `/landingpage/${Object.values(params)
                    .map(param => param.toLowerCase())
                    .join('/')}`
            )
            return
        }
        if (includesZoomStatesZoom5Galaxy.includes(activeZoom)) {
            if (!params) {
                console.error('params are needed for these states')
                return
            }

            navigate(
                `/landingpage/${Object.values(params)
                    .map(param => param.toLowerCase())
                    .join('/')}`
            )
            return
        }

        // if (activeZoom === ZoomStates.Zoom3) {
        //     router.push('/galaxyInterface3')
        //     return
        // }
    }, [activeZoom, navigate, params, router])
}
