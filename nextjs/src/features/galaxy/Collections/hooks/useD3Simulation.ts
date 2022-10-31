import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { ZoomLevel4Type } from 'src/generated/graphql'
import { Dimensions } from '../../types/galaxy'

export function useD3Simulation(dimensions: Dimensions, data: ZoomLevel4Type[], selector: string) {
    const { simulation } = useInitializeD3Simulation<SimulationNodeDatum>([dimensions])
    const svgRef = useRef<SVGSVGElement | null>(null)
    useListenToSimulationTicks(simulation, dimensions, svgRef, data, selector)

    return {
        svgRef,
        simulation,
    }
}

function useListenToSimulationTicks(
    simulation: MutableRefObject<d3.Simulation<SimulationNodeDatum, undefined> | null>,
    dimensions: Dimensions,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    data: Partial<SimulationNodeDatum & ZoomLevel4Type>[],
    selector: string
) {
    // const nodesListener = useRef<d3.Simulation<SimulationNodeDatum, undefined> | undefined | null>(null)

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`)
        nodeForeign.attr('width', 140).attr('height', 90)
        nodeForeign.style('transform-origin', 'center')
        nodeForeign.attr('opacity', 0).style('transform', 'scale(0)')
        nodeForeign.transition().duration(600).attr('opacity', 1).style('opacity', 1).style('transform', 'scale(1)')
    }, [data, selector, svgRef])
}
