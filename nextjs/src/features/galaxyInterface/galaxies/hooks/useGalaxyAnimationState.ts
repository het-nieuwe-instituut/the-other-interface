import { useSearchParams, usePathname } from 'next/navigation'
import { useRef, useState, useLayoutEffect } from 'react'

export type Animations = 'forward' | 'backwards' | undefined
export type Conditions =
  | 'previousAnimationWasBackwards'
  | 'previousAnimationWasForward'
  | 'firstRender'
  | undefined

export function useGalaxyAnimationState() {
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

  return { conditions, animationState, setAnimationState }
}
