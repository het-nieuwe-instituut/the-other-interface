import { configureStore } from '@reduxjs/toolkit'

import { sharedSlice } from '../stores/shared.store'

export type Store = ReturnType<typeof createStore>
export type State = ReturnType<Store['getState']>

export const createStore = <A extends Record<string, unknown>>(preloadedState?: A) => {
  return configureStore({
    reducer: {
      shared: sharedSlice.reducer,
    },
    preloadedState,
  })
}

export function prepareReduxState(state: Partial<State>) {
  return state
}
