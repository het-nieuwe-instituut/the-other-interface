/* eslint-disable @typescript-eslint/no-explicit-any */

import { calcRandomTrianglePoint, selectRandomTriangle } from '@/features/galaxy/utils/polygons'
import earcut from 'earcut'
import { useMemo } from 'react'
import { useZoomLevel1Query } from 'src/generated/graphql'
import { StoriesItem } from '../../galaxies/MainGalaxy/types'

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
export interface StoryDataPoint extends StoriesItem {
    point: number[]
}

export function usePresenter(stories: StoriesItem[]) {
    const { triangles, dataPoints } = useTriangles(stories)
    const { data, loading } = useZoomLevel1Query()
    return {
        triangles,
        dataPoints,
        items: data?.zoomLevel1 ?? [],
        loading,
        showTooltip,
        hideTooltip,
        cleanupTooltips,
    }
}

function useTriangles(stories: StoriesItem[]) {
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

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            triangles.push(points as any) // any because there was no a quick solution to match [string string]
        }

        return triangles
    }, [])

    const dataPoints = useMemo(
        () =>
            stories.map(story => {
                const triangle = selectRandomTriangle(triangles)
                return { ...story, point: calcRandomTrianglePoint(triangle) }
            }),
        [stories, triangles]
    )

    return {
        dataPoints,
        triangles,
    }
}

// TODO: commented out in case its needed. remove otherwise
// function useDrawPathByDataPoints(dataPoints: StoryDataPoint[]) {
//     const svgRef = useRef(null)
//     const initialized = useRef(false)

//     useEffect(() => {
//         if (!svgRef.current) {
//             return
//         }
//         if (initialized.current) {
//             return
//         }
//         initialized.current = true

//         drawPathByParent(svgRef.current, dataPoints)

//         return () => {
//             initialized.current = false
//         }
//     }, [dataPoints])

//     return {
//         svgRef,
//         initialized,
//     }
// }

// function drawPathByParent(svgRef: null, dataPoints: InstancesPerClassWithPoint[]) {
//     const d3Svg = d3.select(svgRef)

//     // Add the line
//     d3Svg
//         .selectAll('.StoriesSystem-dot')
//         .on('mouseover', d => {
//             const hoverDataPoint = dataPoints.find(
//                 dataPoint => dataPoint.id === d.target.offsetParent?.attributes['data-id']?.value
//             )

//             const filteredDataPoints = dataPoints.filter(dataPoint => dataPoint.parent === hoverDataPoint?.parent)
//             const sortedDataPoints = filteredDataPoints.sort((a, b) => {
//                 const totalA = a.point[0] + a.point[1]
//                 const totalB = b.point[0] + b.point[1]
//                 return totalA - totalB
//             })

//             d3Svg
//                 .append('path')
//                 .datum(sortedDataPoints)
//                 .attr('fill', 'none')
//                 .attr('stroke', '#666666')
//                 .attr('filter', 'blur(2px)')
//                 .attr('stroke-width', 1)
//                 .attr(
//                     'd',
//                     d3
//                         .line()
//                         .x((d: any) => d.point[0])
//                         .y((d: any) => d.point[1]) as any
//                 )
//         })
//         .on('mouseout', () => {
//             d3Svg.selectAll('path').remove()
//         })
// }

function showTooltip(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: StoryDataPoint) {
    const storyEl = document.getElementById(item.id)
    if (!storyEl) {
        return
    }

    insertTooltip(item)
    positionAndShowTooltip(e, item)
}

function hideTooltip(item: StoryDataPoint) {
    getTooltipElement(item.id)?.remove()
}

function cleanupTooltips() {
    document.querySelectorAll('[id$="-tooltip"]').forEach(el => el.remove())
}

function insertTooltip(item: StoryDataPoint) {
    const tooltipContainerStyle = `
        height: 100%;
        width: 100%;
        max-width: 325px;
        max-height: 325px;
        display: block;
        position: absolute;
        z-index: 100;
        visibility: hidden;
    `

    const tooltipStyle = `
        width: fit-content;
        max-height: 100%;
        background-color: rgba(255, 255, 255, 0.85);
        padding: 15px;
        border-radius: 5px;
        overflow: hidden;
    `

    const titleStyle = `
        font-family: 'Univers';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 118%;
        color: #001223;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    `

    const descriptionStyle = `
        .description,
        .description-blurred {
            margin-top: 13px;
            font-family: 'Univers';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 135%;
            letter-spacing: -0.01em;
            color: #001223;
        }
        .description-blurred:after {
            content: "";
            position: absolute;
            z-index: 101;
            bottom: 0;
            left: 0;
            border-radius: 5px;
            pointer-events: none;
            width: 100%;
            height: 40px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 73.44%);
            border-radius: 5px;
        }
    `

    const tooltipDiv = document.createElement('div')
    tooltipDiv.setAttribute('id', `${item.id}-tooltip`)
    tooltipDiv.setAttribute('style', tooltipContainerStyle)
    tooltipDiv.innerHTML += `
        <div style="${tooltipStyle}">
            <style>${descriptionStyle}</style>
            <p style="${titleStyle}">${item.title}</p>
            ${item.shortDescription ? `<p class="description-blurred">${item.shortDescription}</p>` : ''}
        </div>
    `

    document.body.insertBefore(tooltipDiv, null)
}

function positionAndShowTooltip(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: StoryDataPoint) {
    const tooltipContainerEl = getTooltipElement(item.id)
    const tooltipEl = tooltipContainerEl?.children[0]
    if (!tooltipEl) {
        return
    }

    const bodyRect = document.body.getBoundingClientRect()
    const tooltipRect = tooltipEl.getBoundingClientRect()

    const descriptionEl = tooltipEl.querySelector('.description-blurred')
    if (descriptionEl && tooltipEl.getBoundingClientRect().height < 325) {
        descriptionEl.classList.replace('description-blurred', 'description')
    }

    const left = e.clientX + 5
    const top = e.clientY - tooltipRect.height - 5
    const adjustedLeft = left + tooltipRect.width > bodyRect.width ? bodyRect.width - tooltipRect.width : left
    const adjustedTop = top < 0 ? tooltipRect.height : top

    tooltipContainerEl.style.left = `${adjustedLeft}px`
    tooltipContainerEl.style.top = `${adjustedTop}px`
    tooltipContainerEl.style.visibility = 'visible'
}

function getTooltipElement(itemId: string) {
    return document.getElementById(`${itemId}-tooltip`)
}
