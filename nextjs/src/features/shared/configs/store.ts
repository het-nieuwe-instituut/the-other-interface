import { configureStore } from '@reduxjs/toolkit'
import { filtersSlice } from '@/features/filters/filtersSlice'
import { galaxyInterfaceSlice } from '@/features/galaxyInterface/stores/galaxyInterface.store'

export type Store = ReturnType<typeof createStore>
export type State = ReturnType<Store['getState']>

export const createStore = <A extends Record<string, unknown>>(preloadedState?: A) => {
    return configureStore({
        reducer: {
            filters: filtersSlice.reducer,
            galaxyInterface: galaxyInterfaceSlice.reducer,
        },
        preloadedState,
    })
}

// config the store
const store = createStore<State>()

// export default the store
export default store
