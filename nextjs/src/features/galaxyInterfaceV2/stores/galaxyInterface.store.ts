import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ZoomStates } from '../types/galaxy'

export type GalaxyInterfaceStateState = {
  activeZoom: ZoomStates | null
  prevActiveZoom?: ZoomStates | null
  params?: {
    slug?: string
    filter?: string
    collection?: string
    record?: string
    page?: string
    preservedZoom?: ZoomStates // between page reloads
  }
}

export const filetsInitialState: GalaxyInterfaceStateState = {
  activeZoom: null,
  prevActiveZoom: null,
  params: {},
}

export const galaxyInterfaceSlice = createSlice({
  name: 'galaxyInterface',
  initialState: filetsInitialState,
  reducers: {
    setActiveZoom: (
      state,
      action: PayloadAction<{
        activeZoom: GalaxyInterfaceStateState['activeZoom']
        params?: GalaxyInterfaceStateState['params']
      }>
    ) => {
      state.prevActiveZoom = state.activeZoom
      state.activeZoom = action.payload.activeZoom ?? state.activeZoom
      state.params = { ...state.params, ...action.payload.params }
    },
  },
})

// export the action
export const galaxyInterfaceActions = galaxyInterfaceSlice.actions
