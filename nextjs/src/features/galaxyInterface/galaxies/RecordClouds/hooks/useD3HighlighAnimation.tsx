import * as d3 from 'd3'
import { MutableRefObject, useEffect } from 'react'

export enum AnimationState {
  in = 'in',
  out = 'out',
  none = 'none',
}
export function useD3HighlighAnimation(
  d3Svg: MutableRefObject<SVGSVGElement | null>,
  state: AnimationState
) {
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
  const foreignHiglights = d3SVG.selectAll(`.foreign-highlight`)

  foreignHiglights.attr('opacity', 1).attr('transform', 'scale(1)')
  foreignHiglights.style('transform-origin', 'center')
}

async function animateIn(options: AnimationOptions) {
  const { d3Svg } = options
  const tHighlight = d3.transition().duration(900).ease(d3.easeCubic)

  const d3SVG = d3.select(d3Svg.current)
  const foreignHiglights = d3SVG.selectAll(`.foreign-highlight`)

  foreignHiglights.attr('opacity', 0).attr('transform', 'scale(0)')

  foreignHiglights.style('transform-origin', 'center')
  foreignHiglights.transition(tHighlight).attr('opacity', 1).attr('transform', 'scale(1)')
}

async function animateOut(options: AnimationOptions) {
  const { d3Svg } = options
  const tHighlight = d3.transition().duration(900).ease(d3.easeCubic)
  const d3SVG = d3.select(d3Svg.current)
  const foreignHiglights = d3SVG.selectAll(`.foreign-highlight`)
  foreignHiglights.attr('opacity', 1).attr('transform', 'scale(1)')
  foreignHiglights.style('transform-origin', 'center')
  foreignHiglights.transition(tHighlight).attr('opacity', 0)
}
