import { Zoom4ReturnType } from "@/features/galaxy/Collections/zoom4QueryTask";
import { createContext, useEffect, useState } from "react";


interface LandingpageCollectionContextProps {
    zoomLevel4: Zoom4ReturnType | null
    setZoomLevel4: (zoomLevel: Zoom4ReturnType) => void
}

const LandingpageCollectionContext = createContext<LandingpageCollectionContextProps>({} as LandingpageCollectionContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel4: Zoom4ReturnType | null;
  }

export const LandingpageCollectionProvider: React.FC<Props> = ({ zoomLevel4, children}) => {
    const [_zoomLevel4, setZoomLevel4] = useState<Zoom4ReturnType | null>(null)

    useEffect(() => {
        setZoomLevel4(zoomLevel4)
    }, [zoomLevel4])

    return (
        <LandingpageCollectionContext.Provider value={{
            zoomLevel4: _zoomLevel4,
            setZoomLevel4,
        }}> 
            {children}
        </LandingpageCollectionContext.Provider> 
    )
}

export default LandingpageCollectionContext