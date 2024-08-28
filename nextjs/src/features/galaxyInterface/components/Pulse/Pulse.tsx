import { cn } from '@/features/ui/utils/cn'
import uniqueId from 'lodash/uniqueId'
import React, { useCallback, useEffect, useRef } from 'react'
import styles from './Pulse.module.css'

export const PulseContext = React.createContext<{
  activePulses: string[]
  active: boolean
  start: (id: string) => void
  stop: (id: string) => void
}>({
  activePulses: [],
  active: false,
  start: () => undefined,
  stop: () => undefined,
})

export const PulseProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePulses, setActivePulses] = React.useState<string[]>([])

  const start = useCallback((id: string) => {
    setActivePulses(prevPulses => [...prevPulses, id])
  }, [])

  const stop = useCallback((id: string) => {
    setActivePulses(prevPulses => prevPulses.filter(v => v !== id))
  }, [])

  return (
    <PulseContext.Provider value={{ active: !!activePulses.length, activePulses, start, stop }}>
      {children}
    </PulseContext.Provider>
  )
}

export const PulseVisual = ({ className }: { className?: string }) => {
  const pulseContext = React.useContext(PulseContext)
  return (
    <div
      className={cn(
        styles.container,
        'transition-opacity opacity-100',
        !pulseContext.active && 'opacity-0',
        className
      )}
    >
      <div className={cn(styles.pulse)}></div>
    </div>
  )
}

export const Pulse = ({
  delay = 0,
  trigger = true,
  hide,
}: {
  hide?: boolean
  trigger?: boolean
  delay?: number
}) => {
  const { start, stop } = React.useContext(PulseContext)
  const timeout = useRef<NodeJS.Timeout>()
  const uniqueIdRef = useRef(uniqueId())

  useEffect(() => {
    const uniqueId = uniqueIdRef.current
    if (trigger && !hide) {
      timeout.current = setTimeout(() => {
        start(uniqueId)
      }, delay)
    }
    return () => {
      clearTimeout(timeout.current)
      stop(uniqueId)
    }
  }, [trigger, delay, start, stop, hide])

  useEffect(() => {
    if (hide) {
      stop(uniqueIdRef.current)
    }
  }, [hide, stop])

  return null
}
