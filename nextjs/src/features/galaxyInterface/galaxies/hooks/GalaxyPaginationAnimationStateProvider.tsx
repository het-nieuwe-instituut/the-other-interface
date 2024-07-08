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
    conditions === 'previousAnimationWasBackwards' && 'animate-fromHideToShow',
    animationState === 'forward' && 'animate-toBlurAndHide',
    animationState === 'backwards' && 'animate-toBlur',
    conditions === 'firstRender' && 'animate-fromHideToShow'
  )
}

export const getNextItemsAnimationClassNames = (
  animationState: Animations,
  conditions: Conditions,
  hasItems: boolean
) => {
  return cn(
    !animationState && 'blur-[10px]',
    animationState === 'forward' && 'animate-toUnblur',
    animationState === 'backwards' && 'animate-fromBlurredToHide',
    conditions === 'previousAnimationWasForward' && hasItems && 'animate-fromHideToShow'
  )
}
