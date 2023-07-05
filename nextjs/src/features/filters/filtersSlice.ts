import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilterTypes, FiltersState } from './filtersTypes'

export const filetsInitialState: FiltersState = {
  activeFilter: null,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filetsInitialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<{ activeFilter: FilterTypes }>) => {
      state.activeFilter = action.payload.activeFilter
    },
  },
})

// export the action
export const filtersActions = filtersSlice.actions
