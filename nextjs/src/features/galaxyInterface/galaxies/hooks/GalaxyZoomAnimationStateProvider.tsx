import { cn } from '@/features/ui/utils/cn'
import { useSearchParams, usePathname } from 'next/navigation'
import { useRef, useState, useLayoutEffect } from 'react'

import React from 'react'

export const GalaxyZoomAnimationStateContext = React.createContext<{
  animationState?: Animations
  conditions?: 'previousAnimationWasBackwards' | 'previousAnimationWasForward' | 'firstRender'
  setAnimationState: React.Dispatch<React.SetStateAction<Animations | undefined>>
}>({
  animationState: undefined,
  conditions: undefined,
  setAnimationState: () => undefined,
})

export type Animations = 'forward' | 'backwards' | undefined
export type Conditions =
  | 'previousAnimationWasBackwards'
  | 'previousAnimationWasForward'
  | 'firstRender'
  | undefined

export const GalaxyZoomAnimationStateProvider = ({ children }: { children: React.ReactNode }) => {
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
