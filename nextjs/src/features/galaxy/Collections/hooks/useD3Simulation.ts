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
    const nodesListener = useRef<d3.Simulation<SimulationNodeDatum, undefined> | undefined | null>(null)

    // set default styles
    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)
        nodeForeign.attr('opacity', 0).attr('width', 0).attr('height', 0)
    }, [data, selector, svgRef])

    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<SimulationNodeDatum>>(data)

        console.log(nodeForeign)
        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes([...data] as SimulationNodeDatum[]).on('tick', () => {
                ticked(nodeForeign)
            })
        }

        return () => {
            nodesListener.current = null
        }
    }, [data, selector, svgRef, simulation, dimensions])
}

function ticked(nodeForeign: d3.Selection<d3.BaseType, Partial<SimulationNodeDatum>, SVGSVGElement | null, unknown>) {
    nodeForeign.transition().duration(110).attr('opacity', 1)
}
