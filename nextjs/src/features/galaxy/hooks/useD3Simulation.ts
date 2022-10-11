import { Dimensions } from '@/features/galaxy/types/galaxy'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { BaseType, SimulationNodeDatum } from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'

//TODO: with gateway connected these types might not be valid anynmore
export interface ObjectPerTypeWithName extends ObjectPerType {
    name: string
}

interface D3CollectionItem extends SimulationNodeDatum, ObjectPerTypeWithName {}
interface DataDimensions {
    name: string
    takeSpace: number
}
export interface ObjectPerType {
    class: string
    numberOfInstances: number
    xFromCenter: number
    yFromCenter: number
}

export function useD3Simulation(
    svgRef: MutableRefObject<SVGSVGElement | null>,
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],
    selector: string,
    dataDimensions: DataDimensions[],
    galaxyBase: number
) {
    const { simulation } = useInitializeD3Simulation<D3CollectionItem>()
    useListenToSimulationTicks(simulation, svgRef, data, selector, dataDimensions, galaxyBase)

    return {
        simulation,
    }
}

function useListenToSimulationTicks(
    simulation: MutableRefObject<d3.Simulation<D3CollectionItem, undefined> | null>,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    data: ObjectPerTypeWithName[],
    selector: string,
    dataDimensions: DataDimensions[],
    galaxyBase: number
) {
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`)?.data(data)

        simulation.current
            ?.force('charge', d3.forceManyBody().strength(0.1))
            .force('center', d3.forceCenter((galaxyBase ?? 0) / 2, (galaxyBase ?? 0) / 2))

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions, nodeForeign)
                adjustPostion(simulation.current, dataDimensions, galaxyBase)
            })
        }
        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, galaxyBase, svgRef, simulation])
}

function getTakeSpaceFromDataDimensions(dataDimensions: DataDimensions[], d: Partial<D3CollectionItem>) {
    const val = dataDimensions?.find(item => item.name === d.name)

    if (!val) {
        return 0
    }

    return val?.takeSpace / 6
}

function ticked(
    dataDimensions: DataDimensions[],
    nodeForeign: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>
) {
    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
}

function adjustPostion(
    simulation: d3.Simulation<D3CollectionItem, undefined> | null,
    dataDimensions: DataDimensions[],
    galaxyBase: number
) {
    const halfWidth = (galaxyBase ?? 0) / 2
    const halfHeight = (galaxyBase ?? 0) / 2

    simulation?.nodes().forEach(d => {
        d3.select<BaseType, D3CollectionItem>(`#${d.name}`)
            .transition()
            .duration(100)
            .attr('x', d => {
                const x = d.xFromCenter ?? 0

                return halfWidth + x - getTakeSpaceFromDataDimensions(dataDimensions, d)
            })
            .attr('y', d => {
                const y = d.yFromCenter ?? 0

                return halfHeight - y - getTakeSpaceFromDataDimensions(dataDimensions, d)
            })
    })
}
