import { createContext, useEffect, useState } from "react";
// import { StoryBySlugQuery } from "src/generated/graphql";
import { Zoom5RecordResult } from "../../tasks/zoom5Config";


interface RecordContextProps {
    detail: Zoom5RecordResult['zoom5detail'],
    setZoomLevel5: (zoomLevel: Zoom5RecordResult) => void
}

const RecordContext = createContext<RecordContextProps>({} as RecordContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel5: Zoom5RecordResult |  null;
  }

export const RecordProvider: React.FC<Props> = ({ zoomLevel5, children}) => {
    const [_zoomLevel5, setZoomLevel5] = useState<Zoom5RecordResult |  null>(null)

    useEffect(() => {
        setZoomLevel5(zoomLevel5)
    }, [zoomLevel5])

    return (
        <RecordContext.Provider value={{
            detail: _zoomLevel5?.zoom5detail,
            setZoomLevel5,
        }}> 
            {children}
        </RecordContext.Provider> 
    )
}

export default RecordContext