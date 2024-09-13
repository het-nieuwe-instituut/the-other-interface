import { cn } from '@/features/ui/utils/cn'

import React, { CSSProperties } from 'react'

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
    'ease-toi-cubic-bezier',
    conditions === 'previousAnimationWasBackwards' &&
      'animate-[paginationHideToShow_500ms_forwards]',
    animationState === 'forward' && 'animate-[paginationForward_500ms_forwards]',
    animationState === 'backwards' && 'animate-[paginationBackward_500ms_forwards]',
    conditions === 'firstRender' && 'animate-[paginationHideToShow_500ms_forwards]'
  )
}

export function getItemsCssProperties(blur: '10' | '50' = '10') {
  return {
    '--blur': `${blur}px`,
    '--scale-max': '2',
    '--scale-min': '0.9',
  } as CSSProperties
}

export const getNextItemsAnimationClassNames = (
  animationState: Animations,
  conditions: Conditions,
  hasItems: boolean
) => {
  return cn(
    'ease-toi-cubic-bezier',
    conditions === 'previousAnimationWasForward' &&
      hasItems &&
      'animate-[nextPaginationHideToShow_500ms_forwards]',
    !animationState &&
      conditions === 'firstRender' &&
      'animate-[nextPaginationHideToBlur_500ms_forwards]  scale-[var(--scale-min)]',
    !animationState &&
      conditions !== 'firstRender' &&
      conditions === 'previousAnimationWasForward' &&
      'animate-[nextPaginationHideToBlur_500ms_forwards]',
    !animationState &&
      conditions !== 'firstRender' &&
      conditions === 'previousAnimationWasBackwards' &&
      'blur-[var(--blur)] scale-[var(--scale-min)]',
    animationState === 'forward' && 'animate-[nextPaginationToUnblur_500ms_forwards]',
    animationState === 'backwards' && 'animate-[nextPaginationFromBlurredToHide_500ms_forwards]'
  )
}

export function getNextItemsCssProperties(blur: '10' | '50' = '10') {
  return {
    '--blur': `${blur}px`,
    '--scale-max': '2',
    '--scale-min': '0.9',
    '--scale-hide': '0.8',
  } as CSSProperties
}
