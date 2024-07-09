'use client'
import React from 'react'
import { Animations, useGalaxyAnimationState } from './useGalaxyAnimationState'

export const GalaxyZoomAnimationStateContext = React.createContext<{
  animationState?: Animations
  conditions?: 'previousAnimationWasBackwards' | 'previousAnimationWasForward' | 'firstRender'
  setAnimationState: React.Dispatch<React.SetStateAction<Animations | undefined>>
}>({
  animationState: undefined,
  conditions: undefined,
  setAnimationState: () => undefined,
})

export const GalaxyZoomAnimationStateProvider = ({ children }: { children: React.ReactNode }) => {
  const { conditions, setAnimationState, animationState } = useGalaxyAnimationState()
  return (
    <GalaxyZoomAnimationStateContext.Provider
      value={{
        animationState,
        setAnimationState,
        conditions,
      }}
    >
      {children}
    </GalaxyZoomAnimationStateContext.Provider>
  )
}
