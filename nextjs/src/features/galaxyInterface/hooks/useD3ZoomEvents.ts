import { Dimensions } from '@/features/galaxy/types/galaxy'
import { State } from '@/features/shared/configs/store'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStoriesSystemDimensions } from '../galaxies/MainGalaxy/MainGalaxy'
import { galaxyInterfaceActions, GalaxyInterfaceStateState } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

interface Options {
    svgRef: MutableRefObject<SVGSVGElement | null>
    dimensions: Dimensions
}
export function useD3ZoomEvents(options: Options) {
    const { svgRef, dimensions } = options
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const activeZoomData = useSelector((state: State) => state.galaxyInterface.activeZoomData)
    const params = useSelector((state: State) => state.galaxyInterface.params)
    const dispatch = useDispatch()

    useEffect(() => {
        let cleanup: () => void | undefined = () => undefined

        async function init() {
            const d3Svg = d3.select(svgRef.current)
            // always reset to default state
            d3Svg.attr('transition', 'none')

            if (activeZoom === ZoomStates.Zoom0) {
                await scaleZoom({ d3Ref: d3Svg, to: { duration: 0, scale: 0.2 } })
            }
            if (activeZoom === ZoomStates.Zoom0ToZoom1) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: { duration: 1500, scale: 1 },
                    initial: { scale: 0.2 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom1,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom1) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom0) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    initial: { duration: 0, scale: 1 },
                    to: { duration: 1500, scale: 0.2 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom0,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom1Stories) {
                const stories = getStoriesSystemDimensions(dimensions)
                const d3Stories = d3.select(storiesSystemRef.current)
                const nodeForeign = d3Svg.select(`.circles`)

                await Promise.all([
                    scaleZoom({
                        d3Ref: d3Svg,
                        initial: {
                            scale: 1,
                        },
                    }),
                    scaleZoom({
                        d3Ref: d3Stories,
                        to: {
                            duration: 1500,
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                        initial: {
                            scale: 1,
                        },
                    }),
                    scaleZoom({
                        d3Ref: nodeForeign,
                        to: {
                            duration: 1500,
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                        initial: {
                            scale: 1,
                        },
                    }),
                ])
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom1Stories,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom1Stories) {
                const stories = getStoriesSystemDimensions(dimensions)
                const d3Stories = d3.select(storiesSystemRef.current)
                const nodeForeign = d3Svg.select(`.circles`)

                await Promise.all([
                    scaleZoom({
                        d3Ref: d3Svg,
                        to: {
                            scale: 1,
                        },
                    }),
                    scaleZoom({
                        d3Ref: d3Stories,

                        to: {
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                    }),
                    scaleZoom({
                        d3Ref: nodeForeign,
                        to: {
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                    }),
                ])
            }
            if (activeZoom === ZoomStates.Zoom1StoriesToZoom1) {
                const stories = getStoriesSystemDimensions(dimensions)
                const d3Stories = d3.select(storiesSystemRef.current)
                const nodeForeign = d3Svg.select(`.circles`)
                await Promise.all([
                    scaleZoom({
                        d3Ref: d3Svg,
                        initial: {
                            scale: 1,
                        },
                    }),
                    scaleZoom({
                        d3Ref: d3Stories,
                        initial: {
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                        to: {
                            duration: 1500,
                            scale: 1,
                            translateX: stories.x,
                            translateY: stories.y,
                        },
                    }),
                    scaleZoom({
                        d3Ref: nodeForeign,
                        initial: {
                            scale: 1.5,
                            translateX: -stories.x,
                            translateY: -stories.y,
                        },
                        to: {
                            duration: 1500,
                            scale: 1,
                            translateX: stories.x,
                            translateY: stories.y,
                        },
                    }),
                ])
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom1,
                    })
                )
            }
            if (activeZoom === ZoomStates.ZoomOutToZoom1) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: {
                        scale: 20,
                        opacity: 0,
                    },
                })

                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom1,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom2) {
                const item = activeZoomData
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 20,
                        opacity: 0,
                        ...item?.to,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom2Initial,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom2ToZoom1) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: {
                        scale: 1,
                        opacity: 1,
                    },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.ZoomOutToZoom1,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom2Initial) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 0, opacity: 0 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        activeZoom: ZoomStates.Zoom2,
                        params: params,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom2) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }
            if (activeZoom === ZoomStates.Zoom2ToZoom3) {
                const item = activeZoomData
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 20,
                        opacity: 0,
                        ...item?.to,
                    },
                    initial: { scale: 1 },
                })

                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom3Initial,
                    })
                )
            }
            if (activeZoom === ZoomStates.ZoomOutToZoom2) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 20, opacity: 0 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom2,
                    })
                )
            }

            // ZOOM 3
            if (activeZoom === ZoomStates.Zoom3Initial) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 0, opacity: 0 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom3,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom3ToInitial) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom3Initial,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom3) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }
            if (activeZoom === ZoomStates.Zoom3ToZoom2) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.ZoomOutToZoom3,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom3ToZoom4) {
                const item = activeZoomData
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 20,
                        opacity: 0,
                        ...item?.to,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: { ...params, page: undefined },
                        activeZoom: ZoomStates.Zoom4Initial,
                    })
                )
            }

            if (activeZoom === ZoomStates.ZoomOutToZoom3) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 20, opacity: 0 },
                })

                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom3,
                    })
                )
            }

            // ZOOM 4
            if (activeZoom === ZoomStates.Zoom4Initial) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 0, opacity: 0 },
                })
                console.log('to zoom 4', params)

                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom4,
                    })
                )
            }

            if (activeZoom === ZoomStates.Zoom4) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }

            if (activeZoom === ZoomStates.Zoom4ToZoom3) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.ZoomOutToZoom3,
                    })
                )
            }

            if (activeZoom === ZoomStates.Zoom4ToInitial) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom4Initial,
                    })
                )
            }
            if (activeZoom === ZoomStates.Zoom4ToZoom5) {
                const item = activeZoomData
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 20,
                        opacity: 0,
                        ...item?.to,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: { ...params, page: undefined },
                        activeZoom: ZoomStates.Zoom5Initial,
                    })
                )
            }

            if (activeZoom === ZoomStates.ZoomOutToZoom4) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 1,
                        opacity: 1,
                    },
                    initial: { scale: 20, opacity: 0 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.Zoom4,
                    })
                )
            }

            // ZOOM 5
            if (activeZoom === ZoomStates.Zoom5) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }

            if (activeZoom === ZoomStates.Zoom5Initial) {
                await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
            }
            if (activeZoom === ZoomStates.Zoom5ToZoom4) {
                await scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 0,
                        opacity: 0,
                    },
                    initial: { scale: 1 },
                })
                dispatch(
                    galaxyInterfaceActions.setActiveZoom({
                        params: params,
                        activeZoom: ZoomStates.ZoomOutToZoom4,
                    })
                )
            }
        }

        init()

        return () => {
            cleanup()
            cleanup = () => undefined
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeZoom, svgRef, dimensions, activeZoomData])

    return {
        setZoomLevel: (values: GalaxyInterfaceStateState) => dispatch(galaxyInterfaceActions.setActiveZoom(values)),
        zoomLevel: activeZoom,
        storiesSystemRef,
    }
}

