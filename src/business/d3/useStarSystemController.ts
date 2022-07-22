import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useLayoutEffect, useMemo, useRef } from 'react'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export interface CollectionItem {
    name: string
    children: CollectionItem[]
}

interface D3CollectionItem extends SimulationNodeDatum, CollectionItem {}

export function useStarSystemController(dimensions: Dimensions, data: CollectionItem[], selector: string) {
    const svgRef = useRef(null)
    const gRef = useRef(null)
    const initialized = useRef(false)

    const dataDimensions = useMemo(() => {
        const totalSpace = dimensions.height ?? 0 * (dimensions.width ?? 0)
        const totalObjects = data.reduce((total, item) => total + item.children.length, 0)
        const singleSpace = totalSpace / totalObjects

        return data.map(item => ({
            name: item.name,
            takeSpace: item.children.length * singleSpace,
        }))
    }, [data])

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

        const simulation = d3.forceSimulation().force(
            'center',
            d3
                .forceCenter()
                .x(width / 2)
                .y(height / 2)
        )

        const d3Svg = d3.select(svgRef.current)
        const node = d3Svg.selectAll(`.${selector}`).data(data)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        simulation.nodes(data as D3CollectionItem[]).on('tick', () => {
            ticked(dataDimensions, simulation, node, nodeForeign)
        })

        return () => {
            initialized.current = false
            simulation.stop()
        }
    }, [svgRef.current, dataDimensions])

    return {
        svgRef,
        gRef,
        dataDimensions,
    }
}

function getFromCalulatedData(dataDimensions: any[], d: D3CollectionItem) {
    const val = dataDimensions?.find(item => item.name === d.name)
    return val.takeSpace
}

function getDiameterFromDataDimensions(dataDimensions: any[], d: D3CollectionItem) {
    const val = dataDimensions?.find(item => item.name === d.name)
    return val.takeSpace / 2
}

function ticked(
    dataDimensions: any[],
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    node: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>
) {
    node.attr('cx', (d: D3CollectionItem) => d.x ?? 0)
        .attr('cy', (d: D3CollectionItem) => d.y ?? 0)
        .attr('r', (d: D3CollectionItem) => getDiameterFromDataDimensions(dataDimensions, d))

    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) - getDiameterFromDataDimensions(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) - getDiameterFromDataDimensions(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d))
        .attr('height', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d))

    simulation.force(
        'collide',
        d3
            .forceCollide()
            .strength(0.1)
            .radius((d: any) => getDiameterFromDataDimensions(dataDimensions, d))
    )
}
