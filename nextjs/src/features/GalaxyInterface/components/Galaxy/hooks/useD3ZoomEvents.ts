import { Dimensions, ZoomLevel } from '@/features/GalaxyInterface/types/galaxy'
import * as d3 from 'd3'
import { MutableRefObject, useRef, useState, useCallback, useEffect } from 'react'
import { getStoriesSystemDimensions } from '../Galaxy'

export function useD3ZoomEvents(svgRef: MutableRefObject<SVGSVGElement | null>, dimensions: Dimensions) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.Zoom0)

    const zoom1stories = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        const d3Stories = d3.select(storiesSystemRef.current)

        const stories = getStoriesSystemDimensions(dimensions)
        const nodeForeign = d3Svg.select(`.circles`)

        d3Stories
            .transition()
            .duration(1500)
            .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)

        nodeForeign
            .transition()
            .duration(1500)
            .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)
    }, [dimensions, svgRef])

    const zoom1 = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(1500)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 1 + ')translate(' + 0 + ',' + 0 + ')')
    }, [svgRef])

    const zoomout = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(0)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 0.3 + ')translate(' + 0 + ',' + 0 + ')')
    }, [svgRef])

    const zoomTo = useCallback(
        (x: number, y: number) => {
            const d3Svg = d3.select(svgRef.current)
            setZoomLevel(ZoomLevel.zoomedTo)

            d3Svg.transition().duration(1500).attr(`transform`, `translate(0, 0)scale(${20})translate(${x}, ${y})`)
        },
        [svgRef]
    )

    useEffect(() => {
        if (zoomLevel === ZoomLevel.Zoom0) {
            zoomout()
        }
        if (zoomLevel === ZoomLevel.Zoom1) {
            zoom1()
        }
        if (zoomLevel === ZoomLevel.Zoom1Stories) {
            zoom1stories()
        }
    }, [zoom1, zoom1stories, zoomLevel, zoomout])

    return {
        setZoomLevel,
        zoomTo,
        zoomLevel,
        storiesSystemRef,
    }
}
