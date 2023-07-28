import { ZoomStates } from '../types/galaxy'

export type GalaxyInterfaceState = {
  activeZoom: ZoomStates | null
  prevActiveZoom?: ZoomStates | null
  params?: {
    slug?: string
    filter?: string
    collection?: string
    record?: string
    page?: string
    preservedZoom?: ZoomStates
  }
}

export const galaxyInitialState: GalaxyInterfaceState = {
  activeZoom: null,
  prevActiveZoom: null,
  params: {},
}

export type GalaxyAction = {
  type: string
  payload: {
    activeZoom?: GalaxyInterfaceState['activeZoom']
    params?: GalaxyInterfaceState['params']
  }
}

export const galaxyInterfaceReducer = (state: GalaxyInterfaceState, action: GalaxyAction) => {
  switch (action.type) {
    case 'setActiveZoom':
      return {
        ...state,
        prevActiveZoom: state.activeZoom,
        activeZoom: action.payload.activeZoom ?? state.activeZoom,
        params: { ...state.params, ...action.payload.params },
      }
    default:
      return state
  }
}
