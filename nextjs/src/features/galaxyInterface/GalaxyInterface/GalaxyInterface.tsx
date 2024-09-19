'use client'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'

import { USER_LOOKS_ON } from '@/features/shared/constants/mainConstants'
import useScroll from '@/features/shared/hooks/ui/useScroll'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useResizeObserver } from 'usehooks-ts'
import { PulseProvider, PulseVisual } from '../components/Pulse/Pulse'
import { State } from '@/features/shared/configs/store'
import { cn } from '@/features/ui/utils/cn'
interface Props {
  children: React.ReactNode
}

export const GalaxyInterface: React.FC<Props> = ({ children }) => {
  const graphRef = useRef<HTMLDivElement | null>(null)
  const sizes = useResizeObserver({ ref: graphRef })
  const { scrollPosition } = useScroll()
  const dispatch = useDispatch()
  const HEADER_HEIGHT = 68
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const prevLookOnRef = useRef<typeof USER_LOOKS_ON.GALAXY | typeof USER_LOOKS_ON.EDITORIAL>(
    USER_LOOKS_ON.GALAXY
  )

  useEffect(() => {
    if (!sizes?.height) return

    const threshold = sizes.height - HEADER_HEIGHT - 12
    const currentLookOn =
      scrollPosition >= threshold ? USER_LOOKS_ON.EDITORIAL : USER_LOOKS_ON.GALAXY

    if (currentLookOn !== prevLookOnRef.current) {
      dispatch(sharedActions?.userChangeLooksOn({ lookOn: currentLookOn }))
      prevLookOnRef.current = currentLookOn
    }
  }, [dispatch, scrollPosition, sizes?.height])

  useEffect(() => {
    if (!sizes?.height) return
    dispatch(sharedActions?.setGalaxyHeight({ galaxyHeight: sizes.height }))
  }, [dispatch, sizes?.height])

  return (
    <PulseProvider>
      <div className="relative block">
        <div
          className={cn(
            'fixed inset-x-0 top-0 z-[9999] mx-auto flex max-w-[90em] justify-between',
            isMenuOpen && 'hidden'
          )}
        >
          <StaticHeader />
        </div>

        <div
          className="relative inset-x-0 bottom-0 h-[calc(100vh-12vh)] bg-pink-100"
          ref={graphRef}
        >
          <div className="fixed">
            <div className="absolute w-full">
              <PulseVisual className=" h-[calc(100vh-12vh)]" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </PulseProvider>
  )
}
