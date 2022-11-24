import { createContext, useEffect, useState } from "react";
import { Zoom3ReturnType } from "./zoom3Query.mapper";

interface LandingpageFilterContextProps {
    zoomLevel3: Zoom3ReturnType | null 
    setZoomLevel3: (zoomLevel: Zoom3ReturnType) => void
}

const LandingpageFilterContext = createContext<LandingpageFilterContextProps>({} as LandingpageFilterContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel3: Zoom3ReturnType | null;
  }

export const LandingpageFilterProvider: React.FC<Props> = ({ zoomLevel3, children}) => {
    const [_zoomLevel3, setZoomLevel3] = useState<Zoom3ReturnType | null>(null)

    useEffect(() => {
        setZoomLevel3(zoomLevel3)
    }, [zoomLevel3])

    return (
        <LandingpageFilterContext.Provider value={{
            zoomLevel3: _zoomLevel3,
            setZoomLevel3,
        }}> 
            {children}
        </LandingpageFilterContext.Provider> 
    )
}

export default LandingpageFilterContext