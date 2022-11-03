/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useEffect, useMemo, useRef } from 'react'
import { Order } from '../../Galaxy/GalaxyUpdates'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export interface CollectionItem {
    name: string
    children: CollectionItem[]
}

interface D3CollectionItem extends SimulationNodeDatum, CollectionItem {}

export function useGalaxyController(
    dimensions: Dimensions,
    data: CollectionItem[] | undefined,
    selector: string,
    orders?: Order[]
) {
    const svgRef = useRef(null)
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const dimensionsRef = useRef<Dimensions>(dimensions)

    const dataDimensions = useMemo(() => {
        if (!data || !dimensions.width) return
        const totalSpace = (dimensions.height ?? 0) * (dimensions.width ?? 0)
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data.reduce((total, item) => total + item.children.length, 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects

        return data.map(item => {
            const connectedOrder = orders?.find(order => order.id === item.name)
            return {
                name: item.name,
                takeSpace: connectedOrder?.fixedDiameter ?? totalOccupiedGridItems * item.children.length,
            }
        })
    }, [dimensions, data, orders])

    useEffect(() => {
        if (!data) return
        if (!svgRef.current) {
            return
        }

        if (!simulation.current) {
            simulation.current = d3.forceSimulation()
        }

        dimensionsRef.current = dimensions

        const d3Svg = d3.select(svgRef.current)
        const node = d3Svg.selectAll(`.${selector}`).data(data)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions || [], simulation.current!, node, nodeForeign, dimensionsRef.current)
            })
        }

        return () => {
            nodesListener.current = null
            initialized.current = false
            simulation.current?.stop()
            simulation.current = null
        }
    }, [svgRef.current, data, dimensions, dataDimensions])

    return {
        svgRef,
        dataDimensions,
    }
}

function getFromCalulatedData(dataDimensions: any[], d: D3CollectionItem) {
    const val = dataDimensions?.find(item => item.name === d.name)

    return val?.takeSpace / 8
}

function ticked(
    dataDimensions: any[],
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    node: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    dimensions: any
) {
    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0

    node.attr('cx', (d: D3CollectionItem) => d.x ?? 0)
        .attr('cy', (d: D3CollectionItem) => d.y ?? 0)
        .attr('height', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d))
        .attr('r', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d))

    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getFromCalulatedData(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getFromCalulatedData(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d) * 2)

    simulation
        .force(
            'collide',
            d3
                .forceCollide()
                .strength(0.5)
                .radius((d: any) => getFromCalulatedData(dataDimensions, d))
        )
        .force('centerX', d3.forceX(width / 2))
        .force('centerY', d3.forceY(height / 2))
}
