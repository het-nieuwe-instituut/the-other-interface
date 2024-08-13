import { cn } from '@/features/ui/utils/cn'

import React from 'react'

import { Animations, Conditions, useGalaxyAnimationState } from './useGalaxyAnimationState'

export const GalaxyPaginationAnimationStateContext = React.createContext<{
  animationState?: Animations
  conditions?: 'previousAnimationWasBackwards' | 'previousAnimationWasForward' | 'firstRender'
  setAnimationState: React.Dispatch<React.SetStateAction<Animations | undefined>>
}>({
  animationState: undefined,
  conditions: undefined,
  setAnimationState: () => undefined,
})

export const GalaxyPaginationAnimationStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { conditions, setAnimationState, animationState } = useGalaxyAnimationState()
  return (
    <GalaxyPaginationAnimationStateContext.Provider
      value={{
        animationState,
        setAnimationState,
        conditions,
      }}
    >
      {children}
    </GalaxyPaginationAnimationStateContext.Provider>
  )
}

export const getItemsAnimationClassNames = (animationState: Animations, conditions: Conditions) => {
  return cn(
    conditions === 'previousAnimationWasBackwards' &&
      'animate-[fromHideToShow_500ms_ease-in-out_forwards]',
    animationState === 'forward' && 'animate-[toBlurAndHide_500ms_ease-in-out_forwards]',
    animationState === 'backwards' && 'animate-[toBlur_500ms_ease-in-out_forwards]',
    conditions === 'firstRender' && 'animate-[fromHideToShow_500ms_ease-in-out_forwards]'
  )
}

export const getNextItemsAnimationClassNames = (
  animationState: Animations,
  conditions: Conditions,
  hasItems: boolean
) => {
  return cn(
    conditions === 'previousAnimationWasForward' &&
      hasItems &&
      'animate-[fromHideToShowExtraBlur_500ms_ease-in-out_forwards]',
    !animationState &&
      conditions === 'firstRender' &&
      'animate-[fromHideToBlur_500ms_ease-in-out_forwards]',
    !animationState && conditions !== 'firstRender' && 'blur-[60px]',
    animationState === 'forward' && 'animate-[toUnblur_500ms_ease-in-out_forwards]',
    animationState === 'backwards' && 'animate-[fromBlurredToHide_500ms_ease-in-out_forwards]'
  )
}
