import { DataDimension } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { Dimensions } from '@/features/galaxyInterface/types/galaxy'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { CollisionData } from '../hooks/useD3Simulation'
import { PaginatedCloudItem } from '../types'
import { getId } from '../usePresenter'

const collision = 120

export type D3PaginatedCloudItem = SimulationNodeDatum & PaginatedCloudItem
export interface D3CollectionItem extends D3PaginatedCloudItem, CollisionData {}
export interface D3CollisionData extends SimulationNodeDatum {
    id?: string
}

export function fadeScaleInD3(nodes: d3.Selection<d3.BaseType, D3PaginatedCloudItem, SVGSVGElement | null, unknown>) {
    nodes.style('transform', 'scale(0)').attr('opacity', 0)
    nodes.style('transform-origin', 'center')
    nodes.transition().duration(600).style('transform', 'scale(1)').attr('opacity', 1)
}

interface Options {
    simulation: d3.Simulation<D3CollectionItem, undefined> | null
    dataDimensions: DataDimension[]
    dimensions: Dimensions
    data: D3PaginatedCloudItem[]
    nodes: d3.Selection<d3.BaseType, D3PaginatedCloudItem, SVGSVGElement | null, unknown>
    collisionObject: d3.Selection<d3.BaseType, Partial<D3CollisionData>, SVGSVGElement | null, unknown>
}

export function initializeD3(options: Options) {
    const { simulation, dataDimensions, dimensions, collisionObject, nodes, data } = options
    const width = dimensions.width
    const height = dimensions.height

    nodes
        .attr('x', d => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', d => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('width', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)

    simulation
        ?.force('centerX', d3.forceX(width / 2).strength(0.01))
        .force('centerY', d3.forceY(height / 2).strength(0.01))
        .force(
            'collide',
            d3
                .forceCollide()
                .strength(0.3)
                .radius(d => {
                    return getDiameter(dataDimensions, d as D3CollectionItem)
                })
        )

    return simulation?.nodes(data as D3CollectionItem[]).on('tick', () => {
        simulation?.force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))
        ticked(dataDimensions, nodes, collisionObject, dimensions)
    })
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

    nodeForeign
        .attr('x', d => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', d => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('width', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', d => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)

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
