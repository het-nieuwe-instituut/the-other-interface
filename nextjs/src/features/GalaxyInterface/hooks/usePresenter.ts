import * as d3 from 'd3'
import { BaseType, SimulationNodeDatum } from 'd3'
import { useEffect, useMemo, useRef, useState } from 'react'

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
export interface ObjectPerType {
    class: string
    numberOfInstances: string
    xFromCenter: number
    yFromCenter: number
}

export enum ZoomLevel {
    Zoom0 = 'zoom0',
    Zoom1 = 'Zoom1',
}

function useD3Simulation(
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],
    selector: string,
    dataDimensions: DataDimensions[]
) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<D3CollectionItem, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)
    const dimensionsRef = useRef<Dimensions>(dimensions)
    const resized = useRef<boolean>(false)
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.Zoom0)

    useEffect(() => {
        if (zoomLevel === ZoomLevel.Zoom0) {
            zoomout()
        }
        if (zoomLevel === ZoomLevel.Zoom1) {
            zoomin()
        }
    }, [zoomLevel])

    useEffect(() => {
        if (dimensionsRef.current.height !== dimensions.height || dimensionsRef.current.width !== dimensions.width) {
            resized.current = true
        }
    }, [dimensions.height, dimensions.width])

    useEffect(() => {
        if (!simulation.current) {
            simulation.current = d3
                .forceSimulation<D3CollectionItem>()
                .force('charge', d3.forceManyBody().strength(0.1))
                .force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))
        }

        return () => {
            nodesListener.current = null
            initialized.current = false
            simulation.current?.stop()
            simulation.current = null
        }
    }, [dimensions.height, dimensions.width])

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)
        simulation.current?.restart()

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions, nodeForeign)
                adjustPostion(resized.current, simulation.current, dimensions, dataDimensions)
            })
        }
    }, [data, dataDimensions, dimensions, selector])

    function zoomin() {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(1500)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 1 + ')translate(' + 0 + ',' + 0 + ')')
    }

    function zoomout() {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(0)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 0.3 + ')translate(' + 0 + ',' + 0 + ')')
    }

    return {
        zoomLevel,
        setZoomLevel,
        svgRef,
        simulation,
    }
}

function useD3FitDataToDimensions(dimensions: Dimensions, data: ObjectPerTypeWithName[]) {
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

function getFromCalulatedData(dataDimensions: DataDimensions[], d: Partial<D3CollectionItem>) {
    const val = dataDimensions?.find(item => item.name === d.name)

    if (!val) {
        return 0
    }

    return val?.takeSpace / 6
}

function ticked(
    dataDimensions: DataDimensions[],
    nodeForeign: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>
) {
    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getFromCalulatedData(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getFromCalulatedData(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getFromCalulatedData(dataDimensions, d) * 2)
}

function adjustPostion(
    initialized: boolean,
    simulation: d3.Simulation<D3CollectionItem, undefined> | null,
    dimensions: Dimensions,
    dataDimensions: DataDimensions[]
) {
    const height = dimensions.height ?? 0
    const width = dimensions.width ?? 0
    const squareSide: number = height > width ? width : height
    const halfWidth = (width ?? 0) / 2
    const halfHeight = (height ?? 0) / 2

    simulation?.nodes().forEach(d => {
        d3.select<BaseType, D3CollectionItem>(`#${d.name}`)
            .transition()
            .duration(initialized ? 0 : 100)
            .attr('x', d => {
                const base = 800 / 100
                const multiplier = squareSide / base / 100
                const x = multiplier * (d.xFromCenter ?? 0)

                console.log()

                return halfWidth + x - getFromCalulatedData(dataDimensions, d)
            })
            .attr('y', d => {
                const base = 800 / 100
                const multiplier = squareSide / base / 100
                const y = multiplier * (d.yFromCenter ?? 0)

                return halfHeight - y - getFromCalulatedData(dataDimensions, d)
            })
    })
}

export function usePresenter(dimensions: Dimensions, data: ObjectPerTypeWithName[], selector: string) {
    const dataDimensions = useD3FitDataToDimensions(dimensions, data)
    const { svgRef, setZoomLevel, zoomLevel } = useD3Simulation(dimensions, data, selector, dataDimensions)

    return {
        svgRef,
        dataDimensions,
        setZoomLevel,
        zoomLevel,
    }
}
