import React, { useEffect, useState } from 'react'

export function useLimitPrefaceHeight(
  prefaceRef: React.RefObject<HTMLDivElement>,
  limitHeight?: boolean
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [prefaceHeight, setPrefaceHeight] = useState(0)
  const [limitPrefaceHeight, setLimitPrefaceHeight] = useState(!!limitHeight)

  useEffect(() => {
    if (!prefaceHeight) {
      setPrefaceHeight(prefaceRef.current?.clientHeight ?? 0)
    }
  }, [prefaceRef, prefaceHeight])

  return [limitPrefaceHeight && prefaceHeight > 500, setLimitPrefaceHeight]
}
