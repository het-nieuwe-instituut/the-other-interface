import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SharedState = {
  isMenuOpen: boolean
}

export const sharedInitialState: SharedState = {
  isMenuOpen: false,
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
  },
})
export const sharedActions = sharedSlice.actions
