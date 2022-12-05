import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { ScrollToTop } from '@/features/pages/utils/utils'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Button } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { memo, useRef } from 'react'
import { ZoomStates } from '../types/galaxy'
import { DynamicCollectionCloudsContainer } from './components/containers/DynamicCollectionGalaxyContainer'
import { DynamicFilterCloudsContainer } from './components/containers/DynamicFilterCloudsContainer'
import { DynamicGalaxyContainer } from './components/containers/DynamicGalaxyContainer'
import { DynamicPaginatedFilterCloudsContainer } from './components/containers/DynamicPaginatedFilterContainer'
import { DynamicRecordCloudsContainer } from './components/containers/DynamicRecordCloudsContainer'
import { usePresenter } from './usePresenter'

const DEBUG = true
export const GalaxyInterface: React.FC = () => {
    const { activeZoom, setActiveZoom } = usePresenter()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    return (
        <>
            <Breadcrumbs
                bg={scrollPosition >= 750 ? 'graph' : 'trasparent'}
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'}>
                            <MemoizedGalaxySwitch activeZoom={activeZoom} sizes={sizes} />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>

            {DEBUG && (
                <Box>
                    <p>{activeZoom}</p>
                    <Box zIndex={100000}>
                        {Object.values(ZoomStates).map((t, index) => {
                            return (
                                <Button key={t + index} onClick={() => setActiveZoom(t)}>
                                    {t}
                                </Button>
                            )
                        })}
                    </Box>
                </Box>
            )}
        </>
    )
}

export const includesZoomStatesMainGalaxy = [
    ZoomStates.Zoom0,
    ZoomStates.Zoom0ToZoom1,
    ZoomStates.Zoom1ToZoom0,
    ZoomStates.Zoom1Stories,
    ZoomStates.Zoom1,
    ZoomStates.Zoom1ToZoom2,
    ZoomStates.Zoom1ToZoom1Stories,
    ZoomStates.Zoom1StoriesToZoom1,
    ZoomStates.Zoom1StoriesToZoom5,
    ZoomStates.ZoomOutToZoom1,
]
export const includesZoomStatesZoom2Galaxy = [
    ZoomStates.Zoom2,
    ZoomStates.Zoom2Initial,
    ZoomStates.Zoom2ToZoom3,
    ZoomStates.Zoom2ToZoom1,
    ZoomStates.ZoomOutToZoom2,
]
export const includesZoomStatesZoom3Galaxy = [
    ZoomStates.Zoom3,
    ZoomStates.Zoom3Initial,
    ZoomStates.Zoom3ToInitial,
    ZoomStates.Zoom3ToZoom2,
    ZoomStates.Zoom3ToZoom4,
    ZoomStates.ZoomOutToZoom3,
]
export const includesZoomStatesZoom4Galaxy = [
    ZoomStates.Zoom4,
    ZoomStates.Zoom4Initial,
    ZoomStates.Zoom4ToZoom3,
    ZoomStates.Zoom4ToZoom5,
    ZoomStates.Zoom4ToInitial,
    ZoomStates.ZoomOutToZoom4,
]
export const includesZoomStatesZoom5Galaxy = [
    ZoomStates.Zoom5Initial,
    ZoomStates.Zoom5,
    ZoomStates.Zoom5ToRelation,
    ZoomStates.Zoom5ToZoom4,
]

const GalaxySwitch: React.FC<{ activeZoom: ZoomStates | null; sizes: ReturnType<typeof useSize> }> = props => {
    const { activeZoom, sizes } = props

    if (!activeZoom) {
        return <p>not able to render anything</p>
    }
    if (includesZoomStatesMainGalaxy.includes(activeZoom)) {
        return <DynamicGalaxyContainer dimensions={{ height: 800, width: sizes?.width ?? 0 }} />
    }
    if (includesZoomStatesZoom2Galaxy.includes(activeZoom)) {
        return <DynamicFilterCloudsContainer dimensions={{ height: 800, width: sizes?.width ?? 0 }} />
    }
    if (includesZoomStatesZoom3Galaxy.includes(activeZoom)) {
        return <DynamicPaginatedFilterCloudsContainer dimensions={{ height: 800, width: sizes?.width ?? 0 }} />
    }
    if (includesZoomStatesZoom4Galaxy.includes(activeZoom)) {
        return <DynamicCollectionCloudsContainer dimensions={{ height: 800, width: sizes?.width ?? 0 }} />
    }
    if (includesZoomStatesZoom5Galaxy.includes(activeZoom)) {
        return <DynamicRecordCloudsContainer dimensions={{ height: 800, width: sizes?.width ?? 0 }} />
    }
    return null
}

const MemoizedGalaxySwitch = memo(GalaxySwitch)
