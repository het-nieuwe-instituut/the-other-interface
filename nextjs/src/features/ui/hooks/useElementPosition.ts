import { useCallback, useState } from 'react'

type ElementPosition = {
  left: number | undefined
  right: number | undefined
  top: number | undefined
  bottom: number | undefined
  width: number | undefined
  height: number | undefined
}

export const useElementPosition = () => {
  const [position, setPosition] = useState<ElementPosition>({
    left: undefined,
    right: undefined,
    top: undefined,
    bottom: undefined,
    width: undefined,
    height: undefined,
  })

  const ref = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      const rect = node.getBoundingClientRect()
      setPosition({
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height,
      })
    }
  }, [])

  return [position, ref] as const
}
