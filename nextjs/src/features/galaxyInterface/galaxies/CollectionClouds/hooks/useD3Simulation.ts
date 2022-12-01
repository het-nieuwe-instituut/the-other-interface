import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import { SimulationNodeDatum } from 'd3'
import { useRef } from 'react'
import { Dimensions } from '../../../types/galaxy'

export function useD3Simulation(dimensions: Dimensions) {
    const { simulation } = useInitializeD3Simulation<SimulationNodeDatum>([dimensions])
    const svgRef = useRef<SVGSVGElement | null>(null)

    return {
        svgRef,
        simulation,
    }
}
