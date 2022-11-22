import { createContext, useState } from "react";
import { ZoomLevel1Query } from "src/generated/graphql";

interface HomepageContextProps {
    zoomLevel1: ZoomLevel1Query | undefined
    setZoom1Level: (zoomLevel: ZoomLevel1Query) => void
}

const HomepageContext = createContext<HomepageContextProps>({} as HomepageContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel1: ZoomLevel1Query | undefined
  }

export const HomepageProvider: React.FC<Props> = ({ zoomLevel1, children }) => {
    const [_zoomLevel1, setZoom1Level] = useState(zoomLevel1)

    return (
        <HomepageContext.Provider value={{
            zoomLevel1: _zoomLevel1,
            setZoom1Level
        }}> 
            {children}
        </HomepageContext.Provider> 
    )
}

export default HomepageContext