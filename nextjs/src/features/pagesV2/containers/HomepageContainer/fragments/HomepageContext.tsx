import { createContext } from 'react'

import { ZoomLevel1Query } from 'src/generated/graphql'

interface HomepageContextProps {
  zoomLevel1: ZoomLevel1Query | undefined
  setZoom1Level: (zoomLevel: ZoomLevel1Query) => void
}

export const HomepageContext = createContext<HomepageContextProps>({} as HomepageContextProps)
