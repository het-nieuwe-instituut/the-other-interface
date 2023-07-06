import { createContext, useState } from 'react'

// import { StoryBySlugQuery } from "src/generated/graphql";
import { SupportedQuerys, Zoom5RecordResult } from '../../tasks/zoom5Config'

interface RecordContextProps {
  detail: Zoom5RecordResult['zoom5detail']
  type: SupportedQuerys
  setZoomLevel5: (zoomLevel: Zoom5RecordResult | null) => void
  setType: (zoomLevel: SupportedQuerys) => void
}

const RecordContext = createContext<RecordContextProps>({} as RecordContextProps)

interface Props {
  children: React.ReactNode
  zoomLevel5: Zoom5RecordResult | null
  type: SupportedQuerys
}

export const RecordProvider: React.FC<Props> = ({ zoomLevel5, type, children }) => {
  const [_zoomLevel5, setZoomLevel5] = useState<Zoom5RecordResult | null>(zoomLevel5)
  const [_type, setType] = useState<SupportedQuerys>(type)

  return (
    <RecordContext.Provider
      value={{
        detail: _zoomLevel5?.zoom5detail,
        type: _type,
        setZoomLevel5,
        setType,
      }}
    >
      {children}
    </RecordContext.Provider>
  )
}

export default RecordContext
