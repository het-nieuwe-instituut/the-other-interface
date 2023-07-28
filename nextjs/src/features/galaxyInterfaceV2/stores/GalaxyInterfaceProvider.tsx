import React, { useReducer, ReactNode } from 'react'

import { galaxyInterfaceReducer, GalaxyInterfaceState } from './galaxyInterface.store'
import { GalaxyInterfaceContext } from './useGalaxyInterface'

type GalaxyProviderProps = {
  children: ReactNode
  initialState: GalaxyInterfaceState
}

export const GalaxyInterfaceProvider: React.FC<GalaxyProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(galaxyInterfaceReducer, initialState)

  return (
    <GalaxyInterfaceContext.Provider value={{ state, dispatch }}>
      {children}
    </GalaxyInterfaceContext.Provider>
  )
}
