import * as d3 from 'd3'
import { BaseType, SimulationNodeDatum } from 'd3'
import { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getStoriesSystemDimensions } from './Galaxy'

export interface Dimensions {
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

function useD3Simulation(
    svgRef: MutableRefObject<SVGSVGElement | null>,
    dimensions: Dimensions,
    data: ObjectPerTypeWithName[],
    selector: string,
    dataDimensions: DataDimensions[],
    squareSideSize: number
) {
    const initialized = useRef(false)
    const simulation = useRef<d3.Simulation<D3CollectionItem, undefined> | null>(null)
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)
    const dimensionsRef = useRef<Dimensions>(dimensions)
    const resized = useRef<boolean>(false)

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
                .force('center', d3.forceCenter((squareSideSize ?? 0) / 2, (squareSideSize ?? 0) / 2))
        }

        return () => {
            nodesListener.current = null
            initialized.current = false
            simulation.current?.stop()
            simulation.current = null
        }
    }, [squareSideSize])

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        if (!nodesListener.current) {
            nodesListener.current = simulation.current?.nodes(data as D3CollectionItem[]).on('tick', () => {
                ticked(dataDimensions, nodeForeign)
                adjustPostion(resized.current, simulation.current, dataDimensions, squareSideSize)
            })
        }
    }, [data, dataDimensions, selector, squareSideSize, svgRef])

    return {
        simulation,
    }
}

export enum ZoomLevel {
    Zoom0 = 'zoom0',
    Zoom1 = 'Zoom1',
    Zoom1Stories = 'ZoomStories',
}

function useZoomEvents(svgRef: MutableRefObject<SVGSVGElement | null>, dimensions: Dimensions) {
    const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.Zoom0)

    const zoom1stories = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        const d3Stories = d3.select(storiesSystemRef.current)

        const stories = getStoriesSystemDimensions(dimensions)
        const nodeForeign = d3Svg.select(`.circles`)

        d3Stories
            .transition()
            .duration(1500)
            .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)

        nodeForeign
            .transition()
            .duration(1500)
            .attr('transform', `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`)
    }, [dimensions, svgRef])

    const zoom1 = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(1500)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 1 + ')translate(' + 0 + ',' + 0 + ')')
    }, [svgRef])

    const zoomout = useCallback(() => {
        const d3Svg = d3.select(svgRef.current)

        d3Svg
            .transition()
            .duration(0)
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')scale(' + 0.3 + ')translate(' + 0 + ',' + 0 + ')')
    }, [svgRef])

    useEffect(() => {
        if (zoomLevel === ZoomLevel.Zoom0) {
            zoomout()
        }
        if (zoomLevel === ZoomLevel.Zoom1) {
            zoom1()
        }
        if (zoomLevel === ZoomLevel.Zoom1Stories) {
            zoom1stories()
        }
    }, [zoom1, zoom1stories, zoomLevel, zoomout])

    return {
        setZoomLevel,
        zoomLevel,
        storiesSystemRef,
    }
}

function useD3FitDataToDimensions(squareSideSize: number, data: ObjectPerTypeWithName[]) {
    const dataDimensions: DataDimensions[] = useMemo(() => {
        const totalSpace = squareSideSize * squareSideSize
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
    }, [squareSideSize, data])

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
    nodeForeign: d3.Selection<d3.BaseType, ObjectPerTypeWithName, d3.BaseType, unknown>
) {
    nodeForeign
        .attr('x', (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('y', (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d))
        .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
        .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
}

function adjustPostion(
    initialized: boolean,
    simulation: d3.Simulation<D3CollectionItem, undefined> | null,
    dataDimensions: DataDimensions[],
    squareSideSize: number
) {
    const halfWidth = (squareSideSize ?? 0) / 2
    const halfHeight = (squareSideSize ?? 0) / 2

    simulation?.nodes().forEach(d => {
        d3.select<BaseType, D3CollectionItem>(`#${d.name}`)
            .transition()
            .duration(initialized ? 0 : 100)
            .attr('x', d => {
                const x = d.xFromCenter ?? 0

                return halfWidth + x - getTakeSpaceFromDataDimensions(dataDimensions, d)
            })
            .attr('y', d => {
                const y = d.yFromCenter ?? 0

                return halfHeight - y - getTakeSpaceFromDataDimensions(dataDimensions, d)
            })
    })
}

export function usePresenter(dimensions: Dimensions, data: ObjectPerTypeWithName[], selector: string) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const squareSideSize = dimensions.height ?? 0
    const dataDimensions = useD3FitDataToDimensions(squareSideSize, data)
    useD3Simulation(svgRef, dimensions, data, selector, dataDimensions, squareSideSize)
    const zoomEvents = useZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
    }
}
