import { useController } from './Galaxy.controller'
import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { background, Button } from '@chakra-ui/react'
import { Circle } from '../core/Circle'

interface Dimensions {
    height?: number | null
    width?: number | null
}

interface CollectionItem {
    name: string
    children: string[]
}

interface D3CollectionItem extends SimulationNodeDatum, CollectionItem {}

interface Props {
    data: CollectionItem[]
    dimensions: {
        height: number
        width: number
        margin?: {
            left: number
            right: number
            top: number
            bottom: number
        }
    }
}

function useGalaxyController(dimensions: Dimensions, data: CollectionItem[]) {
    const svgRef = useRef(null)
    const gRef = useRef(null)
    const initialized = useRef(false)

    useLayoutEffect(() => {
        if (!svgRef.current) {
            return
        }
        initialized.current = true
        const width = dimensions.width ?? 0
        const height = dimensions.height ?? 0

        console.log(dimensions)

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
            console.log(data)
            ticked(simulation, node, nodeForeign)
        })
    }, [svgRef.current])

    return {
        svgRef,
        gRef,
    }
}

function ticked(
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    node: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>
) {
    let radius = 100

    node.attr('cx', (d: D3CollectionItem) => d.x ?? 0)
        .attr('cy', (d: D3CollectionItem) => d.y ?? 0)
        .attr('r', (d: D3CollectionItem) => {
            return radius
        })
    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) - radius)
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) - radius)
        .attr('width', (d: D3CollectionItem) => radius * 2)
        .attr('height', (d: D3CollectionItem) => radius * 2)

    simulation.force('collide', d3.forceCollide().strength(0.1).radius(100).iterations(1)) // Force that avoids circle overlapping
}

export const Galaxy: React.FC<Props> = ({ data = [], dimensions }) => {
    const { width, height, margin } = dimensions
    const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
    const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
    const { svgRef } = useGalaxyController(dimensions, data)

    return (
        <svg width={svgWidth} height={svgHeight} style={{ background: 'red' }} ref={svgRef}>
            {data.map(item => (
                <Circle key={item.name}>
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            background: 'blue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <button>button</button>
                    </div>
                </Circle>
            ))}
        </svg>
    )
}
