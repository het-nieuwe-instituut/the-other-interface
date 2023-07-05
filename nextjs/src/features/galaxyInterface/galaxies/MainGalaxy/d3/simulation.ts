import * as d3 from 'd3'
import { BaseType, SimulationNodeDatum } from 'd3'

import { CloudItem } from '../types'

export interface D3CollectionItem extends SimulationNodeDatum, CloudItem {}
export interface DataDimensions {
  id: string
  name: string
  takeSpace: number
}
interface Options {
  simulation: d3.Simulation<D3CollectionItem, undefined> | null
  dataDimensions: DataDimensions[]
  galaxyBase: number
  data: CloudItem[]
  nodes: d3.Selection<d3.BaseType, CloudItem, SVGSVGElement | null, unknown>
  duration?: number
}

export function initializeD3(options: Options) {
  const { simulation, dataDimensions, galaxyBase, nodes, data, duration } = options
  simulation
    ?.force('charge', d3.forceManyBody().strength(0.1))
    .force('center', d3.forceCenter((galaxyBase ?? 0) / 2, (galaxyBase ?? 0) / 2))

  return simulation?.nodes(data as D3CollectionItem[]).on('tick', () => {
    ticked(dataDimensions, nodes)
    adjustPostion(simulation, dataDimensions, galaxyBase, duration)
  })
}

function getTakeSpaceFromDataDimensions(
  dataDimensions: DataDimensions[],
  d: Partial<D3CollectionItem>
) {
  const val = dataDimensions?.find(item => item.id === d.id)

  if (!val) {
    return 0
  }

  return val?.takeSpace / 6
}

function ticked(
  dataDimensions: DataDimensions[],
  nodeForeign: d3.Selection<d3.BaseType, CloudItem, d3.BaseType, unknown>
) {
  nodeForeign
    .attr(
      'x',
      (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d)
    )
    .attr(
      'y',
      (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d)
    )
    .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
    .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
}

function adjustPostion(
  simulation: d3.Simulation<D3CollectionItem, undefined> | null,
  dataDimensions: DataDimensions[],
  galaxyBase: number,
  duration?: number
) {
  const halfWidth = (galaxyBase ?? 0) / 2
  const halfHeight = (galaxyBase ?? 0) / 2

  simulation?.nodes().forEach(d => {
    d3.select<BaseType, D3CollectionItem>(`#${d.id}`)
      .transition()
      .duration(duration ?? 100)
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
