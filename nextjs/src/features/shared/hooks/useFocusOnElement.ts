import { useCallback, useEffect } from 'react'

export function useFocusOnElement(ref: React.RefObject<HTMLInputElement>, trigger: boolean) {
  useEffect(() => {
    if (trigger) {
      ref.current?.focus()
    }
  }, [ref, trigger])

  const focus = useCallback(() => {
    ref.current?.focus()
  }, [ref])

  return { focus, ref }
}
