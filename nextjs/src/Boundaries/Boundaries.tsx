import * as d3 from 'd3'
import React, { useEffect, useId, useMemo, useRef } from 'react'
import { CollectionItem } from '../business/d3/useGalaxyController'
import { Tooltip } from '@chakra-ui/react'
import earcut from 'earcut'
import { times } from 'lodash'
import { InstancesPerClass } from '../pages/boundaries'

const points = [
    [100, 100],
    [400, 100],
    [600, 200],
    [700, 500],
    [500, 700],
    [200, 600],
    [100, 300],
    [100, 100],
]

/* https://en.wikipedia.org/wiki/Shoelace_formula */
export function getTriangleArea(triangle: [[number, number], [number, number], [number, number]]) {
    const [a, b, c] = triangle

    return 0.5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]))
}

function calcRandomPoint(triangle: [[number, number], [number, number], [number, number]]) {
    let wb = Math.random()
    let wc = Math.random()

    // point will be outside of the triangle, invert weights
    if (wb + wc > 1) {
        wb = 1 - wb
        wc = 1 - wc
    }

    const [a, b, c] = triangle.map(coords => ({ x: coords[0], y: coords[1] }))

    const rb_x = wb * (b.x - a.x)
    const rb_y = wb * (b.y - a.y)
    const rc_x = wc * (c.x - a.x)
    const rc_y = wc * (c.y - a.y)

    const r_x = rb_x + rc_x + a.x
    const r_y = rb_y + rc_y + a.y

    return [r_x, r_y]
}

function generateDistribution(triangles: [[number, number], [number, number], [number, number]][]) {
    const totalArea = triangles.reduce((sum, triangle) => sum + getTriangleArea(triangle), 0)
    const cumulativeDistribution: number[] = []

    for (let i = 0; i < triangles.length; i++) {
        const lastValue = cumulativeDistribution[i - 1] || 0
        const nextValue = lastValue + getTriangleArea(triangles[i]) / totalArea
        cumulativeDistribution.push(nextValue)
    }
    // [area1, area1 + aera2, area1 + area2 + area3, ...]
    return cumulativeDistribution
}

function selectRandomTriangle(triangles: [[number, number], [number, number], [number, number]][]) {
    const cumulativeDistribution = generateDistribution(triangles)
    const rnd = Math.random()
    const index = cumulativeDistribution.findIndex(v => v > rnd)

    return triangles[index]
}

interface InstancesPerClassWithPoint extends InstancesPerClass {
    point: number[]
}

function useBoundariesController(stories: InstancesPerClass[]) {
    const svgRef = useRef(null)
    const initialized = useRef(false)

    const triangles = useMemo(() => {
        const flatPoints = points.reduce((f, p) => [...f, ...p], [])
        const indices = earcut(flatPoints)

        const triangles: [[number, number], [number, number], [number, number]][] = []

        for (let i = 0; i < indices.length; i += 3) {
            const triangleIndices = [indices[i], indices[i + 1], indices[i + 2]]
            const points: [number, number][] = triangleIndices.map(index => {
                const x = flatPoints[index * 2]
                const y = flatPoints[index * 2 + 1]

                return [x, y]
            })

            triangles.push(points as any) // TODO do not shorcut on TS >:(
        }

        return triangles
    }, [points])

    const dataPoints = useMemo(
        () =>
            stories.map(story => {
                const triangle = selectRandomTriangle(triangles)
                return { ...story, point: calcRandomPoint(triangle) }
            }),
        [triangles]
    )

    useEffect(() => {
        if (!svgRef.current) {
            return
        }
        if (initialized.current) {
            return
        }
        initialized.current = true

        drawPathByParent(svgRef.current, dataPoints)

        return () => {
            initialized.current = false
        }
    }, [svgRef.current])

    return {
        svgRef,
        triangles,
        dataPoints,
    }
}



function drawPathByParent(
    svgRef: null,
    dataPoints: InstancesPerClassWithPoint[]
) {
    const d3Svg = d3.select(svgRef)

    // Add the line
    d3Svg
        .selectAll("circle")
            .on("mouseover", (d) => {
                const filteredDataPoints = dataPoints.filter(dataPoint => dataPoint.parent === d.target.attributes['data-parent'].value)
                const sortedDataPoints = filteredDataPoints.sort((a, b) => {
                    const totalA = a.point[0] + a.point[1]
                    const totalB = b.point[0] + b.point[1]
                    return totalA - totalB
                })
              
                d3Svg.append('path')
                    .datum(sortedDataPoints)
                    .attr('fill', 'none')
                    .attr('stroke', '#69b3a2')
                    .attr('stroke-width', 4)
                    .attr(
                        'd',
                        d3
                            .line()
                            .x((d: any) => {
                                return d.point[0]
                            })
                            .y((d: any) => {
                                return d.point[1]
                            }) as any
                    )

                    console.log(d)
                d3Svg.append('text')
                    .attr('x', parseInt(d.offsetX) - 0)
                    .attr('y', parseInt(d.offsetY) - 10)
                    .attr('class', 'text')
                    .text(() => d.target.attributes['data-title'].value);
            })
            .on('mouseout', () => {
                d3Svg.selectAll('path').remove()
                d3Svg.selectAll('text').remove()
            })
        
}


interface Props {
    data: InstancesPerClass[]
    dimensions?: {
        height: number
        width: number
    }
}

const defaultDimensions = {
    width: 1000,
    height: 1000,
}

const Boundaries: React.FC<Props> = ({ data = [], dimensions = defaultDimensions }) => {
    const svgWidth = dimensions.width
    const svgHeight = dimensions.height
    const { svgRef, triangles, dataPoints } = useBoundariesController(data)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
            <style>
                {`
                    .text { font: italic 13px sans-serif }
                `}
            </style>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'lightGrey'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => {
                return (
                  <g key={`${index}-${array.length}`}>
                        <circle
                            cx={`${item.point[0]}`}
                            cy={`${item.point[1]}`}
                            className={`${item.parent}-dot`}
                            fill={'yellow'}
                            r={4}
                            data-parent={item.parent}
                            data-title={item.title}
                        >
                        </circle>
                    </g>
                )
            })}
        </svg>
    )
}

export default Boundaries
