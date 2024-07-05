'use client'
import { GalaxyZoomAnimationStateContext } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { LinkProps } from 'next/link'
import { useContext } from 'react'
import { DelayedNextLink } from './DelayedNextLink'
import { Animations } from '@/features/galaxyInterface/galaxies/hooks/useGalaxyAnimationState'

export const DelayedNextLinkWithZoomAnimationsContext = (
  props: LinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { delay: number; animation: Animations }
) => {
  const { onClick, animation, ...restProps } = props
  const { setAnimationState } = useContext(GalaxyZoomAnimationStateContext)

  return (
    <DelayedNextLink
      {...restProps}
      onClick={e => {
        setAnimationState(animation)
        onClick?.(e)
      }}
    />
  )
}
