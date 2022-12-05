import { State } from '@/features/shared/configs/store'
import { isEqual } from 'lodash'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UrlObject } from 'url'
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
            if (decodeURIComponent(router.asPath).replaceAll(' ', '') !== path.replaceAll(' ', '')) {
                router.push(path)
            }
        },
        [router]
    )

    return { navigate }
}

function useReplace() {
    const router = useRouter()
    const replace = useCallback(
        (url: UrlObject) => {
            if (!isEqual(router.query, url.query)) {
                router.push(url)
            }
        },
        [router]
    )

    return { replace }
}

export function useRouteTransitions() {
    const router = useRouter()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const params = useSelector((state: State) => state.galaxyInterface.params)
    const { navigate } = useNavigate()
    const { replace } = useReplace()

    useEffect(() => {
        function init() {
            if (!activeZoom) {
                return
            }
            if (includesZoomStatesMainGalaxy.includes(activeZoom)) {
                if ([ZoomStates.Zoom1, ZoomStates.Zoom1ToZoom2].includes(activeZoom)) {
                    replace({
                        query: { ...router.query, preservedZoom: ZoomStates.Zoom1 },
                    })

                    return
                }
                if (activeZoom === ZoomStates.Zoom1Stories) {
                    router.push('/landingpage/stories', undefined, { shallow: true })

                    return
                }

                router.push('/', undefined, { shallow: true })
            }
            if (includesZoomStatesZoom2Galaxy.includes(activeZoom)) {
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(`/landingpage/${params.slug}`)

                return
            }
            if (includesZoomStatesZoom3Galaxy.includes(activeZoom)) {
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(`/landingpage/${params.slug}/${params.filter}`)
                return
            }
            if (includesZoomStatesZoom4Galaxy.includes(activeZoom)) {
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(`/landingpage/${params.slug}/${params.filter}/${params.collection}`)
                return
            }
            if (includesZoomStatesZoom5Galaxy.includes(activeZoom)) {
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(`/landingpage/${params.slug}/${params.filter}/${params.collection}/${params.record}`)
                return
            }
        }
        init()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeZoom])
}
