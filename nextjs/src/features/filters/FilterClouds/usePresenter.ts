import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { useEffect, useMemo, useRef } from 'react'
import { ObjectPerType } from 'src/pages/poc/galaxy'

interface Dimensions {
    height?: number | null
    width?: number | null
}

interface ObjectPerTypeWithName extends ObjectPerType {
    name: string
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
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null)
    const dimensionsRef = useRef<Dimensions>(dimensions)

    useEffect(() => {
        if (!svgRef.current) {
            return
        }

        if (!simulation.current) {
            simulation.current = d3
                .forceSimulation()
                .force('charge', d3.forceManyBody().strength(0.1))
                .force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))
        }

        dimensionsRef.current = dimensions

        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions, simulation.current, nodeForeign, dimensionsRef.current)
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
        simulation,
    }
}

function useCalculateDataDimensions(dimensions: Dimensions, data: ObjectPerTypeWithName[]) {
    const dataDimensions: DataDimensions[] = useMemo(() => {
        const height = dimensions.height ?? 0
        const width = dimensions.width ?? 0
        const squareSide: number = height > width ? width : height

        const totalSpace = squareSide * squareSide
        const gridItemSpace = 12
        const totalSpaceGrid = totalSpace / (gridItemSpace * gridItemSpace)

        const totalObjects = data.reduce((total, item) => total + parseInt(item.numberOfInstances), 0)
        const totalOccupiedGridItems = totalSpaceGrid / totalObjects

        return data.map(item => {
            return {
                name: item.name,
                takeSpace: totalOccupiedGridItems * parseInt(item.numberOfInstances),
            }
        })
    }, [dimensions, data])

    return dataDimensions
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
    simulation: d3.Simulation<d3.SimulationNodeDatum, undefined> | null,
    nodeForeign: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>,
    dimensions: Dimensions
) {
    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0

    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)

    if (simulation) {
        simulation
            .force(
                'collide',
                d3
                    .forceCollide()
                    .strength(0.1)
                    .radius(d => getTakeSpaceFromDataDimensions(dataDimensions, d))
            )
            .force('centerX', d3.forceX(width / 2))
            .force('centerY', d3.forceY(height / 2))
    }
}

export function usePresenter(dimensions: Dimensions, data: ObjectPerTypeWithName[], selector: string) {
    const dataDimensions = useCalculateDataDimensions(dimensions, data)
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)

    return {
        svgRef,
        dataDimensions,
    }
}
