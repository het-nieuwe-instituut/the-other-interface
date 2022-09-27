import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useEffect, useMemo, useReducer, useRef } from 'react'
import { ObjectPerType } from 'src/pages/poc/galaxy'

interface Dimensions {
    height?: number | null
    width?: number | null
}

interface ObjectPerTypeWithName extends ObjectPerType {
    name: string
}

export interface Order {
    id: string
    order: number
    fixedDiameter?: number
}

interface D3CollectionItem extends SimulationNodeDatum, ObjectPerTypeWithName {}
interface DataDimensions {
    name: string
    takeSpace: number
}

function useD3Simulation(
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],
    selector: string,
    dataDimensions: DataDimensions[]
) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [,] = useReducer(x => x + 1, 0)
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const dimensionsRef = useRef<Dimensions>(dimensions)

    useEffect(() => {
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
                ticked(dataDimensions, simulation.current, node, nodeForeign, dimensionsRef.current)
            })
        }

        return () => {
            nodesListener.current = null
            initialized.current = false
            simulation.current?.stop()
            simulation.current = null
        }
    }, [data, dimensions, dataDimensions, selector])

    return {
        svgRef,
    }
}

function useD3FitDataToDimensions(
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],

    orders?: Order[]
) {
    const dataDimensions: DataDimensions[] = useMemo(() => {
        const totalSpace = (dimensions.height ?? 0) * (dimensions.width ?? 0)
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data.reduce((total, item) => total + parseInt(item.numberOfInstances), 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects

        return data.map(item => {
            const connectedOrder = orders?.find(order => order.id === item.name)
            return {
                name: item.name,
                takeSpace: connectedOrder?.fixedDiameter ?? totalOccupiedGridItems * parseInt(item.numberOfInstances),
            }
        })
    }, [dimensions, data, orders])

    return dataDimensions
}

function getFromCalulatedData(dataDimensions: DataDimensions[], d: Partial<D3CollectionItem>) {
    const val = dataDimensions?.find(item => item.name === d.name)

    if (!val) {
        return 0
    }

    return val?.takeSpace / 8
}

function ticked(
    dataDimensions: DataDimensions[],
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined> | null,
    node: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>,
    nodeForeign: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>,
    dimensions: Dimensions
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

    if (simulation) {
        simulation
            .force(
                'collide',
                d3
                    .forceCollide()
                    .strength(0.5)
                    .radius(d => getFromCalulatedData(dataDimensions, d))
            )
            .force('centerX', d3.forceX(width / 2))
            .force('centerY', d3.forceY(height / 2))
    }
}

export function usePresenter(
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],
    selector: string,
    orders?: Order[]
) {
    const dataDimensions = useD3FitDataToDimensions(dimensions, data, orders)
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)

    return {
        svgRef,
        dataDimensions,
    }
}
