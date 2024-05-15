import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchCategory } from '../utils/categories'
import { USER_LOOKS_ON } from '../constants/mainConstants'

export type SharedState = {
  isDraftMode: boolean
  isMenuOpen: boolean
  isSearchModeActive: boolean
  searchCategory: SearchCategory | null
  isCategorySuggestionsOpen: boolean
  userLooksOn: (typeof USER_LOOKS_ON)[keyof typeof USER_LOOKS_ON]
}

export const sharedInitialState: SharedState = {
  isDraftMode: false,
  isMenuOpen: false,
  isSearchModeActive: false,
  searchCategory: null,
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
    /**
     * @deprecated DO NOT USE ON NEW FEATURES - this only exists for backwards compatibility reasons. Better solution would be to pass isDraftMode directly when the store is setup client side or simply keep track of it in the url bar
     */
    draftMode: (
      state,
      action: PayloadAction<{
        isDraftMode: SharedState['isDraftMode']
      }>
    ) => {
      state.isDraftMode = action.payload?.isDraftMode ?? state.isDraftMode
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
    userChangeLooksOn: (state, action: PayloadAction<{ lookOn: SharedState['userLooksOn'] }>) => {
      state.userLooksOn = action.payload.lookOn
    },
  },
})
export const sharedActions = sharedSlice.actions
