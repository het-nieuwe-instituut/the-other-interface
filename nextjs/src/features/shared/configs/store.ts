import { configureStore } from '@reduxjs/toolkit'
import { filtersSlice } from '@/features/filters/filtersSlice'

export type Store = ReturnType<typeof createStore>
export type State = ReturnType<Store['getState']>

export const createStore = <A extends Record<string, unknown>>(preloadedState?: A) => {
    return configureStore({
        reducer: {
            filters: filtersSlice.reducer,
        },
        preloadedState,
    })
}

// config the store
const store = createStore<State>()

// export default the store
export default store
