import { useState, useEffect } from 'react'

import Fallback1 from '@/features/shared/assets/images/fallbacks/1.svg'
import Fallback2 from '@/features/shared/assets/images/fallbacks/2.svg'
import Fallback3 from '@/features/shared/assets/images/fallbacks/3.svg'
import Fallback4 from '@/features/shared/assets/images/fallbacks/4.svg'
import Fallback5 from '@/features/shared/assets/images/fallbacks/5.svg'

const fallbacks = [Fallback1, Fallback2, Fallback3, Fallback4, Fallback5]

export const useRandomImageFallback = () => {
  const [randomFallback, setRandomFallback] = useState<React.FC | null>(null)

  useEffect(() => {
    const selectedFallback = fallbacks[Math.floor(Math.random() * fallbacks.length)]

    setRandomFallback(() => selectedFallback)
  }, [])

  return { RandomFallback: randomFallback }
}
