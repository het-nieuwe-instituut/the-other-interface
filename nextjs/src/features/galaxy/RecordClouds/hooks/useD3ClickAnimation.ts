/* eslint-disable @typescript-eslint/no-explicit-any */

import * as d3 from 'd3'
import { MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions } from '../../types/galaxy'
import { ParentRelation } from './usePositionClouds'

export function useD3HeroAnimateElement<DType>(
    shouldDisable: (d: any) => boolean,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    relations: ParentRelation[],
    dimensions: Dimensions,
    selector: string,
    onComplete?: (d: d3.SimulationNodeDatum & DType) => void,
    onStart?: () => void
) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const [zoomed, setZoomed] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clickListener = useRef<any | null>(null)

    const clicked = useCallback(
        async (
            event: MouseEvent<HTMLDivElement, MouseEvent>,
            d: any,
            d3Svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
            dimensions: Dimensions
        ) => {
            event.stopPropagation()
            if (shouldDisable(d)) {
                return
            }
            setZoomed(true)
            onStart?.()
            const width = dimensions.width ?? 0
            const height = dimensions.height ?? 0
            const middleWidth = width / 2 - d.diameter / 2
            const middleHeight = height / 2 - d.diameter / 2

            const item = d3.select(event.currentTarget)
            event.currentTarget.setAttribute('id', 'foreign-hero')

            const scale = 500 / d.diameter

            item.style('transform-origin', 'center')

            const itemChildren = item.select('[data-child="true"]')
            itemChildren.style('opacity', 1)
            itemChildren.transition().duration(600).style('opacity', 0)

            await item
                .transition()
                .duration(1500)
                .attr(`x`, middleWidth)
                .attr(`y`, middleHeight)
                .attr('transform', `scale(${scale})`)
                .end()

            onComplete?.(d)
        },
        [onComplete, onStart]
    )

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(selector)
        const flattenedRandomRelations =
            relations?.reduce<any[]>((randomRelations, relation) => {
                if (!relation || !relation.children) {
                    return randomRelations
                }
                return [...randomRelations, ...relation.children]
            }, []) ?? []

        clickListener.current = nodeForeign
            .on('click', (e, d) => {
                return clicked(e, d as d3.SimulationNodeDatum & DType, d3Svg, dimensions)
            })
            .data(flattenedRandomRelations)
    }, [clicked, dimensions, relations, selector, svgRef])

    return {
        setZoomed,
        zoomed,
        storiesSystemRef,
    }
}
