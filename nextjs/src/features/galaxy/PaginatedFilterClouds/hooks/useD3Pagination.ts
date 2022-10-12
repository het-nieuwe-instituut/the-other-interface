import * as d3 from 'd3'
import { Simulation } from 'd3'
import { MutableRefObject, useCallback } from 'react'
import { D3CollectionItem } from './useD3Simulation'

export function useD3Pagination(
    simulation: MutableRefObject<Simulation<D3CollectionItem, undefined> | null>,
    selector: string,
    svgRef: MutableRefObject<SVGSVGElement | null>
) {
    function paginateNext() {
        console.log('call')
        animateOut()
        simulation.current?.nodes()
    }

    function paginateBack() {
        simulation.current?.nodes()
    }

    const animateOut = useCallback(() => {
        simulation.current?.stop()
        const d3Svg = d3.select(svgRef.current)
        const foreignNodes = d3Svg.selectAll(`.foreign-${selector}`)

        foreignNodes.transition().duration(110).attr('width', 0).attr('height', 0).attr('opacity', 0)
    }, [selector, simulation, svgRef])

    return {
        paginateNext,
        paginateBack,
    }
}
