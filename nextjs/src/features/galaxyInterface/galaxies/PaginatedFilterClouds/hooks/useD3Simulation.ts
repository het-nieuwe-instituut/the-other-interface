import { DataDimension } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { fadeScaleInD3, initializeD3 } from '../d3/simulation'
import { Dimensions } from '../../../types/galaxy'
import { PaginatedCloudItem } from '../types'

const collisionData = [{ id: 'collision' }]
type CollisionData = typeof collisionData[0]

export type D3PaginatedCloudItem = SimulationNodeDatum & PaginatedCloudItem
export interface D3CollectionItem extends D3PaginatedCloudItem, CollisionData {}
export interface D3CollisionData extends SimulationNodeDatum, CollisionData {}

export function useD3Simulation(
    dimensions: Dimensions,
    data: Partial<D3CollectionItem>[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const { simulation } = useInitializeD3Simulation<D3CollectionItem>([dimensions])
    const svgRef = useRef<SVGSVGElement | null>(null)
    useListenToSimulationTicks(simulation, dimensions, svgRef, data, selector, dataDimensions)

    return {
        svgRef,
        simulation,
    }
}

function useListenToSimulationTicks(
    simulation: MutableRefObject<d3.Simulation<D3CollectionItem, undefined> | null>,
    dimensions: Dimensions,
    svgRef: MutableRefObject<SVGSVGElement | null>,
    data: Partial<D3CollectionItem>[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

    // set default styles
    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodes = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<D3CollectionItem>>(data)

        fadeScaleInD3(nodes)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodes = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<D3CollectionItem>>(data)
        const collisionObject = d3Svg.selectAll(`.foreign-collision`).data<Partial<D3CollisionData>>(collisionData)

        if (!nodesListener.current) {
            nodesListener.current = initializeD3({
                simulation: simulation.current,
                dataDimensions: dataDimensions,
                dimensions: dimensions,
                data,
                nodes,
                collisionObject,
            })
        }

        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, svgRef, simulation, dimensions])
}
