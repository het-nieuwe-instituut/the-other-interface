import { hexToHSL } from '@/features/shared/utils/colors'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useMemo } from 'react'

export function useRandomBackgroundData<D extends Array<D[0]>>(
  data: D,
  getId: (item: D[0]) => string,
  hex: string
) {
  const backgrounds = useMemo(
    () =>
      data.map(item => {
        const hsl = hexToHSL(hex)
        const randomSValue = randomNumberBetweenPoints(10, 100)
        const randomLValue = randomNumberBetweenPoints(10, 90)
        const background = `radial-gradient(50% 50% at 50% 50%, hsla(${hsl.h}, ${randomSValue}%,${randomLValue}%,1) 0%, hsla(${hsl.h}, ${randomSValue}%,${randomLValue}%,0) 100%);`
        return { id: getId(item), background }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  return backgrounds
}
