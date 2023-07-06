/* eslint-disable @typescript-eslint/no-explicit-any */
import { calcRandomTrianglePoint, selectRandomTriangle } from '@/features/galaxy/utils/polygons'
import { StoriesItem } from '@/features/galaxyInterface/galaxies/MainGalaxy/types'
import earcut from 'earcut'

// import { useZoomLevel1Query } from 'src/generated/graphql'

export interface InstancesPerClass {
  slug: string
  title: string
  shortDescription?: string | null
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

export function getDataPoints(
  getRandomNumber: () => number,
  stories: StoriesItem[],
  triangles: [[number, number], [number, number], [number, number]][]
) {
  return stories.map(story => {
    const triangle = selectRandomTriangle(getRandomNumber, triangles)
    return { ...story, point: calcRandomTrianglePoint(getRandomNumber, triangle) }
  })
}

export function getTriangles() {
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
