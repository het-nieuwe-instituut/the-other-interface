import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

type ElementPosition = {
  left: number | undefined
  right: number | undefined
  top: number | undefined
  bottom: number | undefined
  width: number | undefined
  height: number | undefined
}

export const useElementPosition = () => {
  const { width, height } = useWindowSize()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any | null>(null)
  const [position, setPosition] = useState<ElementPosition>({
    left: undefined,
    right: undefined,
    top: undefined,
    bottom: undefined,
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect()
      setPosition({
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height,
      })
    }
  }, [width, height])

  return [position, ref] as const
}
