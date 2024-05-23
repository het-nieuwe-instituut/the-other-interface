import { useStore as useReduxStore } from 'react-redux'

import { State } from 'src/features/shared/configs/store'

export function useStore() {
  const store = useReduxStore<State>()

  return store
}
