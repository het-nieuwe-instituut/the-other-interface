'use client'
import { useElementPosition } from '@/features/ui/hooks/useElementPosition'
import React from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Animations, Conditions, useGalaxyAnimationState } from './useGalaxyAnimationState'

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
export const getMoveElementToCenterX = ({
  centerX,
  elementPositionLeft,
  elementPositionWidth,
}: {
  centerX: number
  elementPositionLeft: number
  elementPositionWidth: number
}) => {
  return centerX - elementPositionLeft - elementPositionWidth / 2
}

export const getMoveElementToCenterY = ({
  centerY,
  elementPositionHeight,
  elementPositionTop,
}: {
  centerY: number
  elementPositionTop: number
  elementPositionHeight: number
}) => {
  return centerY - elementPositionTop - elementPositionHeight / 2
}

export const useMoveElementToCenterValues = (opts: { scale?: number; offsetTop?: number }) => {
  const { scale = 1, offsetTop = 0 } = opts
  const { width, height } = useWindowSize()
  const [elementPosition, ref] = useElementPosition()
  const centerX = (width ?? 0) / 2
  const centerY = (height ?? 0) / 2

  const animationCssVariables = {
    '--animation-translate-x': `${getMoveElementToCenterX({
      centerX,
      elementPositionLeft: elementPosition.left || 0,
      elementPositionWidth: elementPosition.width || 0,
    })}px`,
    '--animation-translate-y': `${
      getMoveElementToCenterY({
        centerY,
        elementPositionTop: elementPosition.top || 0,
        elementPositionHeight: elementPosition.height || 0,
      }) + offsetTop
    }px`,
    '--animation-scale': scale,
  }

  return [animationCssVariables, ref] as const
}

export function getScaleAnimationClassName({
  allLoaded,
  animation,
  galaxyZoomAnimationConditions,
  galaxyPaginationAnimationConditions,
  galaxyZoomAnimationState,
  galaxyPaginationAnimationState,
}: {
  allLoaded: boolean
  animation: string
  galaxyZoomAnimationConditions: Conditions
  galaxyPaginationAnimationConditions: Conditions
  galaxyZoomAnimationState: Animations
  galaxyPaginationAnimationState: Animations
}) {
  return allLoaded &&
    galaxyZoomAnimationConditions === 'firstRender' &&
    galaxyPaginationAnimationConditions === 'firstRender'
    ? animation
    : !galaxyZoomAnimationState &&
      !galaxyPaginationAnimationState &&
      galaxyPaginationAnimationConditions !== 'previousAnimationWasBackwards' &&
      galaxyPaginationAnimationConditions !== 'previousAnimationWasForward'
    ? 'opacity-0'
    : undefined
}
