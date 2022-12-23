import { useRef } from 'react'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { getHighlightAnimationState } from '../../hooks/utils'

import { useD3HighlighAnimation } from './hooks/useD3HighlighAnimation'
import { RecordCloudProps } from './RecordClouds'

type Props = RecordCloudProps

export function usePresenter(props: Props) {
    const { dimensions } = props
    const svgRef = useRef<SVGSVGElement | null>(null)

    const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
    const animationState = getHighlightAnimationState(zoomEvents.zoomLevel)
    useD3HighlighAnimation(svgRef, animationState)

    return { svgRef, animationState, ...zoomEvents, ...props }
}
