import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CloudCategory } from '../utils/categories'

export type SharedState = {
  isMenuOpen: boolean
  isSearchModeActive: boolean
  searchCategory: CloudCategory | null
  isCategorySuggestionsOpen: boolean
}

export const sharedInitialState: SharedState = {
  isMenuOpen: false,
  isSearchModeActive: false,
  searchCategory: null,
  isCategorySuggestionsOpen: false,
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
    searchCategory: (
      state,
      action: PayloadAction<{
        searchCategory: SharedState['searchCategory']
      }>
    ) => {
      state.searchCategory = action.payload?.searchCategory
      state.isCategorySuggestionsOpen = false
    },

    categorySuggestionsOpen: (
      state,
      action: PayloadAction<{
        categorySuggestionsOpen: SharedState['isCategorySuggestionsOpen']
      }>
    ) => {
      const isCategorySuggestionsOpen = action.payload?.categorySuggestionsOpen
      if (isCategorySuggestionsOpen) {
        state.isSearchModeActive = true
      }
      state.isCategorySuggestionsOpen =
        action.payload?.categorySuggestionsOpen ?? state.isCategorySuggestionsOpen
    },
  },
})
export const sharedActions = sharedSlice.actions
