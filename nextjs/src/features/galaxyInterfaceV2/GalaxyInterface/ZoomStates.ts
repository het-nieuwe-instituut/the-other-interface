import { ZoomStates } from '../types/galaxy'

export const zoomStatesMainGalaxy = [
  ZoomStates.Zoom0,
  ZoomStates.Zoom0ToZoom1,
  ZoomStates.Zoom1ToZoom0,
  ZoomStates.Zoom1Stories,
  ZoomStates.Zoom1,
  ZoomStates.Zoom1ToZoom2,
  ZoomStates.Zoom1ToZoom1Stories,
  ZoomStates.Zoom1StoriesToZoom1,
  ZoomStates.Zoom1StoriesToZoom5,
  ZoomStates.ZoomOutToZoom1,
]

export const zoomedStatesMainGalaxy = [
  ZoomStates.Zoom1,
  ZoomStates.Zoom1ToZoom2,
  ZoomStates.Zoom1ToZoom1Stories,
]

export const zoomStatesZoom2Galaxy = [
  ZoomStates.Zoom2,
  ZoomStates.Zoom2Initial,
  ZoomStates.Zoom2ToZoom3,
  ZoomStates.Zoom2ToZoom1,
  ZoomStates.ZoomOutToZoom2,
]
export const zoomStatesZoom3Galaxy = [
  ZoomStates.Zoom3,
  ZoomStates.Zoom3Initial,
  ZoomStates.Zoom3ToInitial,
  ZoomStates.Zoom3ToZoom2,
  ZoomStates.Zoom3ToZoom4,
  ZoomStates.ZoomOutToZoom3,
]
export const zoomStatesZoom4Galaxy = [
  ZoomStates.Zoom4,
  ZoomStates.Zoom4Initial,
  ZoomStates.Zoom4ToZoom3,
  ZoomStates.Zoom4ToZoom5,
  ZoomStates.Zoom4ToInitial,
  ZoomStates.ZoomOutToZoom4,
]
export const zoomStatesZoom5Galaxy = [
  ZoomStates.Zoom5Initial,
  ZoomStates.Zoom5,
  ZoomStates.Zoom5ToRelationStill,
  ZoomStates.Zoom5InitialWithoutHighlightAnimation,
  ZoomStates.Zoom5ToRelation,
  ZoomStates.Zoom5ToZoom4,
]
