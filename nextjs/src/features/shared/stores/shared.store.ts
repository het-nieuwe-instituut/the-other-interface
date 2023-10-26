import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CloudCategory } from '../utils/categories'
import { USER_LOOKS_ON } from '../constants/mainConstants'

export type SharedState = {
  isMenuOpen: boolean
  isSearchModeActive: boolean
  searchCategory: CloudCategory | null
  searchPageNumber: number
  isCategorySuggestionsOpen: boolean
  userLooksOn: (typeof USER_LOOKS_ON)[keyof typeof USER_LOOKS_ON]
}

export const sharedInitialState: SharedState = {
  isMenuOpen: false,
  isSearchModeActive: false,
  searchCategory: null,
  searchPageNumber: 1,
  isCategorySuggestionsOpen: false,
  userLooksOn: USER_LOOKS_ON.GALAXY,
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
    searchPageNumber: (
      state,
      action: PayloadAction<{
        searchPageNumber: SharedState['searchPageNumber']
      }>
    ) => {
      state.searchPageNumber = action.payload?.searchPageNumber ?? state.searchPageNumber
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

    userChangeLooksOn: (state, action: PayloadAction<{ lookOn: SharedState['userLooksOn'] }>) => {
      state.userLooksOn = action.payload.lookOn
    },
  },
})
export const sharedActions = sharedSlice.actions
