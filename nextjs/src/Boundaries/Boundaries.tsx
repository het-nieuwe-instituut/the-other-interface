import * as d3 from 'd3'
import React, { useEffect, useId, useMemo, useRef } from 'react'
import { CollectionItem } from '../business/d3/useGalaxyController'

import earcut from 'earcut'
import { times } from 'lodash'

const points = [
    [50, 50],
    [200, 50],
    [300, 100],
    [350, 250],
    [250, 350],
    [100, 300],
    [50, 150],
    [50, 50],
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

function useBoundariesController(stories: { id: number; parent: string }[]) {
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

        drawPathByParent(svgRef.current, parents[0], dataPoints)

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
    selector: string,
    dataPoints: { id: number; parent: string; point: number[] }[]
) {
    console.log(dataPoints)
    const d3Svg = d3.select(svgRef)
    const filteredDataPoints = dataPoints.filter(dataPoint => dataPoint.parent === selector)
    const sortedDataPoints = filteredDataPoints.sort((a, b) => {
        const totalA = a.point[0] + a.point[1]
        const totalB = b.point[0] + b.point[1]
        return totalA - totalB
    })
    console.log(sortedDataPoints)

    console.log('test', filteredDataPoints)

    // Add the line
    d3Svg
        .append('path')
        .datum(sortedDataPoints)
        .attr('fill', 'none')
        .attr('stroke', '#69b3a2')
        .attr('stroke-width', 4)
        .attr(
            'd',
            d3
                .line()
                .x((d: any) => {
                    console.log(d)
                    return d.point[0]
                })
                .y((d: any) => {
                    return d.point[1]
                }) as any
        )
}

interface Props {
    data?: CollectionItem[]
    dimensions?: {
        height: number
        width: number
    }
}

const defaultDimensions = {
    width: 1000,
    height: 1000,
}

const parents = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']

const stories = times(100, i => ({
    id: i,
    parent: parents[Math.floor(Math.random() * 7) + 1] ?? parents[0],
}))

const Boundaries: React.FC<Props> = ({ data = [], dimensions = defaultDimensions }) => {
    const svgWidth = dimensions.width
    const svgHeight = dimensions.height
    const id = useId().replaceAll(':', '')
    const { svgRef, triangles, dataPoints } = useBoundariesController(stories)

    console.log(triangles)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
            <style>
                {`
                    .text { font: italic 13px sans-serif }
                `}
            </style>
            <g>
                {triangles.map(triangle => (
                    <polygon points={triangle.join()} fill={'rgb(133, 127, 242)'}></polygon>
                ))}
            </g>
            {dataPoints.map(item => {
                return (
                    <circle
                        cx={`${item.point[0]}px`}
                        cy={`${item.point[1]}px`}
                        className={`${item.parent}-dot`}
                        fill={'red'}
                        r={2}
                    ></circle>
                )
            })}
        </svg>
    )
}

export default Boundaries
