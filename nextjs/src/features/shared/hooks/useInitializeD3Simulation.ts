import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useInitializeD3Simulation<D3CollectionItem extends SimulationNodeDatum>(deps?: any[]) {
    const simulation = useRef<d3.Simulation<D3CollectionItem, undefined> | null>(null)

    useEffect(() => {
        // if (!simulation.current) {
        simulation.current = d3.forceSimulation<D3CollectionItem>()
        // }

        return () => {
            simulation.current?.stop()
            simulation.current = null
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ?? [])

    return {
        simulation,
    }
}
