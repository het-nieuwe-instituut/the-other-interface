import {  useRef } from 'react'

export function usePresenter() {
    const svgRef = useRef<SVGSVGElement | null>(null)

    return { svgRef }
}
