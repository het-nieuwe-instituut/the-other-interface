import { configureStore } from '@reduxjs/toolkit'

import { filtersActions, filtersSlice } from './filtersSlice'
import { FilterTypes } from './filtersTypes'

describe('filtersSlice', () => {
  const store = configureStore({
    reducer: {
      filters: filtersSlice.reducer,
    },
  })

  it('setActiveFilter reduce should set the activeFilter TimePeriod correctly', () => {
    store.dispatch(filtersActions.setActiveFilter({ activeFilter: FilterTypes.TimePeriod }))

    expect(store.getState().filters.activeFilter).toBe(FilterTypes.TimePeriod)
  })

  it('setActiveFilter reduce should set the activeFilter TimePeriod correctly', () => {
    store.dispatch(filtersActions.setActiveFilter({ activeFilter: FilterTypes.MAKER }))

    expect(store.getState().filters.activeFilter).toBe(FilterTypes.MAKER)
  })
})
