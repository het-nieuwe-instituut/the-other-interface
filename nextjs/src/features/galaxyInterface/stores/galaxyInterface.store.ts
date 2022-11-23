import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ZoomStates } from '../types/galaxy'

export type FiltersState = {
    activeZoom: ZoomStates | null
}

export const filetsInitialState: FiltersState = {
    activeZoom: ZoomStates.Zoom0,
}

export const galaxyInterfaceSlice = createSlice({
    name: 'galaxyInterface',
    initialState: filetsInitialState,
    reducers: {
        setActiveZoom: (state, action: PayloadAction<{ activeZoom: ZoomStates }>) => {
            state.activeZoom = action.payload.activeZoom
        },
    },
})

// export the action
export const galaxyInterfaceActions = galaxyInterfaceSlice.actions
