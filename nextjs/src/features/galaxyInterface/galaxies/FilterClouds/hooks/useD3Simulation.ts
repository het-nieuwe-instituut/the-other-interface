import { DataDimension } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { Dimensions } from '@/features/galaxy/types/galaxy'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { D3CollectionItem, initializeD3 } from '../d3/simulation'
import { FilterCloudItem } from '../types'

export function useD3Simulation(
    dimensions: Dimensions,
    data: FilterCloudItem[],
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
    data: FilterCloudItem[],
    selector: string,
    dataDimensions: DataDimension[]
) {
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)
    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodeForeign = d3Svg.selectAll(`.foreign-${selector}`).data(data)

        if (!nodesListener.current) {
            nodesListener.current = initializeD3({
                simulation: simulation.current,
                dimensions,
                dataDimensions: dataDimensions,
                data: data,
                nodes: nodeForeign,
                duration: 1500,
            })
        }

        return () => {
            nodesListener.current = null
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, dataDimensions, selector, svgRef, simulation])
}
