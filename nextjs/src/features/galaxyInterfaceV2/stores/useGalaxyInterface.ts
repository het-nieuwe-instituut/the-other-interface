import React, { createContext, useContext } from 'react'

import { GalaxyInterfaceState, GalaxyAction, galaxyInitialState } from './galaxyInterface.store'

export const GalaxyInterfaceContext = createContext<{
  state: GalaxyInterfaceState
  dispatch: React.Dispatch<GalaxyAction>
}>({
  state: galaxyInitialState,
  dispatch: () => undefined,
})

export const useGalaxyInterface = () => useContext(GalaxyInterfaceContext)
