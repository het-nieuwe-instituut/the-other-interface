import { Dimensions } from '@/features/GalaxyInterface/types/galaxy'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { DataDimension } from '../../hooks/useFitToDataToDimensions'
import { FilterType } from '../types'

export interface D3CollectionItem extends SimulationNodeDatum, FilterType {}

export function useD3Simulation(
    dimensions: Dimensions,
    data: FilterType[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const { simulation } = useInitializeD3Simulation<D3CollectionItem>([dimensions])
    const svgRef = useRef<SVGSVGElement | null>(null)
    useListenToSimulationTicks(simulation, dimensions, svgRef, data, selector, dataDimensions)

    return {
        svgRef,
        simulation,
    }
}

function useListenToSimulationTicks(
    simulation: MutableRefObject<d3.Simulation<D3CollectionItem, undefined> | null>,
    dimensions: Dimensions,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    data: FilterType[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

    // set default styles
    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)
        nodeForeign.attr('opacity', 0).attr('width', 0).attr('height', 0)
    }, [data, selector, svgRef])

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        simulation.current
            ?.force('charge', d3.forceManyBody().strength(0.1))
            .force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions, simulation, nodeForeign, dimensions)
            })
        }

        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, svgRef, simulation, dimensions])
}

function getDataDimension(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
    return dataDimensions?.find(item => item.name === d.name)
}

function getTakeSpaceFromDataDimensions(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
    const val = getDataDimension(dataDimensions, d)

    if (!val) {
        return 0
    }

    return val?.takeSpace / 6
}

function ticked(
    dataDimensions: DataDimension[],
    simulation: MutableRefObject<d3.Simulation<D3CollectionItem, undefined> | null>,
    nodeForeign: d3.Selection<d3.BaseType, D3CollectionItem, d3.BaseType, unknown>,
    dimensions: Dimensions
) {
    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0

    // bounding box
    nodeForeign
        .attr('cx', d => {
            const diameter = getDiameter(dataDimensions, d)
            return (d.x = Math.max(diameter, Math.min(width - diameter, d.x ?? 0)))
        })
        .attr('cy', d => {
            const diameter = getDiameter(dataDimensions, d)
            return (d.y = Math.max(diameter, Math.min(height - diameter, d.y ?? 0)))
        })

    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))

    nodeForeign
        .transition()
        .duration(90)
        .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('opacity', 1)

    if (simulation) {
        simulation.current
            ?.force(
                'collide',
                d3
                    .forceCollide()
                    .strength(1)
                    .radius(d => getDiameter(dataDimensions, d))
            )
            .force('centerX', d3.forceX(width / 2))
            .force('centerY', d3.forceY(height / 2))
    }
}

function getDiameter(dataDimensions: DataDimension[], d: d3.SimulationNodeDatum) {
    const dataDimension = getDataDimension(dataDimensions, d)
    return getTakeSpaceFromDataDimensions(dataDimensions, d) * (dataDimension?.randomMultiplier ?? 0)
}
