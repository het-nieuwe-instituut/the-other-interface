/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from 'd3'
import { MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions } from '../types/galaxy'

export function useZoomToD3Element<DType>(
    svgRef: MutableRefObject<SVGSVGElement | null>,
    dimensions: Dimensions,
    selector: string,
    onComplete?: (d: d3.SimulationNodeDatum & DType) => void
) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const [zoomed, setZoomed] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clickListener = useRef<any | null>(null)

    const clicked = useCallback(
        async (
            event: MouseEvent<HTMLDivElement, MouseEvent>,
            d: d3.SimulationNodeDatum & DType,
            d3Svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
            dimensions: Dimensions
        ) => {
            event.stopPropagation()
            setZoomed(true)
            const width = dimensions.width ?? 0
            const height = dimensions.height ?? 0

            const scale = 20
            const x = (d.x ?? 0) - width / 2
            const y = (d.y ?? 0) - height / 2

            d3Svg.attr(`opacity`, `1`)

            await d3Svg
                .transition()
                .duration(1500)
                .attr(`transform`, `translate(0, 0)scale(${scale})translate(${-x}, ${-y})`)
                .attr(`opacity`, `0`)
                .end()

            onComplete?.(d)
        },
        [onComplete]
    )

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(selector)
        clickListener.current = nodeForeign.on('click', (e, d) =>
            clicked(e, d as d3.SimulationNodeDatum & DType, d3Svg, dimensions)
        )
    }, [clicked, dimensions, selector, svgRef])

    return {
        setZoomed,
        zoomed,
        storiesSystemRef,
    }
}
