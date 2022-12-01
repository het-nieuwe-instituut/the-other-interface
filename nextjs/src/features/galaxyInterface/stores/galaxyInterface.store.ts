import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { D3AnimationStyleProps } from '../hooks/useD3ZoomEvents'
import { ZoomStates } from '../types/galaxy'

export type GalaxyInterfaceStateState = {
    activeZoom: ZoomStates | null
    activeZoomData?: Omit<D3AnimationStyleProps, 'd3Ref'>
}

export const filetsInitialState: GalaxyInterfaceStateState = {
    activeZoom: ZoomStates.Zoom0,
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
            }>
        ) => {
            state.activeZoomData = action.payload?.activeZoomData
            state.activeZoom = action.payload.activeZoom
        },
    },
})

// export the action
export const galaxyInterfaceActions = galaxyInterfaceSlice.actions
