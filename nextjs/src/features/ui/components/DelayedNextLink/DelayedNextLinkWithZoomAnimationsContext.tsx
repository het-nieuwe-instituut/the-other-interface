'use client'
import { GalaxyZoomAnimationStateContext } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { Animations } from '@/features/galaxyInterface/galaxies/hooks/useGalaxyAnimationState'
import React, { useContext } from 'react'
import { DelayedNextLink, DelayedNextLinkProps } from './DelayedNextLink'

export type DelayedNextLinkWithZoomAnimationsProps = DelayedNextLinkProps & {
  delay: number
  animation: Animations
}
export const DelayedNextLinkWithZoomAnimationsContext = React.forwardRef<
  HTMLAnchorElement,
  DelayedNextLinkWithZoomAnimationsProps
>((props: DelayedNextLinkWithZoomAnimationsProps, ref) => {
  const { onClick, animation, ...restProps } = props
  const { setAnimationState } = useContext(GalaxyZoomAnimationStateContext)

  return (
    <DelayedNextLink
      {...restProps}
      ref={ref}
      onClick={e => {
        setAnimationState(animation)
        onClick?.(e)
      }}
    />
  )
})
DelayedNextLinkWithZoomAnimationsContext.displayName = 'DelayedNextLinkWithZoomAnimationsContext'
