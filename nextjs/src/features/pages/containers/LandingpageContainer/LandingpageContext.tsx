import { createContext, useState } from "react";
import { StoryWithoutRelationsEntity, ZoomLevel2Query } from "src/generated/graphql";

interface LandingpageContextProps {
    zoomLevel2: ZoomLevel2Query | null
    stories: StoryWithoutRelationsEntity[] | undefined | null
    setStories: (stories: StoryWithoutRelationsEntity[]) => void
    setZoom1Level2: (zoomLevel: ZoomLevel2Query) => void
}

const LandingpageContext = createContext<LandingpageContextProps>({} as LandingpageContextProps)

interface Props {
    children: React.ReactNode;
    zoomLevel2: ZoomLevel2Query | null;
    stories: StoryWithoutRelationsEntity[] | null | undefined
  }

export const LandingpageProvider: React.FC<Props> = ({ zoomLevel2, children, stories }) => {
    const [_zoomLevel2, setZoom1Level2] = useState(zoomLevel2)
    const [_stories, setStories] = useState(stories)

    console.log(stories)

    return (
        <LandingpageContext.Provider value={{
            zoomLevel2: _zoomLevel2,
            setZoom1Level2,
            stories: _stories,
            setStories
        }}> 
            {children}
        </LandingpageContext.Provider> 
    )
}

export default LandingpageContext