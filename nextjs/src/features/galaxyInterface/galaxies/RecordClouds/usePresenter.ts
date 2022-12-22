import { useRef } from 'react'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { ZoomStates } from '../../types/galaxy'
import { AnimationState, useD3HiglightAnimation } from './hooks/useD3CloudAnimationIn'
import { RecordCloudProps } from './RecordClouds'

type Props = RecordCloudProps

export function usePresenter(props: Props) {
    const { dimensions } = props
    const svgRef = useRef<SVGSVGElement | null>(null)

    const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
    useD3HiglightAnimation(svgRef, getHighlightAnimationState(zoomEvents.zoomLevel))

    return { svgRef, ...zoomEvents, ...props }
}
function getHighlightAnimationState(zoomLevel: ZoomStates | null) {
    const config = {
        [ZoomStates.Zoom5]: AnimationState.none,
        [ZoomStates.Zoom5Initial]: AnimationState.in,
        [ZoomStates.Zoom5ToZoom4]: AnimationState.out,
    }

    return Object.entries(config).find(entry => entry[0] === zoomLevel)?.[1] ?? AnimationState.none
}
