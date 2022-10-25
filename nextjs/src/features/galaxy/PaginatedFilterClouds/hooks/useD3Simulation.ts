import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { DataDimension } from '../../hooks/useFitToDataToDimensions'
import { Dimensions, PaginatedFilterType } from '../types'
import { getId } from '../usePresenter'

const collisionData = [{ id: 'collision' }]
const collision = 120
type CollisionData = typeof collisionData[0]

export interface D3CollectionItem extends SimulationNodeDatum, PaginatedFilterType, CollisionData {}
export interface D3CollisionData extends SimulationNodeDatum, CollisionData {}

export function useD3Simulation(
    dimensions: Dimensions,
    data: Partial<D3CollectionItem>[],
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
    data: Partial<D3CollectionItem>[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

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
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<D3CollectionItem>>(data)
        const collisionObject = d3Svg.selectAll(`.foreign-collision`).data<Partial<D3CollisionData>>(collisionData)

        simulation.current
            ?.force('charge', d3.forceManyBody().strength(2))
            .force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))
            ?.force(
                'collide',
                d3
                    .forceCollide()
                    .strength(0.3)
                    .radius(d => {
                        return getDiameter(dataDimensions, d as D3CollectionItem)
                    })
            )

        if (!nodesListener.current) {
            nodesListener.current = simulation.current
                ?.nodes([...collisionData, ...data] as D3CollectionItem[])
                .on('tick', () => {
                    ticked(dataDimensions, nodeForeign, collisionObject, dimensions)
                })
        }

        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, svgRef, simulation, dimensions])
}

function getDataDimension(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
    return dataDimensions?.find(item => item.id === getId(d))
}

function getTakeSpaceFromDataDimensions(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
    const val = getDataDimension(dataDimensions, d)

    if (!val) {
        return collision
    }

    return val?.takeSpace / 4
}

function ticked(
    dataDimensions: DataDimension[],
    nodeForeign: d3.Selection<d3.BaseType, Partial<D3CollectionItem>, SVGSVGElement | null, unknown>,
    collisionObject: d3.Selection<d3.BaseType, Partial<D3CollisionData>, SVGSVGElement | null, unknown>,
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
        .attr('x', d => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', d => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))

    nodeForeign
        .transition()
        .duration(110)
        .attr('width', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('opacity', 1)

    collisionObject
        .attr('x', d => {
            d.x = width / 2
            d.y = height / 2
            return (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d)
        })
        .attr('y', d => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))

    collisionObject
        .attr('width', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('opacity', 1)
}

function getDiameter(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
    if (d?.id === 'collision') {
        return collision
    }

    const dataDimension = getDataDimension(dataDimensions, d)
    return getTakeSpaceFromDataDimensions(dataDimensions, d) * (dataDimension?.randomMultiplier ?? 0)
}
