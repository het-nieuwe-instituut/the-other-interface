import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useEffect, useLayoutEffect, useMemo, useReducer, useRef } from 'react'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export interface CollectionItem {
    name: string
    children: CollectionItem[]
}

interface D3CollectionItem extends SimulationNodeDatum, CollectionItem {}

export function useGalaxyController(dimensions: Dimensions, data: CollectionItem[], selector: string) {
    const svgRef = useRef(null)
    const [, forceRerender] = useReducer(x => x + 1, 0)
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)

    const dataDimensions = useMemo(() => {
        const totalSpace = dimensions.height ?? 0 * (dimensions.width ?? 0)
        const totalObjects = data.reduce((total, item) => total + item.children.length, 0)
        const singleSpace = totalSpace / totalObjects

        return data.map(item => {
            return {
                name: item.name,
                takeSpace: item.children.length * singleSpace,
            }
        })
    }, [dimensions, data])

    useEffect(() => {
        nodesListener.current = null
        initialized.current = true
        const width = dimensions.width ?? 0
        const height = dimensions.height ?? 0

        simulation.current = d3.forceSimulation()

        simulation.current.force(
            'center',
            d3
                .forceCenter()
                .x(width / 2)
                .y(height / 2)
        )
        const d3Svg = d3.select(svgRef.current)
        const node = d3Svg.selectAll(`.${selector}`).data(data)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
            ticked(dataDimensions, simulation.current!, node, nodeForeign)
        })
    }, [svgRef.current, data, dimensions, dataDimensions])

    useEffect(() => {
        if (!svgRef.current) {
            return
        }
        if (initialized.current) {
            return
        }

        initialized.current = true
        simulation.current = d3.forceSimulation()

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

    return val?.takeSpace / 2
}

function ticked(
    dataDimensions: any[],
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>,
    node: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, CollectionItem, d3.BaseType, unknown>
) {
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

    simulation.force(
        'collide',
        d3
            .forceCollide()
            .strength(0.1)
            .radius((d: any) => getFromCalulatedData(dataDimensions, d))
            .iterations(1)
    )
}
