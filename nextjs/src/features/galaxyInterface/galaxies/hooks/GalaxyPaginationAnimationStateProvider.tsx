import { cn } from '@/features/ui/utils/cn'
import { useSearchParams, usePathname } from 'next/navigation'
import { useRef, useState, useLayoutEffect } from 'react'

import React from 'react'

export const GalaxyPaginationAnimationStateContext = React.createContext<{
  animationState?: Animations
  conditions?: 'previousAnimationWasBackwards' | 'previousAnimationWasForward' | 'firstRender'
  setAnimationState: React.Dispatch<React.SetStateAction<Animations | undefined>>
}>({
  animationState: undefined,
  conditions: undefined,
  setAnimationState: () => undefined,
})

type Animations = 'forward' | 'backwards' | undefined
type Conditions =
  | 'previousAnimationWasBackwards'
  | 'previousAnimationWasForward'
  | 'firstRender'
  | undefined

export const GalaxyPaginationAnimationStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const prevPathName = useRef<string | null>()
  const [conditions, setConditions] = useState<Conditions>('firstRender')
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams?.get('page') ?? '1')
  const [animationState, setAnimationState] = useState<Animations>()
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (animationState === 'forward') setConditions('previousAnimationWasForward')
    if (animationState === 'backwards') setConditions('previousAnimationWasBackwards')
  }, [animationState])

  useLayoutEffect(() => {
    if (pathname !== prevPathName.current) {
      setAnimationState(undefined)
    }
  }, [currentPage, pathname])

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
    !animationState && 'blur-[10px]',
    animationState === 'forward' && 'animate-[toUnblur_500ms_ease-in-out_forwards]',
    animationState === 'backwards' && 'animate-[fromBlurredToHide_500ms_ease-in-out_forwards]',
    conditions === 'previousAnimationWasForward' &&
      hasItems &&
      'animate-[fromHideToShow_500ms_ease-in-out_forwards]'
  )
}
