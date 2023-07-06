import { DataDimension } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useInitializeD3Simulation } from '@/features/shared/hooks/useInitializeD3Simulation'
import * as d3 from 'd3'
import { MutableRefObject, useEffect, useRef } from 'react'

import { Dimensions } from '../../../types/galaxy'
import { D3CollectionItem, D3CollisionData, initializeD3 } from '../d3/simulation'

const collisionData = [{ id: 'collision' }]
export type CollisionData = typeof collisionData[0]

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

  useEffect(() => {
    if (!data) return
    const d3Svg = d3.select(svgRef.current)
    const nodes = d3Svg.selectAll(`.foreign-${selector}`).data<Partial<D3CollectionItem>>(data)
    const collisionObject = d3Svg
      .selectAll(`.foreign-collision`)
      .data<Partial<D3CollisionData>>([...collisionData, ...data])

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
