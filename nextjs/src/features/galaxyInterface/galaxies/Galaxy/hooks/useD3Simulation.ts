import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { D3CollectionItem, initializeD3, ObjectPerTypeWithName } from '../d3/simulation'
import { DataDimensions } from './useFitDataToDimensions'

interface Props {
    svgRef: MutableRefObject<SVGSVGElement | null>
    data: ObjectPerTypeWithName[]
    selector: string
    dataDimensions: DataDimensions[]
    galaxyBase: number
}

export function useD3Simulation(options: Props) {
    const { simulation } = useInitializeD3Simulation<D3CollectionItem>()
    useListenToSimulationTicks({ ...options, simulation })

    return {
        simulation,
    }
}

function useListenToSimulationTicks(
    options: Props & {
        simulation: ReturnType<NonNullable<typeof useInitializeD3Simulation<D3CollectionItem>>>['simulation']
    }
) {
    const { data, dataDimensions, galaxyBase, simulation, svgRef, selector } = options
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

    useEffect(() => {
        if (!data) return
        const d3Svg = d3.select(svgRef.current)
        const nodes = d3Svg.selectAll(`.foreign-${selector}`)?.data(data)

        nodesListener.current = initializeD3({
            simulation: simulation.current,
            data,
            nodes,
            dataDimensions,
            galaxyBase,
        })

        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, galaxyBase, svgRef, simulation])
}
