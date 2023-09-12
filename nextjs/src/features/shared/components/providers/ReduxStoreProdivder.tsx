'use client'

import { Provider } from 'react-redux'
import { store } from '../../configs/store'

export function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
