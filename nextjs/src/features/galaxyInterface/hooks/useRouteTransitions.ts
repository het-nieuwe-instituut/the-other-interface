import { State } from '@/features/shared/configs/store'
import { isEmpty, isEqual } from 'lodash'
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
        (path: string, params?: { [key: string]: string | undefined }) => {
            const searchParams = new URLSearchParams(params as Record<string, string>)
            const pathWithParams = `${path.replaceAll(' ', '')}${!isEmpty(params) ? `?${searchParams}` : ''}`

            const asPath = decodeURIComponent(router.asPath).replaceAll(' ', '')

            if (asPath !== pathWithParams) {
                console.log(pathWithParams, asPath)

                router.push({ pathname: path, query: params })
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
                console.log(router.query, url.query)

                router.push(url)
            }
        },
        [router, router.query]
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
                if ([ZoomStates.Zoom1, ZoomStates.Zoom1ToZoom2, ZoomStates.Zoom1ToZoom1Stories].includes(activeZoom)) {
                    replace({
                        query: { ...router.query, preservedZoom: ZoomStates.Zoom1 },
                    })

                    return
                }
                if (activeZoom === ZoomStates.Zoom1Stories) {
                    navigate('/landingpage/stories')

                    return
                }

                navigate(`/`, params)
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
                if (ZoomStates.Zoom3ToInitial === activeZoom) {
                    return
                }
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(
                    `/landingpage/${params.slug}/${params.filter}`,
                    params?.page ? { page: params.page } : { page: '1' }
                )
                return
            }
            if (includesZoomStatesZoom4Galaxy.includes(activeZoom)) {
                if (ZoomStates.Zoom4ToInitial === activeZoom) {
                    return
                }
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(
                    `/landingpage/${params.slug}/${params.filter}/${params.collection}`,
                    params?.page ? { page: params.page } : { page: '1' }
                )
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
    }, [activeZoom, navigate, params, replace, router])
}
