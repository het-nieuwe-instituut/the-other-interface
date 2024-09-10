'use client'
import { useElementPosition } from '@/features/ui/hooks/useElementPosition'
import React, { useCallback, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
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

const DEFAULT_DETAILED_RECORD_COMPONENT_WIDTH = 368.633 // based on element when screne is 1440 x 900
const DETAILED_RECORD_COMPONENT_HEIGHT = 204.6 // based on element when screne is 1440 x 900
const DETAILED_RECORD_COMPONENT_TEXT_HEIGHT = 43 // based on element when screne is 1440 x 900
const useGetCalculatedDetailedrecordImageDimensions = () => {
  const { width, height } = useWindowSize()

  return {
    width: DEFAULT_DETAILED_RECORD_COMPONENT_WIDTH * (width / 1440),
    height: DETAILED_RECORD_COMPONENT_HEIGHT * (height / 900),
    textHeight: DETAILED_RECORD_COMPONENT_TEXT_HEIGHT * (height / 900),
  }
}
export const useGetMoveElementToCenterScaleAndOffset = () => {
  const {
    width: nextElementWidth,
    height: nextElementHeight,
    textHeight,
  } = useGetCalculatedDetailedrecordImageDimensions()

  const [animationValues, setAnimationValues] = useState<
    { scale: number; offsetTop: number; offsetLeft: number } | undefined
  >(undefined)

  const calculate = useCallback(
    (ref: HTMLImageElement | null) => {
      if (ref) {
        const { width, height } = ref

        // Calculate scale factors
        let offset = 0
        let scaleHeight = nextElementHeight / height
        let scaleWidth = nextElementWidth / width

        // Use Math.max as in the original code, but with a minimum scale of 1
        const usedScale = Math.max(scaleHeight, scaleWidth, 1)

        // Limit the maximum scale to prevent excessive enlargement
        const maxAllowedScale = 2 // Adjust this value as needed
        const scale = Math.max(usedScale, maxAllowedScale)

        // Calculate offsets to center the element
        const scaledWidth = width * scale
        const scaledHeight = height * scale
        const offsetLeft = (nextElementWidth - scaledWidth) / 2

        setAnimationValues({ scale, offsetTop: -offset, offsetLeft })
      }
    },
    [nextElementWidth, nextElementHeight, textHeight]
  )

  return { calculate, animationValues }
}
