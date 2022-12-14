import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { D3AnimationStyleProps } from '../hooks/useD3ZoomEvents'
import { ZoomStates } from '../types/galaxy'

export type GalaxyInterfaceStateState = {
    activeZoom: ZoomStates | null
    activeZoomData?: Omit<D3AnimationStyleProps, 'd3Ref'>
    params?: { slug?: string; filter?: string; collection?: string; record?: string; page?: string }
}

export const filetsInitialState: GalaxyInterfaceStateState = {
    activeZoom: null,
    params: {},
    activeZoomData: undefined,
}

export const galaxyInterfaceSlice = createSlice({
    name: 'galaxyInterface',
    initialState: filetsInitialState,
    reducers: {
        setActiveZoom: (
            state,
            action: PayloadAction<{
                activeZoom: GalaxyInterfaceStateState['activeZoom']
                activeZoomData?: GalaxyInterfaceStateState['activeZoomData']
                params?: GalaxyInterfaceStateState['params']
            }>
        ) => {
            state.activeZoomData = action.payload?.activeZoomData ?? state.activeZoomData
            state.activeZoom = action.payload.activeZoom ?? state.activeZoom
            state.params = { ...state.params, ...action.payload.params }
        },
    },
})

// export the action
export const galaxyInterfaceActions = galaxyInterfaceSlice.actions