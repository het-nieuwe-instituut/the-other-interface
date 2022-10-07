/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef, useState, MouseEvent } from 'react'
import { D3CollectionItem } from './useD3Simulation'

export enum ZoomLevel {
    ZoomedToFilter = 'ZoomedToFilter',
    ZoomedToClouds = 'ZoomedToClouds',
}

export function useD3ZoomEvents(
    svgRef: MutableRefObject<SVGSVGElement | null>,
    dimensions: Dimensions,
    selector: string
) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.ZoomedToClouds)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clickListener = useRef<any | null>(null)

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`)
        clickListener.current = nodeForeign.on('click', (e, d) => clicked(e, d as D3CollectionItem, d3Svg, dimensions))
    }, [dimensions, selector, svgRef])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function clicked(
        event: MouseEvent<HTMLDivElement, MouseEvent>,
        d: D3CollectionItem,
        d3Svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
        dimensions: Dimensions
    ) {
        event.stopPropagation()
        setZoomLevel(ZoomLevel.ZoomedToFilter)
        const width = dimensions.width ?? 0
        const height = dimensions.height ?? 0

        const scale = 20
        const x = d?.x ?? 0 - width / 2
        const y = d?.y ?? 0 - height / 2

        d3Svg.attr(`opacity`, `1`)

        d3Svg
            .transition()
            .duration(1500)
            .attr(`transform`, `translate(0, 0)scale(${scale})translate(${-x}, ${-y})`)
            .attr(`opacity`, `0`)
            .end()
    }

    return {
        setZoomLevel,
        zoomLevel,
        storiesSystemRef,
    }
}