export interface AnimatedProps {
    scale?: number
    opacity?: number
    startTranslateX?: number
    startTranslateY?: number
    translateX?: number
    translateY?: number
    duration?: number
}
export interface D3AnimationStyleProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    d3Ref: d3.Selection<any, unknown, null, undefined>
    initial?: AnimatedProps
    to?: AnimatedProps
    after?: AnimatedProps
}

async function scaleZoom(options: D3AnimationStyleProps) {
    const { d3Ref, initial, to, after } = options

    if (initial) {
        await transitionUtilityFn(d3Ref, initial)
    }
    if (to) {
        await transitionUtilityFn(d3Ref, to)
    }
    if (after) {
        await transitionUtilityFn(d3Ref, after)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transitionUtilityFn(d3Ref: d3.Selection<any, unknown, null, undefined>, to: AnimatedProps) {
    const {
        opacity = 1,
        translateX = 0,
        translateY = 0,
        startTranslateX = 0,
        startTranslateY = 0,
        duration = 0,
        scale = 1,
    } = to
    return d3Ref
        .transition()
        .duration(duration)
        .attr('opacity', opacity ?? null)
        .attr(
            'transform',
            `translate(` +
                startTranslateX +
                ',' +
                startTranslateY +
                ')scale(' +
                scale +
                ')translate(' +
                translateX +
                ',' +
                translateY +
                ')'
        )
        .end()
}
