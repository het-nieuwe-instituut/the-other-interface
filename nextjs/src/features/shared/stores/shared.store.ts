import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SharedState = {
  isMenuOpen: boolean
  isSearchModeActive: boolean
}

export const sharedInitialState: SharedState = {
  isMenuOpen: false,
  isSearchModeActive: false,
}

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: sharedInitialState,
  reducers: {
    menuOpen: (
      state,
      action: PayloadAction<{
        isMenuOpen: SharedState['isMenuOpen']
      }>
    ) => {
      state.isMenuOpen = action.payload?.isMenuOpen ?? state.isMenuOpen
    },
    searchModeActive: (
      state,
      action: PayloadAction<{
        isSearchModeActive: SharedState['isSearchModeActive']
      }>
    ) => {
      state.isSearchModeActive = action.payload?.isSearchModeActive ?? state.isSearchModeActive
    },
  },
})
export const sharedActions = sharedSlice.actions
