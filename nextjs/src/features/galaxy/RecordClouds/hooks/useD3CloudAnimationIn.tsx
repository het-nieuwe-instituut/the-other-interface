import * as d3 from 'd3'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect } from 'react'

export function useD3CloudAnimationIn(d3Svg: MutableRefObject<SVGSVGElement | null>, trigger: boolean) {
    const router = useRouter()
    const navigatedByGalaxy = router.query.galaxy === 'true'
    useEffect(() => {
        async function animate() {
            const tHighlight = d3.transition().duration(900).ease(d3.easeCubic)
            const tParents = d3.transition().duration(1100).ease(d3.easeCubic)

            const d3SVG = d3.select(d3Svg.current)
            const foreignParents = d3SVG.selectAll(`.foreign-parent`)
            const foreignHiglights = d3SVG.selectAll(`.foreign-highlight`)
            const foreignChildren = d3SVG.selectAll(`.foreign-child`)

            foreignParents.attr('opacity', 0).attr('transform', 'scale(0.6)')
            !navigatedByGalaxy && foreignHiglights.attr('opacity', 0).attr('transform', 'scale(0)')
            foreignChildren.attr('opacity', 0)

            foreignHiglights.style('transform-origin', 'center')
            !navigatedByGalaxy &&
                foreignHiglights.transition(tHighlight).attr('opacity', 1).attr('transform', 'scale(1)')
            foreignParents.style('transform-origin', 'center')
            await foreignParents.transition(tParents).attr('opacity', 1).attr('transform', 'scale(1)').end()
            foreignChildren.style('transform-origin', 'center')
            foreignChildren.transition().duration(1000).attr('opacity', 1)
        }

        animate()
    }, [d3Svg, navigatedByGalaxy, router.query.galaxy])

    useEffect(() => {
        async function animateOut() {
            const tHighlight = d3.transition().duration(900).ease(d3.easeCubic)
            const tParents = d3.transition().duration(1100).ease(d3.easeCubic)
            const d3SVG = d3.select(d3Svg.current)
            const foreignParents = d3SVG.selectAll(`.foreign-parent`)
            const foreignHiglights = d3SVG.selectAll(`.foreign-highlight`)
            const foreignChildren = d3SVG.selectAll(`.foreign-child:not(#foreign-hero)`)
            foreignHiglights.attr('opacity', 1).attr('transform', 'scale(1)')
            foreignHiglights.style('transform-origin', 'center')
            foreignParents.style('transform-origin', 'center')
            foreignChildren.style('transform-origin', 'center')
            foreignParents.transition(tParents).attr('opacity', 0)
            foreignHiglights.transition(tHighlight).attr('opacity', 0)
            foreignChildren.transition().duration(1000).attr('opacity', 0)
        }
        if (trigger) {
            animateOut()
        }
    }, [d3Svg, trigger])
}
