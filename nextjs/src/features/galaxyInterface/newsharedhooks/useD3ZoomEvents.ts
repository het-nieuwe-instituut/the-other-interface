import { Dimensions } from '@/features/galaxy/types/galaxy'
import { State } from '@/features/shared/configs/store'
import { useStore } from '@/features/shared/hooks/useStore'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getStoriesSystemDimensions } from '../galaxies/MainGalaxy/Galaxy'
import { GalaxyInterfaceStateState, galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

export function useD3ZoomEvents(svgRef: MutableRefObject<SVGSVGElement | null>, dimensions: Dimensions) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const store = useStore()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)

    useEffect(() => {
        let cleanup: () => void | undefined = () => undefined

        async function init() {
            const d3Svg = d3.select(svgRef.current)
            // always reset to default state
            d3Svg.attr('transition', 'none')

            if (activeZoom === ZoomStates.Zoom0) {
                animationWrapper(store, async () => {
                    await scaleZoom({ d3Ref: d3Svg, to: { duration: 0, scale: 0.2 } })
                })
            }
            if (activeZoom === ZoomStates.Zoom0ToZoom1) {
                animationWrapper(store, async () => {
                    await scaleZoom({
                        d3Ref: d3Svg,
                        to: { duration: 1500, scale: 1 },
                        initial: { scale: 0.2 },
                    })
                })
            }
            if (activeZoom === ZoomStates.Zoom1) {
                animationWrapper(store, async () => {
                    await scaleZoom({ d3Ref: d3Svg, initial: { duration: 0, scale: 1 } })
                })
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom0) {
                animationWrapper(store, async () => {
                    await scaleZoom({
                        d3Ref: d3Svg,
                        initial: { duration: 0, scale: 1 },
                        to: { duration: 1500, scale: 0.2 },
                    })
                })
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom1Stories) {
                animationWrapper(store, async () => {
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

                    // cleanup = () => {
                    //     scaleZoom({
                    //         d3Ref: nodeForeign,
                    //         initial: {
                    //             translateX: stories.x,
                    //             translateY: stories.y,
                    //         },
                    //     })
                    //     scaleZoom({
                    //         d3Ref: d3Stories,
                    //         initial: {
                    //             translateX: stories.x,
                    //             translateY: stories.y,
                    //         },
                    //     })
                    // }
                })
            }
            if (activeZoom === ZoomStates.Zoom1Stories) {
                animationWrapper(store, async () => {
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

                    // cleanup = () => {
                    //     console.log('cleanup')
                    //     scaleZoom({
                    //         d3Ref: nodeForeign,
                    //         initial: {
                    //             translateX: stories.x,
                    //             translateY: stories.y,
                    //         },
                    //     })
                    //     scaleZoom({
                    //         d3Ref: d3Stories,
                    //         initial: {
                    //             translateX: stories.x,
                    //             translateY: stories.y,
                    //         },
                    //     })
                    // }
                })
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
            }
            if (activeZoom === ZoomStates.Zoom1ToZoom2) {
                const item = store.getState().galaxyInterface.activeZoomData
                scaleZoom({
                    d3Ref: d3Svg,
                    to: {
                        duration: 1500,
                        scale: 20,
                        ...item?.to,
                    },
                    initial: { scale: 1 },
                })
            }
            if (activeZoom === ZoomStates.Zoom2ToZoom1) {
                scaleZoom({
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
            }
        }

        init()

        return () => {
            cleanup()
            cleanup = () => undefined
        }
    }, [activeZoom, svgRef, dimensions, store])

    return {
        setZoomLevel: (values: GalaxyInterfaceStateState) =>
            store.dispatch(galaxyInterfaceActions.setActiveZoom(values)),
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

async function animationWrapper(store: ReturnType<typeof useStore>, animate: () => void | Promise<void>) {
    await animate()

    // update after animation
    if (store.getState().galaxyInterface.afterAnimationState) {
        store.dispatch(
            galaxyInterfaceActions.setActiveZoom({
                activeZoom: store.getState().galaxyInterface.afterAnimationState ?? null,
            })
        )
    }
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
