/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from 'd3'
import React, { useEffect, useMemo, useRef } from 'react'
import earcut from 'earcut'
import { Box } from '@chakra-ui/react'

export interface InstancesPerClass {
    instance: string
    title: string
    parent: string
    id: string
}

const points = [
    [63.99712359905243, 16.49931514263153],
    [15.3547848140297, 4.917805908102309],
    [1, 36.745580769958906],
    [24.030668896622956, 74.6038447022438],
    [29.977591480672345, 124.24772018648218],
    [44.42412731870718, 168.7092691732105],
    [79.51207931742829, 202.60290208132938],
    [97.5, 247.805543102324],
    [97.5, 297.799738814123],
    [89.41637379408348, 345.8733023679815],
    [72.69005883485079, 390.68879494071007],
    [94.38355726236477, 434.8652492746478],
    [127.05450410529738, 431.167161829464],
    [153.32513016328448, 388.6201696268545],
    [189.43715758487815, 355.03406674238795],
    [229.26624311233172, 324.80017000109365],
    [269.08914603246376, 294.5709664208116],
    [317.9795808622148, 301.97849658253836],
    [367.51852716147914, 298.30778137196467],
    [415.9501745107118, 298.7976579116803],
    [460.5509475346189, 321.40777201407764],
    [496.89703116877354, 305.83878573714173],
    [528.2096083310898, 266.83540014899336],
    [534.5, 219.0597875714302],
    [490.3274329218548, 229.83671036746819],
    [444.01929982277943, 219.40085748086312],
    [398.1945744124823, 199.41914581939636],
    [354.48398680461105, 205.21916870807763],
    [342.0793997095898, 158.82188662700355],
    [323.98333036736585, 135.5],
    [277.14880623256613, 150.1548142707179],
    [243.70514503587037, 182.00874504446983],
    [223.93343867873773, 192.195566429873],
    [190.60825670140912, 156.10259924143247],
    [151.93560292385519, 124.41250795149244],
    [119.32357900682837, 86.78530163131654],
    [88.39289749506861, 47.48971883021295],
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

function drawPathByParent(svgRef: null, dataPoints: InstancesPerClassWithPoint[]) {
    const d3Svg = d3.select(svgRef)

    // Add the line
    d3Svg
        .selectAll('.StoriesSystem-dot')
        .on('mouseover', d => {
            console.log(d.target.offsetParent.attributes['data-id'])
            const hoverDataPoint = dataPoints.find(
                dataPoint => dataPoint.id === d.target.offsetParent.attributes['data-id'].value
            )

            const filteredDataPoints = dataPoints.filter(dataPoint => dataPoint.parent === hoverDataPoint?.parent)
            const sortedDataPoints = filteredDataPoints.sort((a, b) => {
                const totalA = a.point[0] + a.point[1]
                const totalB = b.point[0] + b.point[1]
                return totalA - totalB
            })

            d3Svg
                .append('path')
                .datum(sortedDataPoints)
                .attr('fill', 'none')
                .attr('stroke', '#666666')
                .attr('filter', 'blur(2px)')
                .attr('stroke-width', 1)
                .attr(
                    'd',
                    d3
                        .line()
                        .x((d: any) => d.point[0])
                        .y((d: any) => d.point[1]) as any
                )

            if (hoverDataPoint) {
                d3Svg
                    .append('text')
                    .attr('x', () => hoverDataPoint.point[0])
                    .attr('y', () => hoverDataPoint.point[1] - 20)
                    .attr('class', 'text')
                    .text(() => hoverDataPoint.title)
            }
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
    width: 537.85,
    height: 537.85,
}

export const StoriesSystem: React.FC<Props> = ({ data = [], dimensions = defaultDimensions }) => {
    const svgWidth = dimensions.width
    const svgHeight = dimensions.height
    const { svgRef, triangles, dataPoints } = useBoundariesController(data)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <style>
                {`
                    .text { font: italic 13px sans-serif }
                `}
            </style>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'transparent'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => {
                return (
                    <g key={`${index}-${array.length}`} className="StoriesSystem-dot">
                        <foreignObject
                            x={`${item.point[0]}`}
                            y={`${item.point[1]}`}
                            height={'7.47px'}
                            width={'7.47px'}
                            className={`${item.parent}-dot`}
                            data-id={item.id}
                        >
                            <Box
                                height="100%"
                                width="100%"
                                background="radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 77.6%);"
                            ></Box>
                        </foreignObject>
                    </g>
                )
            })}
        </svg>
    )
}
