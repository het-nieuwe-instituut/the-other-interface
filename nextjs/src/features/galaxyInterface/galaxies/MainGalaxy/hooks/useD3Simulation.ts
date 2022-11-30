import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import { State } from '@/features/shared/configs/store'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { D3CollectionItem, DataDimensions, initializeD3 } from '../d3/simulation'
import { CloudItem } from '../types'

interface Props {
    svgRef: MutableRefObject<SVGSVGElement | null>
    data: CloudItem[]
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
    const activeZoom = useSelector((state: State) => state.galaxyInterface.activeZoom)
    const { data, dataDimensions, galaxyBase, simulation, svgRef, selector } = options
    const nodesListener = useRef<d3.Simulation<D3CollectionItem, undefined> | undefined | null>(null)

    useEffect(() => {
        const d3Svg = d3.select(svgRef.current)
        const nodes = d3Svg.selectAll(`.${selector}`)?.data(data)

        if (!nodesListener.current) {
            nodesListener.current = initializeD3({
                simulation: simulation.current,
                data,
                nodes,
                dataDimensions,
                galaxyBase,
                duration: ZoomStates.Zoom0 === activeZoom ? 100 : 0,
            })
        }

        return () => {
            nodesListener.current = null
        }
    }, [data, dataDimensions, selector, galaxyBase, svgRef, simulation, activeZoom])
}
