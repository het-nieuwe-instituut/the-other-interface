import { useState } from 'react'

import { ZoomLevel1Query } from 'src/generated/graphql'
import { HomepageContext } from './HomepageContext'

interface Props {
  children: React.ReactNode
  zoomLevel1: ZoomLevel1Query | undefined
}

export const HomepageProvider: React.FC<Props> = ({ zoomLevel1, children }) => {
  const [_zoomLevel1, setZoom1Level] = useState(zoomLevel1)

  return (
    <HomepageContext.Provider
      value={{
        zoomLevel1: _zoomLevel1,
        setZoom1Level,
      }}
    >
      {children}
    </HomepageContext.Provider>
  )
}
