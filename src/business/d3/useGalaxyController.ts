import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useLayoutEffect, useRef } from 'react'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export interface CollectionItem {
    name: string
    children: CollectionItem[]
}

interface D3CollectionItem extends SimulationNodeDatum, CollectionItem {}

export function useGalaxyController(dimensions: Dimensions, data: CollectionItem[]) {
    const svgRef = useRef(null)
    const gRef = useRef(null)
    const initialized = useRef(false)

    useLayoutEffect(() => {
        if (!svgRef.current) {
            return
        }
        if (initialized.current) {
            return
        }
        initialized.current = true
        const width = dimensions.width ?? 0
        const height = dimensions.height ?? 0
        console.log(width, height)

        const multiplier = 4

        const simulation = d3.forceSimulation().force(
            'center',
            d3
                .forceCenter()
                .x(width / 2)
                .y(height / 2)
        )

        const d3Svg = d3.select(svgRef.current)
        const node = d3Svg.selectAll('circle').data(data)
        const nodeForeign = d3Svg.selectAll('foreignObject').data(data)

        simulation.nodes(data as D3CollectionItem[]).on('tick', () => {
            ticked(multiplier, simulation, node, nodeForeign)
        })
    }, [svgRef.current])

    return {
        svgRef,
        gRef,
    }
}

function ticked(
    multiplier: number,
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    node: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>
) {
    console.log(multiplier)
    node.attr('cx', (d: D3CollectionItem) => d.x ?? 0)
        .attr('cy', (d: D3CollectionItem) => d.y ?? 0)
        .attr('height', (d: D3CollectionItem) => d.children.length * multiplier)
        .attr('width', (d: D3CollectionItem) => d.children.length * multiplier)
        .attr('r', (d: D3CollectionItem) => d.children.length * multiplier)

    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) - d.children.length * multiplier)
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) - d.children.length * multiplier)
        .attr('width', (d: D3CollectionItem) => d.children.length * multiplier * 2)
        .attr('height', (d: D3CollectionItem) => d.children.length * multiplier * 2)

    simulation.force(
        'collide',
        d3
            .forceCollide()
            .strength(0.1)
            .radius((d: any) => (d as D3CollectionItem).children.length * multiplier)
            .iterations(1)
    )
}
