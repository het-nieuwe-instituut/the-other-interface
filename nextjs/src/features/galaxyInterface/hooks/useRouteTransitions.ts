import { SupportedQuerys } from '@/features/pages/tasks/zoom5Config'
import { State } from '@/features/shared/configs/store'
import { isEmpty, isEqual } from 'lodash'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UrlObject } from 'url'
import {
    animationInProgress,
    includesZoomStatesMainGalaxy,
    includesZoomStatesZoom2Galaxy,
    includesZoomStatesZoom3Galaxy,
    includesZoomStatesZoom4Galaxy,
    includesZoomStatesZoom5Galaxy,
} from '../GalaxyInterface/GalaxyInterface'
import { ZoomStates } from '../types/galaxy'
import { extractSlugAndId } from '../utils/extractors'
function useNavigate() {
    const router = useRouter()
    const navigate = useCallback(
        (path: string, params?: { [key: string]: string | undefined }) => {
            const searchParams = new URLSearchParams(params as Record<string, string>)
            const pathWithParams = `${path.replaceAll(' ', '')}${!isEmpty(params) ? `?${searchParams}` : ''}`
            const asPath = decodeURIComponent(router.asPath).replaceAll(' ', '')

            if (asPath !== pathWithParams) {
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
                router.push(url)
            }
        },
        [router]
    )

    return { replace }
}

const ZoomMapper: Partial<Record<ZoomStates, ZoomStates>> = {
    [ZoomStates.Zoom2Initial]: ZoomStates.Zoom2,
    [ZoomStates.Zoom3Initial]: ZoomStates.Zoom3,
    [ZoomStates.Zoom4Initial]: ZoomStates.Zoom4,
}

export function useRouteTransitions() {
    const router = useRouter()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const prevActiveZoom = useSelector((state: State) => state.galaxyInterface.prevActiveZoom)
    const params = useSelector((state: State) => state.galaxyInterface.params)

    const { navigate } = useNavigate()
    const { replace } = useReplace()

    useEffect(() => {
        function init() {
            if (!activeZoom) {
                return
            }

            const isTheSamePage = params?.page && router.query.page && (params?.page as string) === router.query.page
            const isTheSameZoom =
                router.query.preservedZoom === activeZoom ||
                (router.query.preservedZoom && router.query.preservedZoom === ZoomMapper[activeZoom])

            if (!params?.page && isTheSameZoom) {
                return
            }

            if (isTheSameZoom && isTheSamePage) {
                return
            }

            // we don't need any navigation if animation in progress
            if (animationInProgress.includes(activeZoom)) {
                return
            }

            // we don't need any navigation if we already on the page.
            if (
                router.query.preservedZoom === activeZoom ||
                (router.query.preservedZoom && router.query.preservedZoom === ZoomMapper[activeZoom])
            ) {
                return
            }

            if (includesZoomStatesMainGalaxy.includes(activeZoom)) {
                if ([ZoomStates.Zoom1].includes(activeZoom)) {
                    replace({
                        query: { ...router.query, preservedZoom: ZoomStates.Zoom1 },
                    })

                    return
                }
                if (activeZoom === ZoomStates.Zoom1Stories) {
                    navigate('/landingpage/stories', {
                        ...router.query,
                        preservedZoom: ZoomStates.Zoom1Stories,
                    })

                    return
                }

                navigate(`/`, params)
            }
            if (includesZoomStatesZoom2Galaxy.includes(activeZoom)) {
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                navigate(`/landingpage/${params.slug}`, {
                    ...router.query,
                    preservedZoom: ZoomStates.Zoom2,
                })

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

                navigate(`/landingpage/${params.slug}`, {
                    ...router.query,
                    preservedZoom: ZoomStates.Zoom3,
                    page: params.page ?? (router.query.page as string) ?? '1',
                    filter: (router.query.filter as string) ?? params.filter,
                })
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

                navigate(`/landingpage/${params.slug}`, {
                    ...router.query,
                    preservedZoom: ZoomStates.Zoom4,
                    page: params.page ?? (router.query.page as string) ?? '1',
                    filter: (router.query.filter as string) ?? params.filter,
                    collection: (router.query.collection as string) ?? params.collection,
                })
                return
            }
            if (includesZoomStatesZoom5Galaxy.includes(activeZoom)) {
                const navigatedFromZoom5Page = prevActiveZoom
                    ? includesZoomStatesZoom5Galaxy.includes(prevActiveZoom)
                    : false
                if (!params) {
                    console.error('params are needed for these states')
                    return
                }

                const { slug } = extractSlugAndId(params.slug ?? '')
                if (
                    ![
                        SupportedQuerys.archives,
                        SupportedQuerys.objects,
                        SupportedQuerys.publications,
                        SupportedQuerys.people,
                    ].includes(slug)
                ) {
                    if (!params.slug) {
                        return
                    }
                    navigate(`/story/${params.record}`, {
                        preservedZoom: ZoomStates.Zoom5InitialWithoutHighlightAnimation,
                    })
                    return
                }
                if (navigatedFromZoom5Page) {
                    navigate(`/landingpage/${params.slug}/${params.record}`, {
                        preservedZoom: ZoomStates.Zoom5InitialWithoutHighlightAnimation,
                    })
                    return
                }
                navigate(`/landingpage/${params.slug}/${params.record}`)
                return
            }
        }
        init()
    }, [activeZoom, navigate, params, prevActiveZoom, replace, router])
}
