import { AnimationState } from '../galaxies/RecordClouds/hooks/useD3HighlighAnimation'
import { ZoomStates } from '../types/galaxy'

export function getAnimationStateBasedByZoom(zoomLevel: ZoomStates | null) {
    const config = {
        [ZoomStates.Zoom5]: AnimationState.none,
        [ZoomStates.Zoom5Initial]: AnimationState.in,
        [ZoomStates.Zoom5ToZoom4]: AnimationState.out,
    }

    return Object.entries(config).find(entry => entry[0] === zoomLevel)?.[1] ?? AnimationState.none
}
