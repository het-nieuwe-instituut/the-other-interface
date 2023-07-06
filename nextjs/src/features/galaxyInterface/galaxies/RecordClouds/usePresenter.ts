import { useRef } from 'react'

import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { getHighlightAnimationState } from '../../hooks/utils'
import { ZoomStates } from '../../types/galaxy'
import { RecordCloudProps } from './RecordClouds'
import { AnimationState, useD3HighlighAnimation } from './hooks/useD3HighlighAnimation'

type Props = RecordCloudProps

export function usePresenter(props: Props) {
  const { dimensions } = props
  const svgRef = useRef<SVGSVGElement | null>(null)

  const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
  const animationState = getHighlightAnimationState(zoomEvents.zoomLevel)
  useD3HighlighAnimation(
    svgRef,
    zoomEvents.zoomLevel === ZoomStates.Zoom5InitialWithoutHighlightAnimation
      ? AnimationState.none
      : animationState
  )

  return { svgRef, animationState, ...zoomEvents, ...props }
}
