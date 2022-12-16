import { Zoom4ReturnType } from "@/features/galaxy/Collections/zoom4QueryTask";
import { createContext, useEffect, useState } from "react";
import { StoryWithoutRelationsEntity, ZoomLevel2Query } from "src/generated/graphql";
import { Zoom3ReturnType } from "../../tasks/zoom3Query.mapper";

interface LandingpageContextProps {
    zoomLevel2: ZoomLevel2Query | null
    zoomLevel3: Zoom3ReturnType | null 
    zoomLevel4: Zoom4ReturnType | null;
    stories: StoryWithoutRelationsEntity[] | undefined | null
    setStories: (stories: StoryWithoutRelationsEntity[]) => void
    setZoomLevel2: (zoomLevel: ZoomLevel2Query) => void
    setZoomLevel3: (zoomLevel: Zoom3ReturnType) => void
    setZoomLevel4: (zoomLevel: Zoom4ReturnType) => void
}

const LandingpageContext = createContext<LandingpageContextProps>({} as LandingpageContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel2: ZoomLevel2Query | null
    zoomLevel3: Zoom3ReturnType | null 
    zoomLevel4: Zoom4ReturnType | null;
    stories: StoryWithoutRelationsEntity[] | null | undefined
  }

export const LandingpageProvider: React.FC<Props> = ({ zoomLevel2, zoomLevel3, zoomLevel4,  children, stories }) => {
    const [_stories, setStories] = useState<Props['stories']>(null)
    const [_zoomLevel2, setZoomLevel2] = useState<Props['zoomLevel2']>(null)
    const [_zoomLevel3, setZoomLevel3] = useState<Props['zoomLevel3']>(null)
    const [_zoomLevel4, setZoomLevel4] = useState<Props['zoomLevel4']>(null)

    useEffect(() => {
        setStories(stories)
    }, [stories])

    useEffect(() => {
        setZoomLevel2(zoomLevel2)
    }, [zoomLevel2])

    useEffect(() => {
        setZoomLevel3(zoomLevel3)
    }, [zoomLevel3])

    useEffect(() => {
        setZoomLevel4(zoomLevel4)
    }, [zoomLevel4])

    return (
        <LandingpageContext.Provider value={{
            zoomLevel2: _zoomLevel2,
            zoomLevel3: _zoomLevel3,
            zoomLevel4: _zoomLevel4,
            stories: _stories,
            setZoomLevel2,
            setZoomLevel3,
            setZoomLevel4,
            setStories
        }}> 
            {children}
        </LandingpageContext.Provider> 
    )
}

export default LandingpageContext