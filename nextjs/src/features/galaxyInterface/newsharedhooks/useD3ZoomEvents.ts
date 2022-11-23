import { Dimensions } from '@/features/galaxy/types/galaxy'
import { State } from '@/features/shared/configs/store'
import { useStore } from '@/features/shared/hooks/useStore'
import * as d3 from 'd3'
import { useRouter } from 'next/router'
import { MutableRefObject, useRef, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getStoriesSystemDimensions } from '../galaxies/MainGalaxy/Galaxy'
import { galaxyInterfaceActions } from '../stores/galaxyInterface.store'
import { ZoomStates } from '../types/galaxy'

export function useD3ZoomEvents(svgRef: MutableRefObject<SVGSVGElement | null>, dimensions: Dimensions) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const router = useRouter()
    const store = useStore()
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)

    const zoom1stories = useCallback(
        (duration = 1500, redirect = true) => {
            const d3Svg = d3.select(svgRef.current)

            const d3Stories = d3.select(storiesSystemRef.current)

            const stories = getStoriesSystemDimensions(dimensions)
            const nodeForeign = d3Svg.select(`.circles`)

            d3Stories
                .transition()
                .duration(duration)
                .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)

            nodeForeign
                .transition()
                .duration(duration)
                .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)
        },
        [dimensions, router, svgRef]
    )

    const zoomTo = useCallback(
        async (x: number, y: number, navigateTo: string) => {
            const d3Svg = d3.select(svgRef.current)
            await d3Svg.attr(`opacity`, `1`)
            await d3Svg
                .transition()
                .duration(1500)
                .attr(`transform`, `translate(0, 0)scale(${20})translate(${x}, ${y})`)
                .attr(`opacity`, `0`)
                .end()
        },
        [svgRef]
    )

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)

        if (activeZoom === ZoomStates.Zoom0) {
            scaleZoom({ d3Svg, duration: 0, scale: 0.2 })
        }
        if (activeZoom === ZoomStates.Zoom0) {
            scaleZoom({ d3Svg, duration: 0, scale: 0.2 })
        }
        if (activeZoom === ZoomStates.Zoom0ToZoom1) {
            scaleZoom({ d3Svg, duration: 1500, scale: 1 })
        }
        if (activeZoom === ZoomStates.Zoom1ToZoom0) {
            scaleZoom({ d3Svg, duration: 1500, scale: 0.2 })
        }
        if (activeZoom === ZoomStates.Zoom1Stories) {
            zoom1stories(1500)
        }
    }, [zoom1stories, activeZoom, svgRef])

    return {
        setZoomLevel: (zoom: ZoomStates) => store.dispatch(galaxyInterfaceActions.setActiveZoom({ activeZoom: zoom })),
        zoomTo,
        zoomLevel: activeZoom,
        storiesSystemRef,
        zoom1stories,
    }
}

interface Options {
    d3Svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>
    scale?: number
    duration?: number
}

// animations
function scaleZoom(options: Options) {
    const { d3Svg, scale = 2, duration = 1500 } = options
    d3Svg
        .transition()
        .duration(duration)
        .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + scale + ')translate(' + 0 + ',' + 0 + ')')
}
