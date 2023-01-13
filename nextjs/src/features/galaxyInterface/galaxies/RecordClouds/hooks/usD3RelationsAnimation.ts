import * as d3 from 'd3'

import { MutableRefObject, useEffect } from 'react'

export enum AnimationState {
    in = 'in',
    out = 'out',
    none = 'none',
}
export function useD3RelationsAnimation(d3Svg: MutableRefObject<SVGSVGElement | null>, state: AnimationState) {
    useEffect(() => {
        if (state === AnimationState.in) {
            animateIn({ d3Svg })
        }
        if (state === AnimationState.none) {
            animateNone({ d3Svg })
        }
        if (state === AnimationState.out) {
            animateOut({ d3Svg })
        }
    }, [d3Svg, state])
}

interface AnimationOptions {
    d3Svg: MutableRefObject<SVGSVGElement | null>
}

async function animateNone(options: AnimationOptions) {
    const { d3Svg } = options

    const d3SVG = d3.select(d3Svg.current)
    const foreignParents = d3SVG.selectAll(`.foreign-parent`)
    const foreignChildren = d3SVG.selectAll(`.foreign-child`)

    foreignParents.style('transform-origin', 'center')
    foreignChildren.style('transform-origin', 'center')
}

async function animateIn(options: AnimationOptions) {
    const { d3Svg } = options
    const tParents = d3.transition().duration(1100).ease(d3.easeCubic)

    const d3SVG = d3.select(d3Svg.current)
    const foreignParents = d3SVG.selectAll(`.foreign-parent`)
    const foreignChildren = d3SVG.selectAll(`.foreign-child`)

    foreignParents.attr('opacity', 0).attr('transform', 'scale(0.6)')
    foreignChildren.attr('opacity', 0)

    foreignParents.style('transform-origin', 'center')
    await foreignParents.transition(tParents).attr('opacity', 1).attr('transform', 'scale(1)').end()
    foreignChildren.style('transform-origin', 'center')
    foreignChildren.transition().duration(1000).attr('opacity', 1)
}

async function animateOut(options: AnimationOptions) {
    const { d3Svg } = options

    const tParents = d3.transition().duration(1100).ease(d3.easeCubic)
    const d3SVG = d3.select(d3Svg.current)
    const foreignParents = d3SVG.selectAll(`.foreign-parent`)
    const foreignChildren = d3SVG.selectAll(`.foreign-child:not(#foreign-hero)`)

    foreignParents.style('transform-origin', 'center')
    foreignChildren.style('transform-origin', 'center')
    foreignParents.transition(tParents).attr('opacity', 0)
    foreignChildren.transition().duration(1000).attr('opacity', 0)
}
