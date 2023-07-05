import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'

import { DataDimension } from '../../../../galaxy/hooks/useFitToDataToDimensions'
import { Dimensions } from '../../../../galaxy/types/galaxy'
import { FilterCloudItem } from '../types'

export interface D3CollectionItem extends SimulationNodeDatum, FilterCloudItem {}

interface Options {
  simulation: d3.Simulation<D3CollectionItem, undefined> | null
  dataDimensions: DataDimension[]
  dimensions: Dimensions
  data: FilterCloudItem[]
  nodes: d3.Selection<d3.BaseType, D3CollectionItem, SVGSVGElement | null, unknown>
  duration?: number
}

export function initializeD3AnimateOpacity(
  nodes: d3.Selection<d3.BaseType, D3CollectionItem, SVGSVGElement | null, unknown>
) {
  nodes.attr('opacity', 0).style('transform', 'scale(0)')
  nodes.style('transform-origin', 'center')
  nodes.transition().duration(600).style('transform', 'scale(1)').attr('opacity', 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}

export function initializeD3(options: Options) {
  const { simulation, nodes, dataDimensions, dimensions, data } = options
  nodes
    .attr('width', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)
    .attr('height', (d: D3CollectionItem) => getTakeSpaceFromDataDimensions(dataDimensions, d) * 2)

  simulation
    ?.force('charge', d3.forceManyBody().strength(1))
    .force('center', d3.forceCenter((dimensions.width ?? 0) / 2, (dimensions.height ?? 0) / 2))

  return simulation?.nodes(data as D3CollectionItem[]).on('tick', () => {
    ticked(dataDimensions, simulation, nodes, dimensions)
  })
}

function getDataDimension(dataDimensions: DataDimension[], d: Partial<D3CollectionItem>) {
  return dataDimensions?.find(item => item.id === d.name)
}

export function getTakeSpaceFromDataDimensions(
  dataDimensions: DataDimension[],
  d: Partial<D3CollectionItem>
) {
  const val = getDataDimension(dataDimensions, d)

  if (!val) {
    return 0
  }

  return val?.takeSpace / 6
}

function ticked(
  dataDimensions: DataDimension[],
  simulation: d3.Simulation<D3CollectionItem, undefined> | null,
  nodeForeign: d3.Selection<d3.BaseType, D3CollectionItem, d3.BaseType, unknown>,
  dimensions: Dimensions
) {
  const width = dimensions.width ?? 0
  const height = dimensions.height ?? 0

  // bounding box
  nodeForeign
    .attr('cx', d => {
      const diameter = getDiameter(dataDimensions, d)
      return (d.x = Math.max(diameter, Math.min(width - diameter, d.x ?? 0)))
    })
    .attr('cy', d => {
      const diameter = getDiameter(dataDimensions, d)
      return (d.y = Math.max(diameter, Math.min(height - diameter, d.y ?? 0)))
    })

  nodeForeign
    .attr(
      'x',
      (d: D3CollectionItem) => (d.x ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d)
    )
    .attr(
      'y',
      (d: D3CollectionItem) => (d.y ?? 0) + -getTakeSpaceFromDataDimensions(dataDimensions, d)
    )

  if (simulation) {
    simulation
      ?.force(
        'collide',
        d3
          .forceCollide()
          .strength(1)
          .radius(d => getDiameter(dataDimensions, d))
      )
      .force('centerX', d3.forceX(width / 2))
      .force('centerY', d3.forceY(height / 2))
  }
}

function getDiameter(dataDimensions: DataDimension[], d: d3.SimulationNodeDatum) {
  const dataDimension = getDataDimension(dataDimensions, d)
  return getTakeSpaceFromDataDimensions(dataDimensions, d) * (dataDimension?.randomMultiplier ?? 0)
}
