import { Dimensions, ZoomLevel } from '@/features/galaxy/types/galaxy'
import * as d3 from 'd3'
import { useRouter } from 'next/router'
import { MutableRefObject, useRef, useState, useCallback, useEffect } from 'react'

import { getStoriesSystemDimensions } from '../Galaxy/Galaxy'

export function useD3ZoomEvents(
  svgRef: MutableRefObject<SVGSVGElement | null>,
  dimensions: Dimensions
) {
  const storiesSystemRef = useRef<SVGForeignObjectElement | null>(null)
  const router = useRouter()
  const asPath = router.asPath
  const pathArray = asPath.split('/')
  const isStoriesPage = pathArray.includes('stories')
  const defaultZoom = isStoriesPage ? ZoomLevel.Zoom1Stories : ZoomLevel.Zoom0

  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(defaultZoom)

  const zoom1stories = useCallback(
    (duration = 1500, redirect = true) => {
      const d3Svg = d3.select(svgRef.current)

      const d3Stories = d3.select(storiesSystemRef.current)

      const stories = getStoriesSystemDimensions(dimensions)
      const nodeForeign = d3Svg.select(`.circles`)

      d3Stories
        .transition()
        .duration(duration)
        .attr(
          'transform',
          `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`
        )

      nodeForeign
        .transition()
        .duration(duration)
        .attr(
          'transform',
          `translate(${0}, ${0})scale(${1.5})translate(${-stories.x}, ${-stories.y})`
        )

      if (redirect) {
        router.push('/landingpage/stories')
      }
    },
    [dimensions, svgRef]
  )

  const zoom1 = useCallback(() => {
    const d3Svg = d3.select(svgRef.current)

    d3Svg
      .transition()
      .duration(1500)
      .attr(
        'transform',
        'translate(' + 0 + ',' + 0 + ')scale(' + 1 + ')translate(' + 0 + ',' + 0 + ')'
      )
  }, [svgRef])

  const zoomout = useCallback(() => {
    const d3Svg = d3.select(svgRef.current)

    d3Svg
      .transition()
      .duration(0)
      .attr(
        'transform',
        'translate(' + 0 + ',' + 0 + ')scale(' + 0.3 + ')translate(' + 0 + ',' + 0 + ')'
      )
  }, [svgRef])

  const zoomTo = useCallback(
    async (x: number, y: number, navigateTo: string) => {
      const d3Svg = d3.select(svgRef.current)
      setZoomLevel(ZoomLevel.zoomedTo)
      await d3Svg.attr(`opacity`, `1`)
      await d3Svg
        .transition()
        .duration(1500)
        .attr(`transform`, `translate(0, 0)scale(${20})translate(${x}, ${y})`)
        .attr(`opacity`, `0`)
        .end()
      router.push(navigateTo)
    },
    [router, svgRef]
  )

  useEffect(() => {
    const { zoomLevel } = router.query as { zoomLevel: ZoomLevel }

    if (!isStoriesPage) {
      zoomLevel ? setZoomLevel(zoomLevel) : setZoomLevel(ZoomLevel.Zoom0)
    }
  }, [router])

  useEffect(() => {
    if (zoomLevel === ZoomLevel.Zoom0) {
      zoomout()
    }
    if (zoomLevel === ZoomLevel.Zoom1) {
      zoom1()
    }
    if (zoomLevel === ZoomLevel.Zoom1Stories) {
      zoom1stories(1500, !isStoriesPage)
    }
  }, [zoom1, zoom1stories, zoomLevel, zoomout])

  return {
    setZoomLevel,
    zoomTo,
    zoomLevel,
    storiesSystemRef,
    zoom1stories,
  }
}
